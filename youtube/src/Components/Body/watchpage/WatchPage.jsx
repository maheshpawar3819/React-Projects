import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toshideMenu } from "../../../Utils/Store/appSlice";
import { useSearchParams } from "react-router-dom";
import Subscribe from "../comments/Subscribe";
import Livechat from "./Livechat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  // console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(toshideMenu());
  }, []);

  return (
    <div className="w-full">
      <div className="px-5 flex">
        <div className="w-full">
          <iframe
            width="1150"
            height="580"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <Livechat/>
      </div>
      <Subscribe />
    </div>
  );
};

export default WatchPage;
