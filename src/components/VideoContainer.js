// Import necessary modules
import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

// Component that fetches and renders the videos
const VideoContainer = () => {
  // Initialize state variables for videos and loading status
  const [videos, setVideos] = useState([]);

  // Fetch videos on component mount
  useEffect(() => {
    getVideos();
  }, []);

  // Fetch videos from YouTube API
  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      // Set videos and loading status when data is retrieved successfully
      setVideos(json.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // Render videos or shimmer effect based on loading status
    <div className="flex flex-wrap items-center justify-center h-screen overflow-y-auto">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
