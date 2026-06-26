import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  useGSAP(function(){
    const tl=gsap.timeline()
    tl.from(".stair",{
      height:0,
      stagger:-0.2
    })

  })
  return (
    <div>
    <div className='h-screen w-full flex fixed z-20 top-0'>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
     
    </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/agence' element={<Agence/>} />
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </div>
  )
}

export default App