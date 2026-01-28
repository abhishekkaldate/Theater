// import React, { useState } from "react";
// import { dummyTrailers } from "../assets/assets";
// import ReactPlayer from "react-player";
// import BlurCircle from "./BlurCircle";
// import { PlayCircle } from "lucide-react";

// const TrailerSection = () => {
//   const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

//   // 🔥 Convert YouTube URL to EMBED format
//   const getPlayableUrl = (url) => {
//     if (!url) return "";

//     if (url.includes("watch?v=")) {
//       const id = url.split("watch?v=")[1].split("&")[0];
//       return `https://www.youtube.com/embed/${id}`;
//     }

//     if (url.includes("youtu.be/")) {
//       const id = url.split("youtu.be/")[1].split("?")[0];
//       return `https://www.youtube.com/embed/${id}`;
//     }

//     return url; // already embed or other platform
//   };

//   return (
//     <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
//       <p className="text-gray-300 font-medium text-lg max-w-4xl">Trailer</p>

//       {/* 🎬 MAIN PLAYER */}
//       <div className="relative mt-6">
//         <BlurCircle top="-100px" right="-100px" />

//         <ReactPlayer
//           url={getPlayableUrl(currentTrailer.videoUrl)}
//           controls
//           playing
//           width="100%"
//           height="540px"
//           className="mx-auto max-w-full rounded-xl overflow-hidden"
//         />
//       </div>

//       {/* 🎞️ TRAILER THUMBNAILS */}
//       <div className="group grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
//         {dummyTrailers.map((trailer, index) => (
//           <div
//             key={index}
//             className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition cursor-pointer"
//             onClick={() => setCurrentTrailer(trailer)}
//           >
//             <img
//               src={trailer.image}
//               alt="trailer"
//               className="rounded-lg w-full h-40 md:h-48 object-cover brightness-75"
//             />
//             <PlayCircle
//               strokeWidth={1.6}
//               className="absolute top-1/2 left-1/2 w-8 h-8 text-white transform -translate-x-1/2 -translate-y-1/2"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrailerSection;

















// import React, { useState } from 'react'
// import { dummyTrailers } from '../assets/assets'
// import ReactPlayer from 'react-player'
// import BlurCircle from './BlurCircle'
// import { PlayCircle } from 'lucide-react'

// const TrailerSection = () => {
//   const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

//   return (
//     <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
//       <p className="text-gray-300 font-medium text-lg max-w-4xl">
//         Trailer
//       </p>

//       <div className='relative mt-6'>
//         <BlurCircle top='-100px' right='-100px'/>
//         <ReactPlayer url={currentTrailer.videoUrl} controls={false}
//         className='mx-auto max-w-full' width='960px' height='540px'
//         />
//       </div>

//       <div className='group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
//       {dummyTrailers.map((trailer)=> (
//             <div key={trailer.image} className='relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer'
//             onClick={()=> setCurrentTrailer(trailer)}>

//                 <img src={trailer.image} alt='trailer' className='
//                 rounded-lg w-full h-full object-cover brightness-75'/>
//                 <PlayCircle strokeWidth={1.6} 
//                     className='absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2'
//                 />

//             </div>
//       ))}

//       </div>
//     </div>
//   )
// }

// export default TrailerSection


import { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle'
import { PlayCircle } from 'lucide-react'

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])
  const [play, setPlay] = useState(false)

  // YouTube embed URL convert
  const getEmbedUrl = (url) => {
    const id = url.includes('youtu.be')
      ? url.split('/').pop()
      : url.split('v=')[1]
    return `https://www.youtube.com/embed/${id}?autoplay=1`
  }

  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-44 py-20">
      <p className="text-gray-300 font-medium text-lg text-center mb-6">
        Trailer
      </p>

      {/* MAIN VIDEO */}
      <div className="relative max-w-screen mx-auto aspect-video bg-black rounded-xl overflow-hidden">
        <BlurCircle top="-100px" right="-100px" />

        {!play ? (
          <div
            onClick={() => setPlay(true)}
            className="relative w-full h-full cursor-pointer"
          >
            <img
              src={currentTrailer.image}
              alt="trailer"
              className="w-full h-full object-cover brightness-75"
            />

            <PlayCircle
              className="absolute top-1/2 left-1/2 w-16 h-16 text-white
                         -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={getEmbedUrl(currentTrailer.videoUrl)}
            title="Trailer"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>

      {/* THUMBNAILS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            onClick={() => {
              setCurrentTrailer(trailer)
              setPlay(true)
            }}
            className="relative cursor-pointer hover:-translate-y-1 transition"
          >
            <img
              src={trailer.image}
              className="rounded-lg w-full h-32 md:h-40 object-cover brightness-75"
            />

            <PlayCircle
              className="absolute top-1/2 left-1/2 w-8 h-8 text-white
                         -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrailerSection