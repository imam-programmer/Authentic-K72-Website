import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div>
      <div className="text-[10vw] uppercase leading-[9vw] text-white text-center">L'etincelle</div>
      <div className="text-[10vw] justify-center uppercase leading-[9vw] text-white text-center flex items-center"> qui<div className="h-[8vw] rounded-full overflow-auto"><Video/></div>genere </div>
      <div className="text-[10vw] uppercase leading-[9vw] text-white text-center">la creativite</div>
    </div>
  );
};

export default HomeHeroText;
