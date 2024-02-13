import React from "react";
import { reviews } from "../constants";

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center py-10">
      <h2 className="text-4xl mb-5">Here's What People Say</h2>
      <div className="w-[80%]">
        {reviews.map((item, i) => (
          <div key={{ i }} className="">
            <img src={item.img} alt="" />
            <p>{item.name}</p>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
