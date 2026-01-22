import mongoose from 'mongoose';


const movieSchema = new mongoose.Schema(
    {
        _id: {type: String, required: true},
        title: {type: String, required: true},
        overview: {type: String, required: true},
        poster_path: {type: String, required: true},
        backdrop_path: {type: String, required: true},
        release_date: {type: String, required: true},
        original_language: {type: String},
        tagline: {type: String},
        genres: {type: Array, required: true},
        casts: {type: Array, required: true},
        vote_average: {type: Number, required: true},
        runtime: {type: Number, required: true},
    },{timestamps: true}
)

const Movie = mongoose.model('Movie', movieSchema)

export default Movie;

// import mongoose from "mongoose";

// const movieSchema = new mongoose.Schema(
//   {
//     _id: { type: String, required: true }, // TMDB ID
//     title: { type: String, required: true },
//     overview: { type: String },
//     poster_path: { type: String },
//     backdrop_path: { type: String },
//     release_date: { type: String },
//     original_language: { type: String },
//     tagline: { type: String },
//     genres: { type: Array },
//     casts: { type: Array },
//     vote_average: { type: Number },
//     runtime: { type: Number }
//   },
//   { timestamps: true }
// );

// const Movie = mongoose.model("Movie", movieSchema);
// export default Movie;