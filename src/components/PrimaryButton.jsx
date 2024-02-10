import React from "react";

const PrimaryButton = ({ name }) => {
  return (
    <button className="bg-black text-white px-4 pb-2 pt-1 rounded-md mr-2">
      {name}
    </button>
  );
};

export default PrimaryButton;
