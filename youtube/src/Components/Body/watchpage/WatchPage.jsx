import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toshideMenu } from "../../../Utils/Store/appSlice";
import { useSearchParams } from "react-router-dom";
import Subscribe from "../comments/Subscribe";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  // console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(toshideMenu());
  }, []);

  return (
    <div>
      <div className="px-5">
        <iframe
          width="1100"
          height="550"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <Subscribe/>
    </div>
  );
};

export default WatchPage;
