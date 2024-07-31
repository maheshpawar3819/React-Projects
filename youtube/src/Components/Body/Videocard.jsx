import React from "react";

const Videocard = ({ vdata }) => {
  const { snippet, statistics } = vdata;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

//   calculate days 
  const calculateDaysAgo=(dataString)=> {
    const publishDate=new Date(dataString);
    const currentDate=new Date();
    const timeDiffrence=currentDate-publishDate;
    const daysDiffrence=Math.floor(timeDiffrence/(1000*60*60*24));
    return daysDiffrence;
  }

  const daysago=calculateDaysAgo(publishedAt);

  //views
  const formatViewcount=(viewCount)=> {
    if(viewCount>=1000000){
        return (viewCount/1000000).toFixed(1)+"m";
    }else if(viewCount>=1000){
        return(viewCount/1000).toFixed(1)+"k";
    }else{
        return viewCount.toString();
    }
  };

  return (
    <div>
      <img src={thumbnails?.medium?.url} alt="Tnumbnails" />
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{formatViewcount(statistics.viewCount)}</li>
        <li>{daysago} days ago</li>
      </ul>
    </div>
  );
};

export default Videocard;
