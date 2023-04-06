// Import necessary modules
import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

// Component that fetches and renders the videos
const VideoContainer = () => {
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
      setVideos(json.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center h-screen overflow-y-auto">
      {videos ? (
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VideoContainer;
