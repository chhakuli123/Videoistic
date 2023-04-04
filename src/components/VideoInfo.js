import React, { useState, useEffect } from "react";
import { VIDEO_INFO } from "../utils/constants";
const VideoInfo = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState(null);

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

  if (!videoInfo) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="text-2xl font-bold">{videoInfo.snippet.title}</h2>
      <div className="flex items-center space-x-2 mb-4">
        <img
          src={videoInfo.snippet.thumbnails.default.url}
          alt={videoInfo.snippet.title}
          className="w-12 h-12 rounded-full"
        />
        <span className="text-gray-600">{videoInfo.snippet.channelTitle}</span>
      </div>
      {/* <p className="text-sm text-gray-600">{videoInfo.snippet.description}</p> */}
      <div className="flex items-center space-x-4 mt-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          Like
        </button>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
