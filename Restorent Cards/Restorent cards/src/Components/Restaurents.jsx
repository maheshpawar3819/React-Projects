import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const Restaurents = () => {
  const fetchrestdata = () => {
    axios
      .get(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=18.61610&lng=73.72860"
      )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchrestdata();
  }, []);
  return (
    <div className="restaurents">
      <div className="header-content">
        <button className="r-top-restbtn">Top Rated Restaurents</button>
        <div className="r-search-container">
          <input type="text" placeholder="Search..." className="r-input" />
          <button className="r-serach-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>
        <div className="r-allrest-div">
          <button className="r-allrest-btn">All Retaurents</button>
        </div>
      </div>
      <div className="rest-container"></div>
    </div>
  );
};

export default Restaurents;
