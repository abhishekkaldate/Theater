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
    sendBookingConfirmationEmail
];