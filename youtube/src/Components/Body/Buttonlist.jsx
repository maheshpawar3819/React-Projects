import React from "react";
import Buttons from "./Buttons";
const Buttonlist = () => {
  let databtn = [
    "All",
    "JavaScript",
    "Music",
    "Live",
    "Marathi",
    "Gaming",
    "Java",
    "Ai",
    "Test",
    "intervews",
    "watched",
    "jukebox",
    "Html",
    "Tailwindcss",
  ];

  return (
    <div className="flex m-2 ">
      <>
        {databtn.map((ele, index) => {
          return <Buttons key={index} data={ele} />;
        })}
      </>
    </div>
  );
};

export default Buttonlist;
