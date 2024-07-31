import React from "react";
import {
  home_logo,
  short_log,
  sub_logo,
  history_logo,
  playlists_log,
  watchletter_logo,
  Liked_log,
  trending_logo,
  shopping_logo,
  music_logo,
  flims_logo,
  gaming_logo,
} from "../../Utils/logos";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const togglefeature = useSelector((store) => store.app.isMenuopen);

  if (!togglefeature) return null;

  return (
    <div className="w-72 py-5 pl-2 shadow-xl  mt-2 ">
      <div>
        <ul className="font-semibold pl-8">
          <li className="py-1 cursor-pointer">{home_logo} Home</li>
          <li className="py-1 cursor-pointer">{short_log} Shorts</li>
          <li className="py-1 cursor-pointer">{sub_logo} Subscripters</li>
          <hr />
        </ul>
        <h1 className="text-lg font-bold my-3">You {">"}</h1>
        <ul className="pl-8">
          <li className="py-1 font-semibold cursor-pointer">
            {history_logo} History
          </li>
          <li className="py-1 font-semibold cursor-pointer">
            {playlists_log} Playlists
          </li>
          <li className="py-1 font-semibold cursor-pointer">
            {watchletter_logo} Watch Letter
          </li>
          <li className="py-1 font-semibold">{Liked_log} Liked Videos</li>
          <hr />
        </ul>
        <h1 className="text-lg font-bold my-3">Expolore</h1>
        <ul className="pl-8">
          <li className="py-1 font-semibold cursor-pointer">
            {trending_logo} Trending
          </li>
          <li className="py-1 font-semibold cursor-pointer">
            {shopping_logo} Shopping{" "}
          </li>
          <li className="py-1 font-semibold cursor-pointer">
            {music_logo} Music
          </li>
          <li className="py-1 font-semibold cursor-pointer">
            {flims_logo} Flims{" "}
          </li>
          <li className="py-1 font-semibold cursor-pointer">
            {gaming_logo} Gaming{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
