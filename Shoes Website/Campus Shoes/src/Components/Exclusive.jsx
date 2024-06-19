import React from "react";

const Exclusive = ({ exclusive }) => {
  const { urlName, images, variants, options } = exclusive || {};
  const img = images[0]?.url;
  const price = variants[0]?.price;
  const option = options[1]?.values;

  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <button>Quick Buy</button>
      </div>
      <div>
        <h4>{urlName}</h4>
      </div>
      <div>
        <h6>Rs. {price}</h6>
      </div>
      <div>
        <p>{option.join(" , ")}</p>
      </div>
    </div>
  );
};

export default Exclusive;
