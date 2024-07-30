import React from "react";

const Buttons = ({ data }) => {
  return (
    <div className="">
      <button className="p-2 px-3 text-base mx-2 tracking-wider bg-slate-100 rounded-md">{data}</button>
    </div>
  );
};

export default Buttons;
