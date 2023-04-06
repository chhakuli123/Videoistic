import React, { useState, useEffect } from "react";

// Component that renders a shimmer effect while data is loading
const Shimmer = () => {
  return (
    <div className="flex items-center p-3">
      <div className="w-[3rem] h-[3rem] bg-gray-300 rounded-full animate-pulse"></div>
      <div className="ml-4">
        <div className="w-24 h-4 bg-gray-300 rounded animate-pulse mb-1"></div>
        <div className="w-32 h-4 bg-gray-300 rounded animate-pulse mb-1"></div>
      </div>
    </div>
  );
};

// Component that displays comments for a given video
const CommentSection = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchVideoComments = async () => {
      try {
        // Send a request to the YouTube API to retrieve comments for the given video ID
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/commentThreads?key=YOUR_API_KEY&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=50`
        );
        const data = await response.json();
        setComments(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch comments when the component mounts or when the video ID changes
    fetchVideoComments();
  }, [videoId]);

  return (
    <div className="border rounded-lg p-4 bg-white mt-4">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <ul className="divide-y divide-gray-200 max-h-[100rem] overflow-y-auto border rounded-lg bg-gray-100 p-4">
        {comments && comments.length > 0 ? (
          // If comments have been loaded, map over the comments array and render each comment as a list item
          comments.map((comment) => (
            <li key={comment.id} className="py-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={
                      comment.snippet.topLevelComment.snippet
                        .authorProfileImageUrl
                    }
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">
                      {
                        comment.snippet.topLevelComment.snippet
                          .authorDisplayName
                      }
                    </h3>
                    <p className="text-sm text-gray-500">
                      {new Date(
                        comment.snippet.topLevelComment.snippet.publishedAt
                      ).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    {comment.snippet.topLevelComment.snippet.textOriginal}
                  </p>
                </div>
              </div>
            </li>
          ))
        ) : (
          // If no comments have been loaded yet, show a shimmer effect to indicate that data is loading
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

export default CommentSection;
