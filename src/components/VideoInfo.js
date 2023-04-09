import React, { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";

const VideoInfo = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    // Fetch video information from YouTube API with videoId and set it in state
    const fetchVideoInfo = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${GOOGLE_API_KEY}`
        );
        const data = await response.json();
        setVideoInfo(data.items[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideoInfo();
  }, [videoId]);

  const toggleShowMore = () => {
    // Toggle showMore state to expand/collapse video description
    setShowMore(!showMore);
  };

  if (!videoInfo) {
    return <div>Loading...</div>;
  }

  // Truncate description to first 200 characters and add ellipsis, unless showMore state is true
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
      {/* Display truncated description with option to show/hide full description */}
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
