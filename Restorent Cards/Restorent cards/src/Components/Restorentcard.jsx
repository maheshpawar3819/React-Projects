import React from 'react'

const Restorentcard = (props) => {
    const { img, rtname, Ratings, menu, location } = props.restaurent;
  
    return (
      <div className="card-container">
        <img src={img} className="rt-img" />
        <h3 className="card-head">{rtname}</h3>
        <p id="str-rating">
          <span className="rating">{Ratings}</span>
        </p>
        <p>{menu}</p>
        <p>{location}</p>
      </div>
    );
}

export default Restorentcard
