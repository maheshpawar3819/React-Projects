import React from "react";

const Cards = ({ restaurent }) => {
  const {
    name = "Unknown Restaurant",
    avgRating = "N/A",
    costForTwo = "N/A",
    cuisines = [],
    areaName = "Unknown Area",
    imageUrl = "", // Assuming there's an imageUrl property in restdata.info
  } = restaurent?.info || {};
  return (
    <div>
      <img src="" alt="" />
      <h2>{name}</h2>
      <p>{avgRating}</p>
      <h6>Cost for two {costForTwo}</h6>
      <p>{cuisines.join(",")}</p>
      <h5>{areaName}</h5>
    </div>
  );
};

export default Cards;
