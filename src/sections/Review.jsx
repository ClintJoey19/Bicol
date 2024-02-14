import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { BicolMap } from "../assets/images";

const Review = () => {
  return (
    <section className="flex flex-col items-center pb-10">
      <h2 className="text-4xl mb-2">Give us your feedback</h2>
      <div className="w-[80%] p-5 flex flex-col items-center">
        <p>
          Share your unforgettable Bicol adventures in a review today, guiding
          and inspiring fellow travelers while helping us continuously enhance
          the region's allure!
        </p>
        <div
          className="w-[80%] h-[30rem] bg-black/40 bg-blend-overlay rounded-md overflow-hidden mt-5"
          style={{ backgroundImage: `url(${BicolMap})` }}
        ></div>

        <div className="w-[80%] pt-4 flex justify-center gap-2">
          <input
            type="text"
            placeholder="Write a review"
            className="w-full bg-slate-200 px-4 py-2 rounded-md text-md"
          />
          <button className="bg-black px-2 pb-2 pt-[1px] rounded-md">
            <SendIcon style={{ color: "white", height: 20, width: 20 }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
