import React from "react";

const Exclusive = ({exclusive}) => {
  const {  urlName ,images } = exclusive || {};
  const img=images[0]?.url;
  console.log(img)
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
    </div>
  );
};

export default Exclusive;
