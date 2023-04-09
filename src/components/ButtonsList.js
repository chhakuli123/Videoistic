import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../utils/categoreSice";

const ButtonsList = () => {
  // Access the dispatch function from the Redux store
  const dispatch = useDispatch();
  // Access the categories and selectedCategoryID values from the Redux store
  const { categories, selectedCategoryID } = useSelector(
    (state) => state.categories
  );

  // Define a function to handle category changes
  const handleCategoryChange = (categoryId) => {
    // Dispatch a selectCategory action with the selected category ID
    dispatch(selectCategory(categoryId));
  };

  return (
    <div>
      {/* Use flex display to center the button list and make it scrollable on small screens */}
      <div
        className={`flex py-3 flex-wrap justify-center sm:justify-start ${
          categories.length > 4 ? "overflow-x-auto" : ""
        }`}
      >
        {/* Map over the categories array and render a button for each category */}
        {categories.map((category) => (
          <button
            // Use the category's ID as the key for the button
            key={category.categoryId}
            // Attach a click event handler to each button
            onClick={() => handleCategoryChange(category.categoryId)}
            // Add classes to style the button based on whether it's selected or not
            className={`m-2 sm:m-4 px-4 py-2 text-black font-bold border ${
              category.categoryId === selectedCategoryID
                ? "border-orange-500"
                : "border-gray-500"
            } rounded-full shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105`}
          >
            {/* Display the category name on the button */}
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonsList;
