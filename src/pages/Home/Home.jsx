import React, { useEffect, useState } from 'react'
import './home.css'
import HeroImg from '../../assets/maxresdefault.jpg'
import Button from '../../common-components/Button'
import Rating from '../../common-components/Rating'
import Card from '../../common-components/Card'
import axios from 'axios'
import useApi from '../../hooks/useApi'
import { imageHost } from '../../config/imagePath'
const Home = () => {
  const {getPopular} = useApi()
  const [suggested, setSuggested] = useState({})
  const [popularList, setPopularList] = useState([])
  let text = 'In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa -- a powerful Teamster tied to organized crime.'
  useEffect(() => {
    let isCalled = true
    getPopular().then(res => {
     setSuggested(res.data?.results[0])
     setPopularList(res.data?.results)
    })
  }, [])
  
  return (
    <div className='flex flex-col min-h-screen w-full'>
        <div className="suggested-film w-full h-[368px] flex relative">
            <img className='max-w-full min-w-full h-auto object-cover bg-blend-overlay mix-blend-overlay blur-[2px]' src={imageHost+suggested?.backdrop_path} alt="suggested-movie-poster" />
            <div className="details absolute z-50 bottom-0 w-full">
              <div className="flex flex-col ml-14 pl-6 max-w-[50%] text-white space-y-4 border-l border-red-600">
             <div className="flex  justify-start py-2 px-4 w-fit items-center " 
             style={{
              background: 'rgb(96,96,96)',
              background: 'linear-gradient(90deg, rgba(96,96,96,0.35057773109243695) 0%, rgba(13,13,13,0.7203256302521008) 100%)'
             }}>
              <p className='font-semibold text-3xl'>{suggested?.title}
              </p>
              <div className="flex ml-6 justify-center items-center mb-1">
                <Rating rating={suggested?.vote_average}/>
              </div>
             </div>
              <p className=' font-light text-base'>{suggested?.overview?.length>305? suggested?.overview.substring(0,305)+'.....':suggested?.overview}</p>
              </div>
              <div className="flex w-[50%] justify-center items-center mt-6 mb-4">
                <Button text={'Learn more'}/>
              </div>
            </div>
        </div>
        <div className="most-popular w-full items-center pt-6 justify-start flex flex-col relative" style={{height:'calc(100vh - 368px)'}}>
          <div className="flex w-full justify-between items-center text-white">
          <p className='ml-14 pl-6 border-l border-red-600 h-12 flex items-center text-lg font-light text-[#77CAEE]'>MOST POPULAR</p>
          <div className="mr-14">
          <button className='tracking-[0.1em] text-sm'>{'VIEW MORE ->'}</button>
          </div>
          </div>
          <div className="cards space-x-4 px-20 grid grid-cols-4 mt-4 w-full">
            {
              popularList?.slice(1,5)?.map(movie => {
                return(
                  <Card key={movie?.id} movie={movie}/>
                )
              })
            }
          </div>
        </div>
        </div>
  )
}

export default Home