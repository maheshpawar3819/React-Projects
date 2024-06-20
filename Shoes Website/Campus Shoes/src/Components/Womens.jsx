import React, { useEffect, useState } from "react";
import { womensbanner } from "./Utils/images";
import axios from "axios";
import Womenscard from "./Womenscard";
import Shimmer from "./Shimmer";
const Womens = () => {
  const [data, setData] = useState([]);

  const fetchapi = () => {
    axios
      .get(
        "https://svc-3-usf.hotyon.com/search?q=&apiKey=01c29538-1ba1-44af-b8d2-270a5cfc7fc0&country=IN&locale=en&getProductDescription=0&collection=375646585063&skip=0&take=24&sort=-date"
      )
      .then((response) => {
        setData(response?.data?.data?.items || []);
      })
      .catch(() => {
        console.log("error was found");
      });
  };

  useEffect(() => {
    fetchapi();
  }, []);

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="box-border mt-24">
      <div>
        <img src={womensbanner} alt="" />
      </div>
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {data.map((resp, index) => {
          return <Womenscard key={index} data={resp} />;
        })}
      </div>
    </div>
  );
};

export default Womens;
