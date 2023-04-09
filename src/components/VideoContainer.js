import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Component that displays a loading card
const LoadingCard = () => {
  return (
    <div className=" w-[18rem] rounded-xl overflow-hidden shadow-2xl m-4 animate-pulse">
      <div className="relative">
        <div className="w-full h-40 bg-gray-200"></div>
        <div className="absolute inset-0 bg-gray-800 opacity-25"></div>
      </div>
      <div className="px-4 py-2">
        <div className="font-bold text-base mb-1 bg-gray-200 h-4 rounded"></div>
        <div className="text-gray-600 text-sm mb-2 bg-gray-200 h-3 rounded"></div>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          <div className="text-sm ml-2">
            <div className="text-gray-900 leading-none mb-1 bg-gray-200 h-3 rounded"></div>
            <div className="text-gray-600 bg-gray-200 h-2 rounded"></div>
          </div>
        </div>
        <div className="text-xs text-gray-600 mt-2 bg-gray-200 h-2 rounded"></div>
      </div>
    </div>
  );
};

const VideoContainer = () => {
  const { selectedCategoryID } = useSelector((state) => state.categories);

  const [videos, setVideos] = useState([]);

  // Set loading state
  const [isLoading, setIsLoading] = useState(true);

  const getVideos = async (categoryID) => {
    try {
      setIsLoading(true); // Set loading state to true
      const data = await fetch(
        ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryID}&key=${GOOGLE_API_KEY}`
      );
      const json = await data.json();
      setVideos(json.items);
      setIsLoading(false); // Set loading state to false once videos are fetched
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedCategoryID) {
      getVideos(selectedCategoryID);
    } else {
      getVideos(0); // Fetch most popular videos if no category is selected
    }
  }, [selectedCategoryID]);

  return (
    <div className="flex flex-wrap items-center justify-center h-screen overflow-y-auto">
      {/* Conditionally render VideoCard or LoadingCard components */}
      {isLoading
        ? Array.from(Array(50)).map((_, index) => <LoadingCard key={index} />)
        : videos &&
          videos.map((video) => (
            <Link to={"/watch?v=" + video.id} key={video.id}>
              <VideoCard info={video} />
            </Link>
          ))}
    </div>
  );
};

export default VideoContainer;
