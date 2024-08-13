import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useAddvideos from "../../../Utils/Hooks/useAddvideos";

const Subscribe = () => {
  const channeldata = useSelector((store) => store.video.videos);
  const [searchParams] = useSearchParams();
  useAddvideos();

  if (!channeldata || channeldata.length === 0) {
    return <p>loading...</p>;
  }

  // console.log(searchParams.get("v"));
  const channelId = searchParams.get("v");
  const channel = channeldata.find((ch) => ch.id === channelId);
  // console.log(channel?.snippet?.channelTitle);
  // console.log(channel?.snippet?.localized?.title);
  const { title } = channel?.snippet?.localized || "title is not availabe";
  const { channelTitle } = channel?.snippet;

  return (
    <>
      <p className="pl-5 py-2">{title}</p>
      <div className="pl-5 py-2 border-2 ">
        <div className="flex">
          <p>{channelTitle}</p>
          <button className="ml-3 bg-red-700 rounded-2xl px-2 p-1 text-white">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
