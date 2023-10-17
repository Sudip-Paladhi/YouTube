import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsPage from "./CommentsPage";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex-row">
    <div className="md:rounded-lg md:px-5 ">
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
    <div className="md:p-4">
    <CommentsPage />
    </div>
    
    </div>
  );
};

export default WatchPage;
