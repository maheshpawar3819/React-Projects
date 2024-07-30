import React from "react";
import Buttons from "./Buttons";
const Buttonlist = () => {
  let databtn = [
    "All",
    "JavaScript",
    "Music",
    "Live",
    "T-series",
    "Gaming",
    "Java",
    "Ai",
    "Test",
    "Js intervews",
    "watched",
    "to you",
    "Html",
    "Tailwind css",
  ];

  return (
    <div className="flex m-2">
      <>
        {databtn.map((ele, index) => {
          return <Buttons key={index} data={ele} />;
        })}
      </>
    </div>
  );
};

export default Buttonlist;
