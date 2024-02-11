import React from "react";
import GridComponent from "../components/GridComponent";
import { gridComponents } from "../constants";

const AboutUs = () => {
  return (
    <section className="w-full py-5 flex flex-col justify-center items-center">
      <div className="w-[80%] flex justify-center">
        <h2 className="w-[80%] my-7 text-3xl text-center leading-10">
          "Join us on a journey of discovery and experience the authentic charm
          of the Philippines in the heart of Bicol"
        </h2>
      </div>
      <div className="w-[80%] grid grid-cols-3 gap-2">
        {gridComponents.map((item, index) => (
          <GridComponent key={index} icon={item.icon} desc={item.desc} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
