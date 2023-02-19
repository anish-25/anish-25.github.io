import React from 'react'
import { imageHost } from '../config/imagePath'
import Rating from './Rating'

const Card = ({movie}) => {
    let synopsis = 'Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.'
  return (
    <div className='h-[313px] cursor-pointer w-[255px] flex-col p-2 flex items-center justify-center bg-[#AEAEAE] relative group transition-all duration-200 hover:scale-[1.1]'>
        <img className='h-full w-full object-cover'
        src={imageHost+movie?.backdrop_path} alt="movie-poster" />
    <div className="absolute  mx-2 w-[94%] bg-blend-overlay mix-blend-normal flex items-center justify-center text-white bg-[#383838] h-[40%] bottom-2">
        <div className="flex flex-col justify-start items-start w-full px-4 py-2">
            <p className=' font-normal text-sm text-[#A6D2D0]'>{movie?.title}</p>
            <p className='text-xs mt-2 font-extralight tracking-wider'>{movie?.overview?.length>85 ? movie?.overview.substring(0,85)+'......':movie?.overview}</p>
            <div className="flex mt-3">
            <Rating rating={movie?.vote_average} size={'small'}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card