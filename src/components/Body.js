import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
