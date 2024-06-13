import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
const Cards = ({ restaurent }) => {
  const {
    name = "Unknown Restaurant",
    avgRating = "N/A",
    costForTwo = "N/A",
    cuisines = [],
    areaName = "Unknown Area",
    cloudinaryImageId = "",
  } = restaurent?.info || {};
  return (
    <div className="cd-main">
      <img
        className="cd-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt=""
      />
      <h4 className="cd-name">{name}</h4>
      <p className="cd-rating">
        <i className="bi bi-star-fill" style={{ color: "green" }}></i>
        {avgRating}
      </p>
      <h6 className="cd-cost">Cost for two {costForTwo}</h6>
      <p className="cd-cuisines">{cuisines.join(",")}</p>
      <h5 className="cd-areaname">
        <i className="bi bi-geo-alt-fill" style={{ color: "red" }}></i>
        {areaName}
      </h5>
    </div>
  );
};

export default Cards;
