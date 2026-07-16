import React from 'react'
import Navbar from '../components/navigation/Navbar'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {
  const projects=[
    {
      image1:"./image/navImage1.jpg",
      image2:"./image/navimage2.jpg"
    },
    {
      image1:"./image/navimage3.jpg",
      image2:"./image/navimage4.jpg"
    },
      {
        image2:"./image/navImage1.jpg",
        image1:"./image/navimage4.jpg"
    }
  ]


  gsap.registerPlugin(ScrollTrigger)

useGSAP(function(){
  gsap.from(".hero",{
    height:0,
    stagger:{
      amount:0.5
    },
    scrollTrigger:{
      trigger:".lol",
    start:"top 100%",
    end:"top -200%",
    scrub:true
    }
  })
})

  return (
    <>
    <Navbar className="text-black"/>
    <div className='lg:p-4 p-2 mb-[100vh]'>
      <div className=' pt-[45vh]'>
        <h2 className='text-[10vw] uppercase'>Projects</h2>
      </div>
      <div className=' lg:-mt-10 lol'>
        {
          projects.map((elem,idx)=>(
 <div key={idx} className='hero w-full  lg:h-[600.5px] mb-4 flex lg:gap-10 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2}/>
            </div>
          ))
        }
 
    
      </div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum pariatur libero molestias aliquid, temporibus provident maiores natus, deleniti earum quis consectetur voluptatum possimus quam quae modi sit ipsum similique voluptates? Aperiam voluptatem explicabo sed doloremque earum exercitationem aut facere quisquam autem, fugit non molestiae eos minus, eveniet numquam minima vel atque molestias ut ipsum qui vero reprehenderit. In quod voluptatem eaque nemo iusto id quia reprehenderit dolor fugiat quaerat libero distinctio harum architecto sed, quos velit ex cupiditate labore repudiandae! Quis, assumenda dolor et natus hic error iste, voluptatem quas numquam dignissimos recusandae beatae necessitatibus, deserunt praesentium molestias perspiciatis est!</p>
    </div>
    </>
  )
}

export default Projects