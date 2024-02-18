import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import image from "../Assets/kids.png";
import { useState } from "react";

const VolunteerPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const handleRegister = () => {
    console.log("Clicked");
    setShowMessage(true);
  };

  return (
    <div>
      <Navbar />
      {/* <div className="h-screen w-full">
      <div className="bg-gray-200 p-4  rounded-lg">

      </div>
        <div className="grid grid-cols-2 gap-4 h-96 w-70% mx-10 pt-32">
          <div className="bg-gray-200 p-4  rounded-lg">Card 1</div>
          <div className="bg-gray-200 p-4  rounded-lg">Card 2</div>
        </div>
      </div> */}
      <div className="mx-auto p-10">
        <div className="h-screen w-full mx-20 p-4 pt-20 ">
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Image on the left */}
            <div className="md:w-1/2">
              <img src={image} alt="Volunteering" className="w-full h-auto" />
            </div>

            {/* Details and register button on the right */}
            <div className="md:w-1/2 p-8 mr-20">
              <h2 className="text-3xl font-bold mb-4">Santa Clara Shelter</h2>
              <p className="text-lg mb-4">
                Do you have great content writing skills and would like to use
                them for a good cause? If Yes, then SARWA NGO has an online
                volunteering opportunity for you. They need help with content
                that can be used for their social media and website content
                handles.
              </p>
              <p className="text-lg mb-4">
                Established in 2006, aims to work on improving the economic,
                social, and physical well-being of society, education, and child
                psychological development. They conduct various drives on
                awareness in schools and colleges and also conduct sessions to
                educate and sensitize people who don't have access to basic
                amenities.
              </p>
              <button
                onClick={handleRegister}
                className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
              >
                Register
              </button>
            </div>
          </div>
          <div>
            {showMessage ? (
              <div
                className={` mx-auto items-center w-2/3 h-16 justify-center  bg-${
                  showMessage ? "light-pink" : "white"
                } rounded-md p-4 cursor-pointer`}
              >
                {showMessage ? (
                  <p className="text-pink-800 font-bold justify-center text-center">
                    You have been registered for the opportunity! Thank you for
                    joining the cause!
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VolunteerPage;
