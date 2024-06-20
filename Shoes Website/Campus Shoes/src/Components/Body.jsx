import React, { useEffect, useState } from "react";
import { banner } from "./Utils/icons";
import axios from "axios";
import Exclusive from "./Exclusive";
const Body = () => {
  const [exclusive, setExclusive] = useState([]);

  const fetch = () => {
    axios
      .get(
        "https://svc-3-usf.hotyon.com/search?q=&apiKey=01c29538-1ba1-44af-b8d2-270a5cfc7fc0&country=IN&locale=en&getProductDescription=0&collection=423418167527&skip=0&take=24&sort=bestselling"
      )
      .then((response) => {
        console.log(response);
        // console.log(response?.data?.data?.items[0].title);
        setExclusive(response?.data?.data?.items || []);
      })
      .catch((error) => {
        console.log("woops something wants wrong", error);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="box-border mt-24">
      <div>
        <img src={banner} alt="Banner image" />
      </div>
      <div className="flex flex-wrap justify-center  gap-4 w-full">
        {exclusive.map((data) => {
          return <Exclusive key={data.id} exclusive={data} />;
        })}
      </div>
    </div>
  );
};

export default Body;
