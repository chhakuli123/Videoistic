import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return if the menu is not open
  if (!isMenuOpen) return null;

  return (
    <div className="top-18 w-28 h-full fixed text-gray-900 bg-white ">
      <ul className="flex flex-col">
        {/* Home */}
        <li>
          <a
            className="side-bar-items flex flex-col items-center mt-8 py-3 px-2 hover:text-orange-300"
            href="/"
          >
            <i class="fa-2x fa-solid fa-house"></i>
            <span className="font-serif mt-2 text-sm font-bold ">
              <Link to="/">Home</Link>
            </span>
          </a>
        </li>

        {/* Explore */}
        <li>
          <a
            aria-current="page"
            className="side-bar-items flex flex-col items-center mt-4 py-3 px-2 hover:text-orange-300"
            href="/explore"
          >
            <i class="fa-2x fa-solid fa-regular fa-compass"></i>
            <span className="mt-2 text-sm font-bold ">Explore</span>
          </a>
        </li>

        {/* Playlists */}
        <li>
          <a
            className="side-bar-items flex flex-col items-center mt-4 py-3 px-2 hover:text-orange-300"
            href="/playlist"
          >
            <i class="fa-2x fa-solid fa-circle-play"></i>
            <span className="mt-2 text-sm font-bold">Playlists</span>
          </a>
        </li>

        {/* Liked Videos */}
        <li>
          <a
            className="side-bar-items flex flex-col items-center mt-4 py-3 px-2 hover:text-orange-300"
            href="/liked"
          >
            <i class="fa-2x fa-solid fa-thumbs-up"></i>
            <span className=" mt-2 text-sm font-bold">Liked Videos</span>
          </a>
        </li>

        {/* Watch Later */}
        <li>
          <a
            className="side-bar-items flex flex-col items-center mt-4 py-3 px-2 hover:text-orange-300"
            href="/watchlater"
          >
            <i class="fa-2x fa-solid fa-regular fa-clock"></i>
            <span className=" mt-2 text-sm font-bold">Watch Later</span>
          </a>
        </li>

        {/* History */}
        <li>
          <a
            className="side-bar-items flex flex-col items-center mt-4 py-3 px-2 hover:text-orange-300"
            href="/history"
          >
            <i class="fa-2x fa-solid fa-clock-rotate-left"></i>
            <span className=" mt-2 text-sm font-bold ">History</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
