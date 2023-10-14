import React, { useState } from "react";
import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/contants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getYoutubrData();
  }, []);

  const getYoutubrData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };

  return (
    <div className=" md:w-6/12">
      {videos.map((video) => (
        // <VideoCard key={video.id} info={video} />
        <Link to={"/watch?v="+ video.id}> <VideoCard key={video.id} info={video} /> </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
