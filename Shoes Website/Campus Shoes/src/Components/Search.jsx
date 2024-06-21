import React from "react";

const Search = () => {
  return (
    <div>
      <input
        type="text"
        className="border rounded-md p-1"
        placeholder="Find..."
      />
      <button className="bg-slate-500 ml-2 p-1 rounded-md px-2 text-white drop-shadow-xl hover:bg-slate-800">
        Search..
      </button>
    </div>
  );
};

export default Search;
