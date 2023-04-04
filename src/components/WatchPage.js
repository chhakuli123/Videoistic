import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoSuggestions from "./VideoSuggestions";
import CommentSection from "./CommentSection";
import VideoInfo from "./VideoInfo";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="flex flex-wrap mt-4 p-8">
      <div className="w-full lg:w-2/3 px-5">
        <iframe
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="mb-8 rounded-2xl shadow-xl w-full h-auto md:w-[100%] md:h-[600px]"
        ></iframe>

        <div className="mb-8">
          <VideoInfo videoId={searchParams.get("v")} />
        </div>
        <CommentSection videoId={searchParams.get("v")} />
      </div>
      <div className="w-full lg:w-1/3 px-5">
        <VideoSuggestions videoId={searchParams.get("v")} />
      </div>
    </div>
  );
};

export default WatchPage;
