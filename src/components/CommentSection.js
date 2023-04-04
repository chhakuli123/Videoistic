import React, { useState, useEffect } from "react";

const CommentSection = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchVideoComments = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyDOw2x1wNwuU9PdYi3ij5Eoc0C-UpsakcU&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=50
            `
        );
        const data = await response.json();
        setComments(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideoComments();
  }, [videoId]);

  if (!Array.isArray(comments)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border rounded-lg p-4 bg-white mt-4">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <ul className="divide-y divide-gray-200 max-h-[100rem] overflow-y-auto border rounded-lg bg-gray-100">
        {comments.map((comment) => (
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
                    {comment.snippet.topLevelComment.snippet.authorDisplayName}
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
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
