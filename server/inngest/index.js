import { model } from "mongoose";
import Booking from "../models/Booking.js";
import Show from "../models/Show.js";
import User from "../models/User.js"; // adjust path
import { Inngest } from "inngest";
import sendEmail from "../config/nodeMailer.js";

//recive events
export const inngest = new Inngest({ id: "movie-ticket-booking" });

//inngest function
const syncUserCreation = inngest.createFunction(
    {id: 'sync-user-from-clerk'},
    {event: 'clerk/user.created'},
    async ({event})=>{
        const {id, first_name, last_name, email_addresses, image_url} = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            image: image_url
        }
        await User.create(userData)
        
    }
)


//delete user
const syncUserDeletion = inngest.createFunction(
    {id: 'delete-user-with-clerk'},
    {event: 'clerk/user.deleted'},
    async ({event})=>{
        
        const {id} = event.data
        await User.findByIdAndDelete(id)
        
    }
)

//update user
const syncUserUpdation = inngest.createFunction(
    {id: 'update-user-from-clerk'},
    {event: 'clerk/user.updated'},
    async ({event})=>{
        const {id, first_name, last_name, email_addresses, image_url} = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            image: image_url
        }
        await User.findByIdAndUpdate(id, userData)
    }
)

//inngest
const releaseSeatsAndDeleteBooking = inngest.createFunction(
  {id: 'release-seats-and-delete-booking'},
  {event: "app/checkpayment"},
  async ({ event, step }) =>{
    const tenMinutesLater = new Date(Date.now() + 10 * 60 * 1000);
    await step.sleepUntil('wait-for-10-minutes', tenMinutesLater);

    await step.run('check-payment-status', async ()=>{
      const bookingId = event.data.bookingId;
      const booking = await Booking.findById(bookingId)

      //payment not done
      if(!booking.isPaid){
        const show = await Show.findById(booking.show);
        booking.bookedSeats.forEach(()=>{
          delete show.occupiedSeats[seat]
        });
        show.markModified('occupiedSeats');
        await show.save();
        await Booking.findByIdAndDelete(booking._id);
      }
    })
  }
)


//inngest function to update user details with email
const sendBookingConfirmationEmail = inngest.createFunction(
  {id: 'send-booking-confirmation-email'},
  {event: "app/show.booked"},
  async ({ event, step })=> {
    const { bookingId } = event.data;

    const booking = await Booking.findById(bookingId).populate({
      path: 'show',
      populate: {path: "movie", model: "Movie"}
    }).populate('user');

    await sendEmail({
      to: booking.user.email,
      subject: `Payment Confirmation: "${booking.show.movie.title}" booked!`,
      body: `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Hello ${booking.user.name},</h2>
      <p>Your Booking For <strong style="color: #007bff;">${booking.show.movie.title}</strong> has been confirmed.</p>
      <p>
      <strong>Date:</strong> ${new Date(booking.show.showDateTime).toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata' })}<br/>
      <strong>Time:</strong> ${new Date(booking.show.showDateTime).toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}<br/>
      </p>
      <p>Grab your popcorn and relax! 🍿</p>
      <p>Thanks for booking with us!<br/>-Movie_Go Team</p>
      </div>`
    })
  }
)

//reminder
// const sendBookingReminders = inngest.createFunction(
//   {id: 'send-show-reminders'},
//   { cron: "0 */8 * * *" }, // every 8 hours
//   async ({step})=>{
//     const now = new Date();
//     const in8Hours = new Date(now.getTime() + 8 * 60 * 60 * 1000);
//     const windowStart = new Date(in8Hours.getTime() - 10 * 60 * 1000);
//      // 30 minutes after 8 hours
//      const reminderTasks = await step.run("prepare-reminder-task", async ()=>{
//         const shows = await Show.find({
//           showTime: { $gte: windowStart, $lte: in8Hours },
//         }).populate('movie');
     
//      const tasks = [];
//     })
//       for(const show of shows){
//         if(!show.movie || !show.occupiedSeats) continue;

//         const userIds = [...new Set(Object.values(show.occupiedSeats))];
//         if(userIds.length === 0) continue;

