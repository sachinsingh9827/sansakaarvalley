import React from "react";
import me1 from "./assets/me1.svg";
import me2 from "./assets/me2.svg";
import me3 from "./assets/me3.svg";
import me4 from "./assets/me4.svg";

const OurTeam = () => {
  const teamMembers = [
    { id: 1, src: me1, alt: "Team Member 1" },
    { id: 2, src: me2, alt: "Team Member 2" },
    { id: 3, src: me3, alt: "Team Member 3" },
    { id: 4, src: me4, alt: "Team Member 4" },
  ];

  return (
    <div className="flex flex-col items-center my-10 px-4 mb-20">
      <h2 className="mb-10 text-[48px] max-xl:text-[35px] max-lg:text-[28px] max-md:text-[24px] max-sm:text-[20px] text-gray font-semibold text-center">
        OUR TEAM
      </h2>

      {/* First Row */}
      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-6 justify-center relative">
        {/* Left Image */}
        <div className="card w-[80vw] sm:w-[180px] border-0 md:w-[200px] lg:w-[220px] h-auto aspect-[4/5] flex justify-center items-center rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300">
          <img
            src={teamMembers[0].src}
            alt={teamMembers[0].alt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Middle Image - Positioned higher */}
        <div className="card w-[80vw] sm:w-[200px] border-0 md:w-[220px] lg:w-[240px] h-auto aspect-[4/5] flex justify-center items-center rounded-lg relative sm:-top-6 hover:scale-105 hover:shadow-lg transition-transform duration-300">
          <img
            src={teamMembers[1].src}
            alt={teamMembers[1].alt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Image */}
        <div className="card w-[80vw] sm:w-[180px] border-0 md:w-[200px] lg:w-[220px] h-auto aspect-[4/5] flex justify-center items-center rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300">
          <img
            src={teamMembers[2].src}
            alt={teamMembers[2].alt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Fourth Image */}
        <div className="card w-[80vw] sm:w-[200px] md:w-[220px] lg:w-[240px] h-auto aspect-[4/5] flex justify-center items-center border-0  relative sm:-top-6 hover:scale-105 hover:shadow-lg transition-transform duration-300">
          <img
            src={teamMembers[3].src}
            alt={teamMembers[3].alt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
