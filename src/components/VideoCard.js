import React from "react";
const VideoCard = ({ info }) => {

  return (
    <div className=" md:w-72 md:p-2 md:m-2 shadow-lg cursor-pointer">
      <img src={info?.snippet?.thumbnails?.medium?.url} alt="thumbnails"  className="rounded-lg"/>
      <ul>
        <li className="font-semibold text-lg md:mt-1">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views </li>
      </ul>
    </div>
  );
};

export default VideoCard;
