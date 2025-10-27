import React from "react";
import PixelCard from "D:/web/OscReact/src/components/PixelCard.jsx";

function page2() {
  return (
    <div className="main h-screen w-full bg-[#080A16] flex justify-center">
      <PixelCard variant="blue">
        <div className="absolute inset-0 flex flex-col items-center z-10">
          <h1 className="text-white text-3xl font-bold pt-20 text-center">
            KVGCEOSC - Empowering Students <br /> with Open-Source Knowledge
          </h1>
          <p className="text-white text-center mt-20 ml-[15px] mr-[15px] text-[19px] ">
            KVGCEOSC is a community driven by tech enthusiasts and open- source
            contributors, dedicated to helping students engage with the
            open-source ecosystem by providing training and skill development.
            Join us to explore exciting projects, grow your skills, and connect
            with like-minded individuals. Write to us to become part of the
            community!
          </p>
        </div>
      </PixelCard>
    </div>
  );
}

export default page2;
