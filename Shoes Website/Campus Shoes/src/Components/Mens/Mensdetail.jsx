import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
const Mensdetail = () => {
  const [data, setdata] = useState([]);

  const fetchapi = () => {
    axios
      .get(
        "https://svc-3-usf.hotyon.com/search?q=&apiKey=01c29538-1ba1-44af-b8d2-270a5cfc7fc0&country=IN&locale=en&getProductDescription=0&collection=375646355687&skip=0&take=24&sort=-date"
      )
      .then((response) => {
        console.log(response?.data?.data?.items[0]);
        setdata(response?.data?.data?.items[0]);

        console.log(response?.data?.data?.items[0]?.id);
      })
      .catch((error) => {
        console.log("oops someting wants rong");
      });
  };

  useEffect(() => {
    fetchapi();
  }, []);

  return (
    <div className="mt-60">
      <h1>{data?.title}</h1>
      <img src={data?.images[0]?.url} alt="" />
      <img src={data?.images[1]?.url} alt="" />
    </div>
  );
};

export default Mensdetail;
