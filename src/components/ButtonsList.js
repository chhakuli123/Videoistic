import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../utils/categoreSice";

const ButtonsList = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategoryID } = useSelector(
    (state) => state.categories
  );

  const handleCategoryChange = (categoryId) => {
    dispatch(selectCategory(categoryId));
  };

  return (
    <div>
      <div
        className={`flex py-3 flex-wrap justify-center sm:justify-start ${
          categories.length > 4 ? "overflow-x-auto" : ""
        }`}
      >
        {categories.map((category) => (
          <button
            key={category.categoryId}
            onClick={() => handleCategoryChange(category.categoryId)}
            className={`m-2 sm:m-4 px-4 py-2 text-black font-bold border ${
              category.categoryId === selectedCategoryID
                ? "border-orange-500"
                : "border-gray-500"
            } rounded-full shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonsList;
