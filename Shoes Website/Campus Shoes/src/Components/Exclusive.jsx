import React from "react";

const Exclusive = (exclusive) => {
  const { url, urlName } = exclusive?.info || {};

  return (
    <div>
      <div>
        <img src={url} alt="" />
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
