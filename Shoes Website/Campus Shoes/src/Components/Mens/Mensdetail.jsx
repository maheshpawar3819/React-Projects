import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
const Mensdetail = () => {
  const [data, setData] = useState([]);

  const fetchapi = () => {
    axios
      .get(
        "https://svc-3-usf.hotyon.com/search?q=&apiKey=01c29538-1ba1-44af-b8d2-270a5cfc7fc0&country=IN&locale=en&getProductDescription=0&collection=375646355687&skip=0&take=24&sort=-date"
      )
      .then((response) => {
        console.log(response);
        console.log(response?.data?.data?.items[0]);
        setData(response?.data?.data?.items[0]);
        console.log(response?.data?.data?.items[0]?.images[0]?.url);
      })
      .catch((error) => {
        console.log("oops someting wants rong");
      });
  };

  useEffect(() => {
    fetchapi();
  }, []);

  return (
    <div className="mt-32">
      {/* image container */}
      <div className="w-[50vw]">
        {/* small images */}
        <div>
          {data?.images?.slice(0, 4)?.map((img, index) => {
            return (
              <div key={index}>
                <img src={img?.url} alt="samll images" />
              </div>
            );
          })}
        </div>
        {/* large image  */}
        <div>
          <img src={data?.images[0]?.url} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mensdetail;
