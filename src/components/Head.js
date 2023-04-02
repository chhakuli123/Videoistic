import React from "react";
import logo from "../assets/logo.jpg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between items-center p-3">
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
      <div className="flex items-center w-[30rem]">
        <input
          type="text"
          className="w-full border border-gray-400 rounded-l-full p-2"
          placeholder="Search videos..."
        />
        <button className="border border-gray-400 hover:bg-slate-400 bg-slate-300 rounded-r-full p-2 w-12">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      {/* user */}
      <div className="flex items-center">
        <i className="fa-lg fa-solid fa-user"></i>
      </div>
    </div>
  );
};

export default Head;
