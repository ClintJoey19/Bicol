import React from "react";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import LandscapeRoundedIcon from "@mui/icons-material/LandscapeRounded";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";

const GridComponent = ({ icon, desc }) => {
  return (
    <div className="flex flex-col gap-2 items-center p-4">
      {icon === "diversity" && (
        <Diversity2Icon style={{ height: 32, width: 32 }} />
      )}
      {icon === "landscape" && (
        <LandscapeRoundedIcon style={{ height: 32, width: 32 }} />
      )}
      {icon === "food" && (
        <RestaurantMenuRoundedIcon style={{ height: 32, width: 32 }} />
      )}
      <p className="mt-4 text-xl text-center">{desc}</p>
    </div>
  );
};

export default GridComponent;
