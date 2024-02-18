import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import kids from "../Assets/kids.png";

const Cards = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Clicked");
    navigate("/feed");
  };
  return (
    <div className="">
      <Navbar />
      <div
        className="grid grid-cols-4 gap-2  w-80% mx-10 pt-20 justify-center text-center"
        style={{ flex: 1 }}
      >
        {/* card1 */}
        <div className="rounded-lg">
          <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-2 py-2 bg-taupe">
              <div className="font-bold text-xl mb-2 text-black">
                Fundraiser Volunteer
              </div>
            </div>
            <div className="text-xl text-black">
              <img
                src={kids}
                className="w-full h-38 mx-auto text-3xl hover:cursor-pointer"
              />
            </div>
            <div className="text-xl mb-2 px-8 py-24 text-black">
              <p className="text-gray-700 text-base">
                Content of Card 2 goes here.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg">
          <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-2 py-2 bg-taupe">
              <div className="font-bold text-xl mb-2 text-black">
                Fundraiser Volunteer
              </div>
            </div>
            <div className="text-xl  text-black">
              <img src={kids} />
            </div>
            <div className="text-xl mb-2 px-8 py-24 text-black">
              <p className="text-gray-700 text-base">
                Content of Card 2 goes here.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg">
          <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-2 py-2 bg-taupe">
              <div className="font-bold text-xl mb-2 text-black">
                Fundraiser Volunteer
              </div>
            </div>
            <div className="text-xl  text-black">
              <img src={kids} />
            </div>
            <div className="text-xl mb-2 px-8 py-24 text-black">
              <p className="text-gray-700 text-base">
                Content of Card 2 goes here.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg">
          <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-2 py-2 bg-taupe">
              <div className="font-bold text-xl mb-2 text-black">
                Fundraiser Volunteer
              </div>
            </div>
            <div className="text-xl  text-black">
              <img src={kids} />
            </div>
            <div className="text-xl mb-2 px-8 py-24 text-black">
              <p className="text-gray-700 text-base">
                Content of Card 2 goes here.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg">
          <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-2 py-2 bg-taupe">
              <div className="font-bold text-xl mb-2 text-black">
                Fundraiser Volunteer
              </div>
            </div>
            <div className="text-xl  text-black">
              <img src={kids} />
            </div>
            <div className="text-xl mb-2 px-8 py-24 text-black">
              <p className="text-gray-700 text-base">
                Content of Card 2 goes here.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg">
          <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-2 py-2 bg-taupe">
              <div className="font-bold text-xl mb-2 text-black">
                Fundraiser Volunteer
              </div>
            </div>
            <div className="text-xl  text-black">
              <img src={kids} />
            </div>
            <div className="text-xl mb-2 px-8 py-24 text-black">
              <p className="text-gray-700 text-base">
                Content of Card 2 goes here.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg">
          <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-2 py-2 bg-taupe">
              <div className="font-bold text-xl mb-2 text-black">
                Fundraiser Volunteer
              </div>
            </div>
            <div className="text-xl  text-black">
              <img src={kids} />
            </div>
            <div className="text-xl mb-2 px-8 py-24 text-black">
              <p className="text-gray-700 text-base">
                Content of Card 2 goes here.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg">
          <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-2 py-2 bg-taupe">
              <div className="font-bold text-xl mb-2 text-black">
                Fundraiser Volunteer
              </div>
            </div>
            <div className="text-xl  text-black">
              <img src={kids} />
            </div>
            <div className="text-xl mb-2 px-8 py-24 text-black">
              <p className="text-gray-700 text-base">
                Content of Card 2 goes here.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cards;
