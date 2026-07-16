import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import Navbar from '../components/navigation/Navbar'

const Home = () => {
  return (
    <>
    <Navbar className="text-white"/>
    <div>
      <div className='h-screen w-screen fixed'>
        <Video/>
      </div>

<div className='h-screen w-screen relative flex flex-col justify-between'>
<HomeHeroText/>
<HomeBottomText/>
</div>
    </div>
    </>
  )
}

export default Home