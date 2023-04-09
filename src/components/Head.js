import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  // State variables for search input and results, and search focus
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearchFocus, setIsSearchFocus] = useState(false);

  // Redux state variables for cached search results and dispatch function
  const cachedSearchResults = useSelector(
    (store) => store.search.cachedResults
  );

  const dispatch = useDispatch();
  // This function dispatches a Redux action to toggle the menu state
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // Effect hook to get search suggestions when searchQuery state changes
  useEffect(() => {
    // Set a timer to delay search suggestions fetching
    const timer = setTimeout(() => {
      // Check if cached search results exist for current search query
      if (cachedSearchResults[searchQuery]) {
        // Use cached search results if available
        setSearchResult(cachedSearchResults[searchQuery]);
      } else {
        // Fetch search suggestions from API and cache results
        getSearchSuggestions();
      }
    }, 100);

    // Clear timer if component unmounts or searchQuery state changes
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // This function fetches new search suggestions using the YouTube
  // Data API and sets the searchResult state to the suggestions.
  // It also caches the search results for future use.
  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchResult(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
    console.log(json[1]);
  };

  // This function updates the searchQuery state with the selected suggestion
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
  };

  return (
    <div className="flex justify-between items-center p-3 sticky top-0 z-50 bg-white">
      {/* Logo and Hamburgur */}
      <div className="flex">
        <span
          className="mt-4 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        >
          <i className="fa-lg fa-solid fa-bars"></i>
        </span>

        <img className="h-14 ml-2" src={logo} alt="" />
        <h3 className="font-serif font-extrabold mt-3 text-2xl bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
          Videoistic
        </h3>
      </div>
      {/* Search input */}
      <div className="flex items-center w-[30rem] relative">
        <Link
          to={`results?search_query=${
            searchQuery.length ? searchQuery : "most+popular"
          }`}
        >
          <div className="flex items-center w-[30rem] relative">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-400 rounded-l-full p-2"
              type="text"
              onFocus={() => setIsSearchFocus(true)}
              onBlur={() =>
                setTimeout(() => {
                  setIsSearchFocus(false);
                }, 100)
              }
              placeholder="Search videos..."
            />{" "}
            <button className="border border-gray-400 hover:bg-slate-400 bg-slate-300 rounded-r-full p-2 w-12">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </Link>
        {searchResult.length !== 0 && isSearchFocus && (
          <div className="w-[90%] absolute top-11">
            <ul className="ml-3 p-2 shadow-lg shadow-neutral-500 rounded-lg bg-white">
              {searchResult.map((e) => {
                return (
                  <Link to={`results?search_query=${e}`} key={e}>
                    <li
                      onClick={() => handleSuggestionClick(e)}
                      className="p-1 hover:bg-gray-100 cursor-pointer rounded-md"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i> {e}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* user */}
      <div className="flex items-center">
        <i className="fa-lg fa-solid fa-user"></i>
      </div>
    </div>
  );
};

export default Head;
