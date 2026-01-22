import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const MovieCard = ({movie}) => {

const navigate = useNavigate() 
const {image_base_url} = useAppContext()

const imageUrl =
  movie.poster_path
    ? image_base_url + movie.poster_path
    : movie.backdrop_path
      ? image_base_url + movie.backdrop_path
      : "/no-image.png";

  return (
    <div className='flex flex-col justify-between p-3 bg-gray-600 rounded-2xl hover:-translate-y-1 transition duration-300 w-66'>

<img
  src={imageUrl}
  alt={movie.title}
  className="rounded-lg h-52 w-full object-cover"
/>

    {/* <img onClick={()=>{navigate(`/movies/${movie._id}`); scrollTo(0,0)}}
    src={image_base_url + movie.backdrop_path} alt={movie.title}
      className='rounded-lg h-52 w-full object-cover object-right cursor-pointer'/> */}

      <p className='font-semibold mt-2 truncate'>{movie.title}</p>


   
      <p className='text-sm text-gray-400 mt-2'>
        {new Date(movie.release_date).getFullYear()} • {movie.genres?.slice(0,2).map(genre => genre.name).join(" | ")} • {movie.runtime}
      </p>

      <div className='flex items-center justify-between mt-4 pb-3'>
        <button onClick={()=>{navigate(`/movies/${movie._id}`); scrollTo(0,0)}}
         className='px-4 py-2 text-xs bg-amber-600 hover:bg-amber-500 transition rounded-full font-medium cursor-pointer'>
          Buy Tickets
        </button>
        <p className='flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1'>
          <StarIcon className='w-4 h-4 text-yellow-700 fill-amber-600'/>
          {typeof movie.vote_average === "number"
  ? movie.vote_average.toFixed(1)
  : "N/A"}
          {/* {movie.vote_average?.toFixed(1)} */}
        </p>
      </div>

      
    </div>
  )
}

export default MovieCard
