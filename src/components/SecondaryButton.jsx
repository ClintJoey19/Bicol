import React from "react";

const SecondaryButton = ({ name }) => {
  return (
    <button className="bg-white border-solid border-2 border-black px-4 pb-[0.4rem] pt-[0.1rem] rounded-md">
      {name}
    </button>
  );
};

export default SecondaryButton;
