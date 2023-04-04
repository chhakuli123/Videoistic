import React, { useState, useEffect } from "react";

const VideoSuggestions = ({ videoId }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchVideoSuggestions = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=AIzaSyDOw2x1wNwuU9PdYi3ij5Eoc0C-UpsakcU&maxResults=50`
        );
        const data = await response.json();
        setSuggestions(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideoSuggestions();
  }, [videoId]);

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
          <li className="p-3 text-gray-600">No suggestions found.</li>
        )}
      </ul>
    </div>
  );
};

export default VideoSuggestions;
