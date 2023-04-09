import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoSuggestions from "./VideoSuggestions";
import CommentSection from "./CommentSection";
import VideoInfo from "./VideoInfo";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  // Close menu on page load
  useEffect(() => {
    dispatch(closeMenu());
  });

  // Handle video load
  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="flex flex-wrap mt-4 p-8">
      {/* Video player */}
      <div className="w-[60rem] lg:w-2/3 px-5">
        {/* Loading animation */}
        {loading && (
          <div className="animate-pulse h-[600px] w-[60rem] rounded-2xl bg-gray-200"></div>
        )}

        {/* Video player iframe */}
        <iframe
          onLoad={handleLoad}
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={`mb-8 rounded-2xl shadow-xl w-full h-[30rem] md:w-[58rem] md:h-[600px] ${
            loading ? "hidden" : ""
          }`}
        ></iframe>

        {/* Video information */}
        <div className="mb-8">
          <VideoInfo videoId={searchParams.get("v")} />
        </div>

        {/* Comment section */}
        <CommentSection videoId={searchParams.get("v")} />
      </div>

      {/* Video suggestions */}
      <div className="lg:w-1/3 px-5">
        <VideoSuggestions videoId={searchParams.get("v")} />
      </div>
    </div>
  );
};

export default WatchPage;
