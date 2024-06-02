import Restorentcard from "./Restorentcard";
import { useState } from "react";
import data from "./Utlities/Apidata";
const Body = () => {
  const [restaurent, setrestaurent] = useState(data);

  return (
    <div className="body">
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterdata = restaurent.filter((rest) => rest.Ratings >=4);
            setrestaurent(filterdata);
          }}
        >
          Top Rated Restorents
        </button>

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
