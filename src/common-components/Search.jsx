import React from 'react'
import SearchIcon from '../assets/SearchIcon.png'
const Search = ({value,onChange}) => {
  return (
    <div className='border flex items-center justify-center border-[#E9E9E9] rounded-[10px] h-[40px] w-[330px] relative transition-all duration-150 hover:border-[#77CAEE] focus-within:border-[#77CAEE]'>
    <input type="text" value={value} onChange={onChange} className='h-full w-[85%] focus:outline-none px-4 bg-transparent text-white' />
    <div className="w-[15%] flex items-center justify-center">
    <img src={SearchIcon} className='h-[25px] w-[25px]' alt="" />
    </div>
    </div>
  )
}

export default Search