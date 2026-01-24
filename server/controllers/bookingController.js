import Booking from "../models/Booking.js";
import Show from "../models/Show.js"
import Stripe from "stripe";

//function
const checkSeatsAvailability = async (showId, selectedSeats)=>{
    try {
        const showData = await Show.findById(showId)
        if(!showData) return false;

        const occupiedSeats = showData.occupiedSeats;

        const isAnySeatTaken = selectedSeats.some(seat => occupiedSeats[seat]);

        return !isAnySeatTaken;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}


// export const createBooking = async (req, res) => {
//   try {
//     const { userId } = req.auth();
//     const { showId, selectedSeats, showDateTime } = req.body;

//     if (!showDateTime) {
//       return res.json({ success: false, message: "Show time missing" });
//     }

//     // get show
//     const showData = await Show.findById(showId);

//     if (!showData) {
//       return res.json({ success: false, message: "Show not found" });
//     }

//     // init occupiedSeats for this time if not exists
//     if (!showData.occupiedSeats[showDateTime]) {
//       showData.occupiedSeats[showDateTime] = [];
//     }

//     // check seat availability TIME-WISE
//     const alreadyBooked = selectedSeats.some(seat =>
//       showData.occupiedSeats[showDateTime].includes(seat)
//     );

//     if (alreadyBooked) {
//       return res.json({ success: false, message: "Seats already booked" });
//     }

//     // create booking
//     const booking = await Booking.create({
//       user: userId,
//       show: showId,
//       amount: showData.showPrice * selectedSeats.length,
//       bookedSeats: selectedSeats
//     });

//     // block seats for this time
//     showData.occupiedSeats[showDateTime].push(...selectedSeats);
//     showData.markModified("occupiedSeats");

//     await showData.save();

//     res.json({ success: true, message: "Booked successfully" });

//   } catch (error) {
//     console.log(error.message);
//     res.json({ success: false, message: error.message });
//   }
// };

export const createBooking = async (req, res)=>{
    try {
        const {userId} = req.auth();
        const {showId, selectedSeats} = req.body;
        const { origin } = req.headers;

        //check seats
        const isAvailable = await checkSeatsAvailability(showId, selectedSeats)

        if(!isAvailable){
            return res.json({success: false, message: "seats are not available"})
        }

        //get show
        const showData = await Show.findById(showId).populate('movie');

        //create booking
        const booking = await Booking.create({
            user: userId,
            show: showId,
            amount: showData.showPrice * selectedSeats.length,
            bookedSeats: selectedSeats
        })

        selectedSeats.map((seat)=>{
            showData.occupiedSeats[seat] = userId;
        })

        showData.markModified('occupiedSeats');

        await showData.save();

        //strip
        const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

        const line_items = [{
            price_data: {
                currency: 'inr',
                product_data: {
                    name: showData.movie.title
                },
                unit_amount: Math.floor(booking.amount) * 100,
            },
            quantity: 1,

        }]

        const session = await stripeInstance.checkout.sessions.create({
            success_url: `${origin}/loading/my-bookings`,
            cancel_url: `${origin}/my-bookings`,
            line_items: line_items,
            mode: 'payment',
            metadata: {
                bookingId: booking._id.toString(),
            },
            expires_at: Math.floor(Date.now() / 1000) + 30 * 60, // 15 minutes from now
    })

    booking.paymentLink = session.url
    await booking.save()

    res.json({success: true, url:session.url})

        res.json({success: true, message: "booked successfully"})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})

    }
}


// export const getOccupiedSeats = async (req, res) => {
//   try {
//     const { showId, showDateTime } = req.params;

//     const showData = await Show.findById(showId);

//     const seats = showData.occupiedSeats?.[showDateTime] || [];

//     res.json({ success: true, occupiedSeats: seats });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

export const getOccupiedSeats = async (req, res)=>{
    try {
        const {showId} = req.params;
        const showData = await Show.findById(showId)

        const occupiedSeats = Object.keys(showData.occupiedSeats)

        res.json({success: true, occupiedSeats})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})

    }
}