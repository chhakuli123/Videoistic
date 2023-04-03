import React from "react";

const ButtonsList = () => {
  const categories = [
    "Music",
    "Sports",
    "Gaming",
    "News",
    "Movies",
    "Podcasts",
    "Cooking",
    "Yoga",
    "Comedy",
    "Drama",
  ];

  return (
    <div className="flex overflow-x-auto py-3 flex-wrap justify-center sm:justify-start">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`m-2 sm:m-4 px-4 py-2 text-black font-bold border border-orange-500 rounded-full shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
            index === 0 ? "rounded-full" : ""
          } ${index === categories.length - 1 ? "rounded-full" : ""}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ButtonsList;
