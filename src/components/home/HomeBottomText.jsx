import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex items-center justify-center gap-3 hover:border-green-400 hover:text-green-400'>
        <Link className='text-[6vw] border-2 border-white rounded-full px-8 uppercase text-white hover:border-[#d3fd50] hover:text-[#d3fd50]' to="/projects">Projects</Link>
        <Link className='text-[6vw] border-2 border-white rounded-full px-8 uppercase text-white hover:border-[#d3fd50] hover:text-[#d3fd50]' to="/agence">Agence</Link>
    </div>
  )
}

export default HomeBottomText