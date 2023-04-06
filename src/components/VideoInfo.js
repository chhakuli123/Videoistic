import React, { useState, useEffect } from "react";
import { VIDEO_INFO } from "../utils/constants";

const VideoInfo = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const response = await fetch(VIDEO_INFO + videoId);
        const data = await response.json();
        setVideoInfo(data.items[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideoInfo();
  }, [videoId]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  if (!videoInfo) {
    return <div>Loading...</div>;
  }

  const description = showMore
    ? videoInfo.snippet.description
    : videoInfo.snippet.description.slice(0, 200) + "...";

  return (
    <div>
      <h2 className="text-[1.5rem] font-bold">{videoInfo.snippet.title}</h2>
      <div className="flex items-center space-x-2 mb-4 mt-3">
        <img
          src={videoInfo.snippet.thumbnails.default.url}
          alt={videoInfo.snippet.title}
          className="w-12 h-12 rounded-full"
        />
        <span className="text-gray-800 font-bold">
          {videoInfo.snippet.channelTitle}
        </span>
        <button className="px-4 py-2 bg-red-600 text-white rounded-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
          Subscribe
        </button>
      </div>
      <p className="text-md border-gray-800 bg-slate-200 p-6 rounded-lg text-black">
        {description}
        {videoInfo.snippet.description.length > 200 && (
          <span
            onClick={toggleShowMore}
            className="text-gray-900 cursor-pointer font-bold text-md"
          >
            {showMore ? " Show Less" : " Show More"}
          </span>
        )}
      </p>
    </div>
  );
};

export default VideoInfo;
