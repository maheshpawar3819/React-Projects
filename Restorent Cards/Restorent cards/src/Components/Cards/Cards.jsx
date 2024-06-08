import React from "react";

const Cards = ({ restdata }) => {
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, areaName } =
    restdata?.info;

  return (
    <div>
      <img
        src={`https://res.cloudinary.com/my_cloud/image/upload/${cloudinaryImageId}`}
        alt={name}
      />
      <h2>{name}</h2>
      <p>{avgRating}</p>
      <h6>Cost for two {costForTwo}</h6>
      <p>{cuisines.join(",")}</p>
      <h5>{areaName}</h5>
    </div>
  );
};

export default Cards;
