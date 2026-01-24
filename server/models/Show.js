import mongoose from "mongoose";

const showSchema = new mongoose.Schema(
    {
        movie: {type: String, required: true, ref: 'Movie'},
        showDateTime: { type: Date, required: true },
        showPrice: { type: Number, required: true },
        occupiedSeats: { type: Object, default: {} },
    }, { minimize: false}
)

const Show = mongoose.model("Show", showSchema);

export default Show;














// import mongoose from "mongoose";

// const showSchema = new mongoose.Schema(
//   {
//     movie: {
//       type: String,   // 🔥 STRING (TMDB movie id)
//       required: true
//     },
//     showDateTime: {
//       type: Date,
//       required: true
//     },
//     showPrice: {
//       type: Number,
//       required: true
//     },
//     occupiedSeats: {
//       type: Object,
//       default: {}
//     }
//   },
//   { timestamps: true }
// );

// const Show = mongoose.model("Show", showSchema);
// export default Show;