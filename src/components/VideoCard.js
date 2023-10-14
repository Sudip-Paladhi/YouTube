import React from "react";
const VideoCard = ({ info }) => {

  return (
    <div className="md:m-2 md:flex md:flex-wrap cursor-pointer">
      <img src={info?.snippet?.thumbnails?.maxres?.url} alt="thumbnails"  className="rounded-lg md:w-[560px]"/>
      <ul>
        <li className="font-semibold text-lg md:mt-1">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views </li>
      </ul>
    </div>
  );
};

export default VideoCard;
