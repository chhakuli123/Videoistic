import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    // Use the flex display to arrange the sidebar and outlet in a row
    <div className="flex">
      {/*Render the Sidebar component on the left side */}
      <Sidebar />
      {/* Use the Outlet component from react-router-dom to render the nested routes
         defined in the parent component */}
      <Outlet />
    </div>
  );
};

export default Body;
