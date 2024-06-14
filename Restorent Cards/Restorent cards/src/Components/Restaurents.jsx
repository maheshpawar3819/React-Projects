import React from "react";
import { useEffect, useState } from "react";
import axios, { all } from "axios";
import Cards from "./Cards/Cards";
const Restaurents = () => {
  const [restaurentlist, setrestaurentlist] = useState([]);
  const [allrest, setAllrest] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serach, setSearch] = useState("");

  const fetchrestdata = async () => {
    try {
      const fetch = await axios.get(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=18.61610&lng=73.72860"
      );
      const restaurents =
        fetch?.data?.data?.success?.cards[1]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants;
      setrestaurentlist(restaurents || []);
      setAllrest(restaurents || []);
      setLoading(false);
    } catch (error) {
      console.log("Error is found", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchrestdata();
  }, []);

  const filterrest = () => {
    const filtd = restaurentlist.filter((rest) => {
      return rest.info.avgRating >= 4;
    });
    console.log(filtd);
    setrestaurentlist(filtd);
  };

  const showallrest = () => {
    setrestaurentlist(allrest);
  };

  return restaurentlist.length === 0 ? (
    <h1>Loading..</h1>
  ) : (
    <div className="restaurents">
      <div className="header-content">
        <button className="r-top-restbtn" onClick={filterrest}>
          <i className="bi bi-filter"></i>Top Rated Restaurents
        </button>
        <div className="r-search-container">
          <input
            type="text"
            placeholder="Search..."
            className="r-input"
            value={serach}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <button
            className="r-serach-btn"
            onClick={() => {
              const result = restaurentlist.filter((rest) => {
                return rest.name.toLowerCase().includes(serach.toLowerCase());
              });

              setrestaurentlist(result);
            }}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div className="r-allrest-div">
          <button className="r-allrest-btn" onClick={showallrest}>
            All Retaurents
          </button>
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
