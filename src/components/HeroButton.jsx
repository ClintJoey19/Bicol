import React from "react";

const HeroButton = ({ name }) => {
  return (
    <button className="bg-black text-white text-md px-6 pt-2 pb-3 rounded-md">
      {name}
    </button>
  );
};

export default HeroButton;
