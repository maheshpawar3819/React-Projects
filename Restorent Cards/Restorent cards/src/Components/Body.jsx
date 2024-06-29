import Restorentcard from "./Restorentcard";
import { useState } from "react";
import data from "./Utlities/Apidata";
import useOnlinestate from "./Utlities/useOnlinestate";
import { searchbtn } from "./Utlities/svg";
const Body = () => {
  const [restaurent, setrestaurent] = useState(data);
  const [serach, setSearch] = useState("");
  console.log("body rander");

  let online = useOnlinestate();

  if (!online) return <h1>Looks like you are offline</h1>;
  return restaurent.length === 0 ? (
    <h1>Loading....</h1>
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
          Top Rated Restaurents
        </button>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            name="search"
            className="input1"
            value={serach}
            onChange={(text) => {
              setSearch(text.target.value);
            }}
          />
          <button
            className="serach-btn"
            onClick={() => {
              const result = restaurent.filter((rest) => {
                return rest.rtname.toLowerCase().includes(serach.toLowerCase());
              });

              setrestaurent(result);
            }}
          >
            {searchbtn}
          </button>
          <button
            className="allrest-btn"
            onClick={() => {
              setrestaurent(data);
            }}
          >
            All Restaurents
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
