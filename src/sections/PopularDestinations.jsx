import React, { useState } from "react";
import { popularDestinations } from "../assets/destinations";
import Right from "@mui/icons-material/ChevronRightRounded";
import Left from "@mui/icons-material/ChevronLeftRounded";
import "../slider.css";

const PopularDestinations = () => {
  const [destination, setDestination] = useState(0);

  const nextDestination = () => {
    destination === popularDestinations.length - 1
      ? setDestination(0)
      : setDestination((d) => d + 1);
  };
  const prevDestination = () => {
    destination === 0
      ? setDestination((d) => popularDestinations.length - 1)
      : setDestination((d) => d - 1);
  };
  return (
    <section className="bg-black text-white w-full flex flex-col items-center gap-5 py-10">
      <div className="w-[80%] flex flex-col items-center">
        <h2 className="text-4xl mb-5">Popular Destinations</h2>
        <p>
          Embark on an unforgettable journey through Bicol's popular
          destinations
        </p>
      </div>
      <div className="w-[80%] max-lg:w-[90%] h-[500px] relative overflow-hidden bg-white rounded-lg">
        <div
          className="w-full h-full flex justify-center pt-10"
          style={{
            backgroundImage: `url(${popularDestinations[destination].image}`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h3 className="text-5xl font-bold">
            {popularDestinations[destination].name}
          </h3>
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex justify-between px-5">
          <button onClick={prevDestination}>
            <Left
              style={{
                color: "white",
                backgroundColor: "#00000050",
                fontSize: 35,
                borderRadius: 3,
              }}
            />
          </button>
          <button onClick={nextDestination}>
            <Right
              style={{
                color: "white",
                backgroundColor: "#00000050",
                fontSize: 35,
                borderRadius: 3,
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
