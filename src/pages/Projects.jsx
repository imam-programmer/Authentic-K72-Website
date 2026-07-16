import React from 'react'
import Navbar from '../components/navigation/Navbar'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {
  const projects = [
    {
      image1: "./image/navImage1.jpg",
      image2: "./image/navimage2.jpg"
    },
    {
      image1: "./image/navimage3.jpg",
      image2: "./image/navimage4.jpg"
    },
    {
      image2: "./image/navImage1.jpg",
      image1: "./image/navimage4.jpg"
    }
  ]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.set(".hero", { transformOrigin: "top" });
    gsap.from(".hero", {
      height: 0,
      stagger: {
        amount: 0.5
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "top -200%",
        scrub: 1
      }
    })
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, [])

  return (
    <>
      <Navbar className="text-black" />
      <div className='lg:p-4 p-2 bg-[#bebebe]'>
        <div className=' pt-[55vh] xs:pt-[60vh] sm:pt-[60vh] md:pt-[45vh]'>
          <h2 className='lg:text-[10vw] text-6xl uppercase'>Projects</h2>
        </div>
        <div className='  lol'>
          {
            projects.map((elem, idx) => (
              <div key={idx} className='hero w-full  h-[90vh] sm:h-[60vh]  lg:h-[80vh] mb-4 flex flex-col md:flex-row lg:gap-10 gap-2'>
                <ProjectCard image1={elem.image1} image2={elem.image2} />
              </div>
            ))
          }


        </div>
      </div>
      <div className='h-screen flex justify-center items-center bg-[#196ae4bb]'>
        <h2 className='lg:text-[10vw] text-6xl uppercase font-bold project-h2'><i>Thank You</i></h2>
      </div>
    </>
  )
}

export default Projects