import React, { useEffect, useState } from "react";
import { mensbanner } from "./Utils/images";
import axios from "axios";
import Menscard from "./Menscard";

const Mens = () => {
  const [data, setData] = useState([]);

  const fetchapi = () => {
    axios
      .get(
        "https://svc-3-usf.hotyon.com/search?q=&apiKey=01c29538-1ba1-44af-b8d2-270a5cfc7fc0&country=IN&locale=en&getProductDescription=0&collection=375646355687&skip=0&take=24&sort=-date"
      )
      .then((response) => {
        console.log(response?.data?.data?.items || []);
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
        <img src={mensbanner} alt="" />
      </div>
      <div className="flex flex-wrap justify-center  gap-4 w-full">
        {data.map((resp,index) => {
          return <Menscard key={index} data={resp} />;
        })}
      </div>
    </div>
  );
};

export default Mens;
