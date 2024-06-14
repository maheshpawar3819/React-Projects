import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards/Cards";
const Restaurents = () => {
  const [restaurentlist, setrestaurentlist] = useState([]);
  

  const fetchrestdata = () => {
    axios
      .get(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=18.61610&lng=73.72860"
      )
      .then((response) => {
        console.log(response);
        setrestaurentlist(
          response?.data?.data?.success?.cards[1]?.gridWidget?.gridElements
            ?.infoWithStyle?.restaurants
        );
        console.log(
          response?.data?.data?.success?.cards[1]?.gridWidget?.gridElements
            ?.infoWithStyle?.restaurants
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchrestdata();
  }, []);

  const filterrest=() => {
    const filtd=restaurentlist.filter((rest) => {
      return rest.info.avgRating>=4;
    })
    console.log(filtd)
    setrestaurentlist(filtd);
  }


  return restaurentlist === 0 ? (
    <h1>Loading..</h1>
  ) : (
    <div className="restaurents">
      <div className="header-content">
        <button
          className="r-top-restbtn"
          onClick={filterrest}
        >
          <i className="bi bi-filter"></i>Top Rated Restaurents
        </button>
        <div className="r-search-container">
          <input type="text" placeholder="Search..." className="r-input" />
          <button className="r-serach-btn">
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div className="r-allrest-div">
          <button className="r-allrest-btn" >All Retaurents</button>
        </div>
      </div>
      <div className="rest-container">
        {restaurentlist.map((data) => {
          return <Cards key={data.info.id} restaurent={data} />;
        })}
      </div>
    </div>
  );
};

export default Restaurents;
