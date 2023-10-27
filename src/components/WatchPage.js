import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsPage from "./CommentsPage";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex-row w-full">
    <div className="flex gap-5 md:rounded-lg md:px-5 ">
    <div>
      <iframe
        width="770"
        height="433"
        src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>

      <div className="w-full">
      <LiveChat />
      </div>
    </div>
    <div className="md:p-4">
    <CommentsPage />
    </div>
    
    </div>
  );
};

export default WatchPage;