//         const users = await User.find({_id: {$in: userIds}}).select("name email");

//         for(const user of users){
//           tasks.push({
//             userEmail: user.email,
//             userName: user.name,
//             movieTitle: show.movie.title,
//             showTime: show.showTime,
//           })
//         }
//       }
//       return tasks;
//   }
// )

const sendShowReminders = inngest.createFunction(
  { id: "send-show-reminders" },
  { cron: "0 */8 * * *" }, // every 8 hours
  async ({ step }) => {
    const now = new Date();
    const in8Hours = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    const windowStart = new Date(in8Hours.getTime() - 10 * 60 * 1000);

    // Prepare reminder tasks
    const reminderTasks = await step.run("prepare-reminder-task", async () => {
      const shows = await Show.find({
        showTime: { $gte: windowStart, $lte: in8Hours },
      }).populate("movie");

      const tasks = [];

      for (const show of shows) {
        if (!show.movie || !show.occupiedSeats) continue;

        const userIds = [...new Set(Object.values(show.occupiedSeats))];
        if (userIds.length === 0) continue;

        const users = await User.find({ _id: { $in: userIds } }).select("name email");

        for (const user of users) {
          tasks.push({
            userEmail: user.email,
            userName: user.name,
            movieTitle: show.movie.title,
            showTime: show.showTime,
          });
        }
      }

      return tasks;
    })

    if(reminderTasks.length === 0){
      return {sent: 0, message: "No reminder to send. "}
    }

    //reminder
    const result = await step.run('send-all-reminder', async ()=>{
      return await Promise.allSettled(
        reminderTasks.map(task => sendEmail({
          to: task.userEmail,
          subject: `Reminder: Your movie "${task.movieTitle}" starts soon!`,
          body: `<div style="font-family: Arial, sans-serif; padding:20px">
          <h2>Hello ${task.userName}</h2>
          <p>This is quick reminder that your movie:</p>
          <h3 style="color: #84565;">"${task.movieTitle}"</h3>
          <p>
          is schedule for <strong>${new Date(task.showTime).toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata'})}</strong> at
          <strong>${new Date(task.showTime).toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata'})}</strong>
          </p>
          <p>It starts in approximately <strong>8 hours</strong>- get ready for it!</p>
          <br/>
          <p>Enjoy the Show!<br/>MovieGo team</p>
          </div>`
        }))
      )
    })
    const sent = results.filter(r => r.satus === "fulfilled").length;
    const failed = result.length - sent;

    return {
      sent,
      failed,
      message: `Sent ${sent} reminder(s), ${failed} failed.`
    }
  }
)


const sendNewShowNotifications = inngest.createFunction(
  {id: "send-new-show-notification"},
  { event: "app/show.added" },
  async ({ event }) =>{
    const { movieTitle } = event.data;

    const users = await User.find({})

    for(const user of users){
      const userEmail = user.email;
      const userName = user.name;

      const subject = `🎥 New show added: ${movieTitle}`;
      const body = `<div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>Hello ${userName}</h2>
      <p>New show added in libarary:</p>
      <h3 style="color: #f84565;">"${movieTitle}"</h3>
      <p>Visite our website</p>
      <br/>
      <p>Thanks,<br/>Abhishek's Team</p>
      </div>`;

    await sendEmail({
      to: userEmail,
      subject,
      body
    })
    }
    return {message: "Notification send."}
  }
)



// const syncUserUpdation = inngest.createFunction(
//   { id: "update-user-from-clerk" },
//   { event: "clerk/user.updated" },
//   async ({ event }) => {

//     const {
//       id,
//       first_name,
//       last_name,
//       email_addresses,
//       image_url
//     } = event.data;

//     await User.findByIdAndUpdate(
//       id,
//       {
//         email: email_addresses[0].email_address,
//         name: `${first_name} ${last_name}`,
//         image: image_url
//       },
//       { new: true } // optional but recommended
//     );
//   }
// );

// Create an empty array where we'll export future Inngest functions
export const functions = [
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdation,
    releaseSeatsAndDeleteBooking,
    sendBookingConfirmationEmail,
    sendShowReminders,
    sendNewShowNotifications
];