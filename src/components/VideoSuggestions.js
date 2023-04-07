import React, { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";

// Component that renders a shimmer effect while data is loading
const Shimmer = () => {
  return (
    <div className="flex items-center p-3">
      <div className="w-[10rem] h-[6rem] bg-gray-300 rounded-xl animate-pulse"></div>
      <div className="ml-3 mb-4">
        <div className="w-40 h-4 bg-gray-300 rounded animate-pulse mb-1"></div>
        <div className="w-20 h-4 bg-gray-300 rounded animate-pulse mb-1"></div>
        <div className="w-14 h-4 bg-gray-300 rounded animate-pulse mb-1"></div>
        <div className="w-8 h-4 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

// Component that fetches and renders video suggestions related to a videoId prop passed in
const VideoSuggestions = ({ videoId }) => {
  // State hook to hold the video suggestions
  const [suggestions, setSuggestions] = useState([]);

  // Effect hook that fetches video suggestions on mount and whenever the videoId prop changes
  useEffect(() => {
    const fetchVideoSuggestions = async () => {
      try {
        const response = await fetch(
          // Use the YouTube Data API to fetch related video suggestions based on the videoId prop passed in
          `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${GOOGLE_API_KEY}-UpsakcU&maxResults=50`
        );
        const data = await response.json();
        setSuggestions(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideoSuggestions();
  }, [videoId]);

  // Render the video suggestions
  return (
    <div className="mb-6 ">
      <h2 className="text-xl font-bold mb-4">Video Suggestions</h2>
      <ul className="max-h-[147.8rem] overflow-y-auto border rounded-lg bg-gray-100">
        {suggestions && suggestions.length > 0 ? (
          suggestions.map((suggestion) => (
            <li key={suggestion.id.videoId}>
              <a
                href={`https://www.youtube.com/watch?v=${suggestion.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 hover:bg-gray-300 hover:rounded-2xl"
              >
                <img
                  src={suggestion.snippet.thumbnails.medium.url}
                  alt=""
                  className="w-25 h-[6rem] object-cover rounded"
                />
                <div className="ml-3">
                  <p className="text-sm font-bold text-gray-800">
                    {suggestion.snippet.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {suggestion.snippet.channelTitle}
                  </p>
                </div>
              </a>
            </li>
          ))
        ) : (
          // If no suggestions have been loaded yet, show a shimmer effect to indicate that data is loading
          <div className="p-3 text-gray-600">
            {Array.from({ length: 20 }).map((_, index) => (
              <Shimmer key={index} />
            ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default VideoSuggestions;
