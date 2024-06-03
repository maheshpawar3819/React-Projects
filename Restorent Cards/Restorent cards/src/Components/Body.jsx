import Restorentcard from "./Restorentcard";
import { useState } from "react";
import data from "./Utlities/Apidata";
const Body = () => {
  const [restaurent, setrestaurent] = useState(data);

  // Conditional Radering
  // if(restaurent.length===0){
  //   return <h1>Loading...</h1>
  // }

  return restaurent.length === 0 ? (
    <h1>Loading</h1>
  ) : (
    <div className="body">
      <div className="search-btns">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdata = restaurent.filter((rest) => rest.Ratings >= 4);
            setrestaurent(filterdata);
          }}
        >
          Top Rated Restorents
        </button>
        <div className="search-container">
        <input type="text" placeholder="Search" name="search" />
        <button className="serach-btn">
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
      </div>
      
      <div className="rest-container">
        {restaurent.map((restaurent, index) => {
          return <Restorentcard key={index} restaurent={restaurent} />;
        })}
      </div>
    </div>
  );
};

export default Body;
