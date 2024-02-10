import React from "react";
import heroImg from "../assets/images/hero-3.jpg";

const Hero = () => {
  return (
    <section
      className="bg-blend-overlay bg-black/50 pt-[3.2rem] bg-cover w-full h-screen bg-top bg-fixed"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <header className="w-full h-full flex justify-center items-center">
        <h1 className="text-white text-5xl font-medium">Welcome to Bicol</h1>
        <p></p>
      </header>
    </section>
  );
};

export default Hero;
