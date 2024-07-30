import React from "react";
import { youtubelogo, menusvg, user } from "../../Utils/logos";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../Utils/Store/appSlice";
const Head = () => {
  const dispatch=useDispatch();

  const istoggle=() => {
    dispatch(toggleMenu())
  }
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
        />
        <button className="self-center rounded-r-full hover:text-white hover:bg-slate-400  p-1 bg-gray-200 border">
          Search
        </button>
      </div>
      <div>
        <img className="rounded-full size-10 " src={user} alt="" />
      </div>
    </div>
  );
};

export default Head;
