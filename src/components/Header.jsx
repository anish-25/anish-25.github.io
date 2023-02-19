import React, { useEffect, useState } from 'react'
import Logo from '../assets/Logo.png'
import Search from '../common-components/Search'
import useApi from '../hooks/useApi'
import useDebounce from '../hooks/useDebounce'
import Navbar from './Navbar'
const Header = () => {
  const [searchKey, setSearchKey] = useState("")
  let debounced = useDebounce(searchKey,500)
  const {searchMovie} = useApi()
  const [results, setResults] = useState([])
  useEffect(() => {
    if(debounced?.length){
      searchMovie(debounced).then(res => setResults(res.data?.results))
    }
    else setResults([])
  }, [debounced])
  
  return (
    <div className='w-full flex justify-between bg-headerBg h-[85px]'>
    <div className="flex items-center justify-center">
        <img src={Logo} className="ml-8 w-[160px] h-[60px]" alt="logo" />
    </div>
    <div className="ml-10">
    <Navbar/>
    </div>
    <div className="relative">
    <div className='flex items-center justify-center h-full mr-12'>
      <Search value={searchKey} onChange={(e) => setSearchKey(e.target.value)}/>
    </div>
    {results?.length ? 
    <div className="absolute z-[1000] flex bg-white flex-col max-h-[300px] overflow-y-auto">
      {results?.map(result => {
        return <p onClick={() => setResults([])}>{result?.name}</p>
      })}
    </div> :<></>}
    </div>
    </div>
  )
}

export default Header