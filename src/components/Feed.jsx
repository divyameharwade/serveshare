import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Feed = () => {
  return (
    <div className="">
      <Navbar />
      <div className="grid grid-cols-5 gap-4 h-96 w-full mx-4">
        <div className="bg-gray-200 p-4  rounded-lg">Card 1</div>
        <div className="bg-gray-200 p-4  rounded-lg">Card 2</div>
        <div className="bg-gray-200 p-4  rounded-lg">Card 3</div>
        <div className="bg-gray-200 p-4  rounded-lg">Card 1</div>
        <div className="bg-gray-200 p-4  rounded-lg">Card 2</div>
      </div>
      <Footer />
    </div>
  );
};

export default Feed;
