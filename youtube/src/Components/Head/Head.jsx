import React, { useEffect, useState } from "react";
import { youtubelogo, menusvg, user, searchlogo } from "../../Utils/logos";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../Utils/Store/appSlice";
import axios from "axios";
import { casheResults } from "../../Utils/Store/searchSlice";

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //make api call after every press
    //but if the diffrence between 2 api call is <200ms
    //decline the api call.
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        fetchsearchdata();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchsearchdata = () => {
    axios
      .get(
        "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
          searchQuery
      )
      .then((response) => {
        // console.log(response?.data[1]);
        setSuggestions(response?.data[1]);

        // update cache
        dispatch(
          casheResults({
            [searchQuery]: response?.data[1],
          })
        );
      })
      .catch((error) => {
        console.log(error, "someting wrong");
      });
  };

  const istoggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between  w-full p-3  px-5 shadow-md">
      <div className="flex gap-6 align-middle">
        <button onClick={() => istoggle()}>{menusvg}</button>
        <div className="w-28 self-center">{youtubelogo}</div>
      </div>
      <div className="w-96 -ml-56">
        <input
          type="text"
          className="self-center  border-2 p-[3px] w-80 rounded-l-full pl-5"
          placeholder="Search.."
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
          onFocus={(e) => setshowSuggestions(true)}
          onBlur={(e) => setshowSuggestions(false)}
        />
        <button className="self-center rounded-r-full hover:text-white hover:bg-slate-400  p-1 bg-gray-200 border">
          Search
        </button>
        {showSuggestions && (
          <div className="fixed bg-white py-2  w-[20rem] rounded-md shadow-2xl">
            <ul>
              {suggestion.map((data) => {
                return (
                  <li
                    key={data}
                    className="shadow-sm py-1 tracking-wider cursor-pointer hover:bg-gray-100 rounded-md"
                  >
                    {searchlogo}
                    {data}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img className="rounded-full size-10 " src={user} alt="" />
      </div>
    </div>
  );
};

export default Head;
