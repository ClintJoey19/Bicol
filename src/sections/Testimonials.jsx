import React from "react";
import { reviews } from "../constants";

const Testimonials = () => {
  const reviewStyle = "bg-black text-white rounded-md p-5";
  return (
    <section className="flex flex-col items-center py-10">
      <h2 className="text-4xl mb-5">Here's What People Say</h2>
      <div className="w-[80%] p-5 grid grid-cols-4 auto-rows-[300px] gap-4">
        {reviews.map((item, i) => (
          <div
            key={i}
            className={`${reviewStyle} ${
              i === 1 || i === 3 || i === 5 || i === 6 ? "col-span-2" : ""
            } ${i === 2 ? "row-span-2" : ""}`}
          >
            <div className="flex items-center gap-2">
              <img
                src={item.img}
                alt=""
                className="w-[4rem] h-[4rem] rounded-full bg-cover"
              />
              <p className="font-bold ">{item.name}</p>
            </div>

            <h3 className="font-bold my-2">"{item.title}"</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
