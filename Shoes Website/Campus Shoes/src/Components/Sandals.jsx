import React, { useState } from "react";
import Sandalscard from "./Sandalscard";
import { sandalsbanner } from "./Utils/images";
import { useEffect } from "react";
import axios from "axios";
const Sandals = () => {
  const [data, setData] = useState([]);
  const fetchapi = () => {
    axios
      .get(
        "https://svc-3-usf.hotyon.com/search?q=&apiKey=01c29538-1ba1-44af-b8d2-270a5cfc7fc0&country=IN&locale=en&getProductDescription=0&collection=414506287335&skip=0&take=24&sort=bestselling"
      )
      .then((response) => {
        // console.log(response?.data?.data?.items || []);
        setData(response?.data?.data?.items || []);
      })
      .catch(() => {
        console.log("Opps something wents wrong");
      });
  };

  useEffect(() => {
    fetchapi();
  }, []);
  return (
    <div className="box-border mt-24">
      <div>
        <img src={sandalsbanner} alt="" />
      </div>
      <div className="flex flex-wrap gap-4 w-full justify-center">
        {data.map((resp, index) => {
          return <Sandalscard key={index} data={resp} />;
        })}
      </div>
    </div>
  );
};

export default Sandals;
