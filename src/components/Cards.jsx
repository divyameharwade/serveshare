import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

// Import images for each card
import kids from "../Assets/kids.png";
import homeless from "../Assets/homeless.png";
import teach from "../Assets/bg2.png";
// Import SVG icons for location and duration
import LocationIcon from "../Assets/location.svg";
import TimeIcon from "../Assets/time.svg";

const Cards = () => {
  const navigate = useNavigate();

  // Mock data for cards
  const cardData = [
    {
      image: kids,
      name: "Content Writer",
      description:
        "Do you have great content writing skills and would like to use them for a good cause?",
      location: "Santa Clara",
      duration: "3 days",
    },
    {
      image: homeless,
      name: "Food Distribution",
      description:
        "Spend a day serving the homeless community. Distribute food, clothes and other groceries.",
      location: "Milpitas, CA",
      duration: "4 hours",
    },
    {
      image: teach,
      name: "Teaching Assistant",
      description:
        "Is teaching your passion? Do you want to give back to the society? With this volunteering opportunity, you can do both!",
      location: "San Jose",
      duration: "Recurrent",
    },
    // Add more objects for additional cards as needed
  ];

  const handleClickRequest = (page) => {
    console.log("Clicked");
    navigate(page);
  };

  return (
    <div className="">
      <Navbar />
      <div className="grid grid-cols-4 gap-2 w-80% mx-10 pt-32 justify-center text-center">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="rounded-lg"
            onClick={() => handleClickRequest("/volunteerpage")}
          >
            <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-2 py-2 bg-orange-500">
                <div className="font-bold text-xl mb-2 text-black">
                  {card.name}
                </div>
              </div>
              <div className="text-xl text-black">
                <img
                  src={card.image}
                  alt={`NGO ${index + 1}`}
                  className="w-full h-38 mx-auto text-3xl hover:cursor-pointer"
                />
              </div>
              <div className="text-xl mb-2 px-8 pb-2 text-black">
                <p className="text-gray-700 text-base mt-2">
                  {card.description}
                </p>
                <div className="flex items-center mt-2">
                  <div className="mr-4 flex items-center">
                    <img
                      src={LocationIcon}
                      alt="Location Icon"
                      className="w-4 h-4 ml-5 mr-2"
                    />
                    <span>{card.location}</span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={TimeIcon}
                      alt="Time Icon"
                      className="w-4 h-4 ml-10 mr-2"
                    />
                    <span>{card.duration}</span>
                  </div>
                </div>
              </div>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-4">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Cards;
