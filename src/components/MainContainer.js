import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

// Main container component which renders the ButtonsList and VideoContainer components
const MainContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center ml-12">
      {/* Render the ButtonsList component */}
      <ButtonsList />

      {/* Render the VideoContainer component */}
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
