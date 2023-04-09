import React from "react";

const VideoCard = ({ info }) => {
  // Destructure "snippet" and "statistics" from the "info" prop
  const { snippet, statistics } = info;

  // Destructure properties from "snippet"
  const { channelTitle, title, description, thumbnails } = snippet;

  return (
    <div className="max-w-[18rem] rounded-xl overflow-hidden shadow-2xl m-4 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 ">
      <div className="relative">
        {/* Display the video thumbnail */}
        <img
          className="w-full h-40 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
          src={thumbnails.high.url}
          alt={title}
        />
        {/* Display a dark overlay on hover */}
        <div className="absolute inset-0 bg-gray-800 opacity-25 hover:opacity-0 transition-opacity duration-500 ease-in-out"></div>
        {/* Display a "Play Video" button on hover */}
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-uppercase opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <span className="cursor-pointer">
            <i class="fa-solid fa-play"></i> Play Video
          </span>
        </div>
      </div>
      <div className="px-4 py-2">
        {/* Display the video title */}
        <div className="font-bold text-base mb-1 truncate">{title}</div>
        {/* Display the video description */}
        <p className="text-gray-600 text-sm mb-2 truncate">{description}</p>
        {/* Display the channel title and subscriber count */}
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={snippet.thumbnails.default.url}
            alt=""
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none mb-1 truncate">
              {channelTitle}
            </p>
            <p className="text-gray-600 truncate">
              {statistics.subscriberCount} subscribers
            </p>
          </div>
        </div>
        {/* Display the video view count and publish date */}
        <div className="text-xs text-gray-600 mt-2">
          <p>
            {statistics.viewCount} views •{" "}
            {snippet.publishedAt.substring(0, 10)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
