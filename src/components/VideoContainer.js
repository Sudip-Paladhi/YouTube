import React from 'react'
import { useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/contants';
const VideoContainer = () => {

    useEffect(() => {
        getYoutubrData();
    }, []);

    const getYoutubrData = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        console.log(json);
    }

  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer;