import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useAddvideos from "../../../Utils/Hooks/useAddvideos";
import {
  likelogo,
  dislike,
  sharelogo,
  downloadlogo,
  savelogo,
} from "../../../Utils/logos";
import Commentscontainer from "./Commentscontainer";

const Subscribe = () => {
  const channeldata = useSelector((store) => store.video.videos);
  const [searchParams] = useSearchParams();
  useAddvideos();

  if (!channeldata || channeldata.length === 0) {
    return <p className="pl-5 py-1">loading...</p>;
  }

  const channelId = searchParams.get("v");
  const channel = channeldata.find((ch) => ch.id === channelId);
  const { title } = channel?.snippet?.localized || "title is not availabe";
  const { channelTitle } = channel?.snippet;
  const {commentCount}=channel?.statistics;
  // console.log(commentCount)

  return (
    <>
      <p className="pl-5 py-1">{title}</p>
      <div className="pl-5 py-1 flex ">
        <div className="flex">
          <p>{channelTitle}</p>
          <button className="ml-3 bg-red-700 rounded-2xl px-2 p-1 text-white hover:bg-red-500">
            Subscribe
          </button>
        </div>
        <div className="ml-[500px]">
          <button className="bg-gray-300 px-5 py-2 rounded-l-2xl hover:bg-white ml-3">
            {likelogo}
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded-r-2xl border-l-2 border-gray-400 hover:bg-red-600">
            {dislike}
          </button>
          <button className="bg-gray-300 px-8  ml-3 py-2 rounded-2xl hover:bg-gray-500">
            {sharelogo}
          </button>
          <button className="bg-gray-300 px-8  ml-3 py-2 rounded-2xl hover:bg-gray-500">
            {downloadlogo}
          </button>
          <button className="bg-gray-300 px-8  ml-3 py-2 rounded-2xl hover:bg-gray-500">
            {savelogo}
          </button>
        </div>
      </div>
      <Commentscontainer countcomment={commentCount}/>
    </>
  );
};

export default Subscribe;
