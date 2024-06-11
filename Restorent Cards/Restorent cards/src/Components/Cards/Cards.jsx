import React from "react";

const Cards = ({ restdata }) => {
  const { name, avgRating, costForTwo, cuisines, areaName } = restdata?.info;

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
