import React from "react";
import { ratings, timed, locations } from "./Utlities/svg";

const Restorentcard = (props) => {
  const { img, rtname, Ratings, menu, location, time } = props.restaurent;

  return (
    <div className="card-container">
      <img src={img} className="rt-img" />
      <h5 className="card-head">{rtname}</h5>
      <p id="str-rating">
        <span className="rating">
          <span>{ratings}</span>
          {Ratings}
        </span>
      </p>
      <p className="time">
        {timed}
        <span className="time-span"> {time}</span>
      </p>
      <p>{menu}</p>
      <p>
        {locations}
        {location}
      </p>
    </div>
  );
};

export default Restorentcard;
