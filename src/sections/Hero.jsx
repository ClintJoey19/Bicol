import React from "react";
import heroImg from "../assets/images/hero-3.jpg";
import HeroButton from "../components/HeroButton";

const Hero = () => {
  return (
    <section
      className="bg-blend-overlay bg-black/50 pt-[3.2rem] bg-cover w-full h-screen bg-top bg-fixed"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <header className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-white text-8xl font-bold max-lg:text-6xl">
          Welcome to Bicol
        </h1>
        <p className="text-white text-2xl mt-3 mb-5 max-lg:text-xl">
          Where every moment is an adventure waiting to unfold
        </p>
        <HeroButton name="Explore" />
      </header>
    </section>
  );
};

export default Hero;
