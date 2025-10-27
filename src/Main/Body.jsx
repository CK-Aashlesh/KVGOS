import React from "react";
import logo from "../assets/img/kvgceosc.png";
import backgroundSvg from "../assets/img/ssss.svg";
import Button from "../components/Button.jsx";
import GradualBlur from "../components/GradualBlur.jsx";

function Body(props) {
  const text = "<KVGCEOSC />";
  return (
    <>
      <section className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[#080A16]">
        <div className="main-body flex flex-col justify-center items-center text-white relative z-10 h-full py-24">
          <img src={logo} alt="KVGCEOSC Logo" className="h-32 w-80 -mt-20 mb-8" />
          <h1 className="text-white mt-4 text-5xl pt-5 pl-5 font-bold">
            {text}
          </h1>
          <p className="text-center mt-5 text-[#A4F2ED] text-lg max-w-md">
            KVGCEOSC - Empowering Students with <br />
            Open-Source Knowledge
          </p>
          <Button butname="Community Guidelines" />
        </div>
      </section>

      {/* Sticky GradualBlur at bottom of screen */}
      <GradualBlur
        target="page"
        position="bottom"
        height="7rem"
        strength={3}
        divCount={6}
        curve="bezier"
        exponential={true}
        opacity={0.9}
        zIndex={1000}
      />
    </>
  );
}

export default Body;
