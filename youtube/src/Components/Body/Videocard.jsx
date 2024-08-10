import React from "react";

const Videocard = ({ vdata }) => {
  const { snippet, statistics } = vdata;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  //   calculate days
  const calculateDaysAgo = (dataString) => {
    const publishDate = new Date(dataString);
    const currentDate = new Date();
    const timeDiffrence = currentDate - publishDate;
    const daysDiffrence = Math.floor(timeDiffrence / (1000 * 60 * 60 * 24));
    return daysDiffrence;
  };

  const daysago = calculateDaysAgo(publishedAt);

  //views
  const formatViewcount = (viewCount) => {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + "m";
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(1) + "k";
    } else {
      return viewCount.toString();
    }
  };

  return (
    <div className="w-72 shadow-lg rounded-md mr-4 cursor-pointer my-2 p-2 hover:bg-gray-200 ">
      <img
        src={thumbnails?.medium?.url}
        className="rounded-md"
        alt="Tnumbnails"
      />
      <div>
        <p className="font-bold text-gray-700">{title}</p>
        <p className="font-semibold text-gray-500">{channelTitle}</p>
        <div className="flex">
          <p className="mr-5 font-semibold text-gray-500">
            {formatViewcount(statistics.viewCount)}
          </p>
          <p className="font-semibold text-gray-500">{daysago} days ago</p>
        </div>
      </div>
    </div>
  );
};

export default Videocard;
