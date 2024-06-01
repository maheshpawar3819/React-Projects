import React from "react";
import Restorentcard from "./Restorentcard";
import data from "./Utlities/Apidata";
const Body = () => {
  return (
    <div className="body">
      <div className="rest-container">
        {data.map((restaurent, index) => {
          return <Restorentcard key={index} restaurent={restaurent} />;
        })}
      </div>
    </div>
  );
};

export default Body;
