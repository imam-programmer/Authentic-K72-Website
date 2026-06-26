import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
const imageDivRef = useRef(null);
useGSAP(function(){
  gsap.to(imageDivRef.current,{
scrollTrigger:{
  trigger:imageDivRef.current,
  markers:true,
  start:"top 28%",
  end:"top -100%",
  pin:true,
  scrub:2

}
  })
})


  return (
   <div>
    <div className="section1">
      <div ref={imageDivRef} className="h-[20vw] w-[15vw] rounded-3xl absolute top-50 left-[30vw] overflow-auto">
        <img className="h-full w-full object-cover" src="https://images.pexels.com/photos/5083207/pexels-photo-5083207.jpeg" alt="" />
        </div>
      <div className="mt-[50vh] relative">
        <h1 className="text-[20vw] uppercase leading-[17vw] text-center">
          Soixan7e <br /> douze
        </h1>
      </div>
      <div className="pl-[40%] mt-20">
        <p className="text-5xl ">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Notre curiosite nourrit notre creativite. On reste humbles et on dit
          non aux vivante. Elle a des valeurs, une personnalite, une histoire.
          Si on oublie ca, on peut faire de bons chiffres a court terme, mais on
          la tue a long terme. C'est pour ca qu'on s'engage a donner de la
          perspective, pour batir des marques influentes.
        </p>
      </div>
    </div>
<div className="section2 h-screen"></div>
   </div>
  );
};

export default Agence;
