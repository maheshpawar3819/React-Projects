import React, { useEffect, useState } from "react";
import { kidsbanner } from "./Utils/images";
import axios from "axios";
import Kidscard from "./Kidscard";
import Shimmer from "./Shimmer";
const Kids = () => {
  const [data, setData] = useState([]);

  const fetchapi = () => {
    axios
      .get(
        "https://svc-3-usf.hotyon.com/search?q=&apiKey=01c29538-1ba1-44af-b8d2-270a5cfc7fc0&country=IN&locale=en&getProductDescription=0&collection=375646617831&skip=0&take=24&sort=bestselling"
      )
      .then((response) => {
        // console.log(resp);
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
        <img src={kidsbanner} alt="" />
      </div>
      <div className="flex flex-wrap justify-center  gap-4 w-full">
        {data.map((resp, index) => {
          return <Kidscard key={index} data={resp} />;
        })}
      </div>
    </div>
  );
};

export default Kids;
