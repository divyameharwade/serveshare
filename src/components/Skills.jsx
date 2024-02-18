import React from "react";
import disabled from "../Assets/disabled-person.png";
import kids from "../Assets/sister-and-brother.png";
import old from "../Assets/old.png";
import homeless from "../Assets/shelter.png";
import education from "../Assets/open-book.png";
import wempower from "../Assets/time.png";
import { useNavigate } from "react-router-dom";
import { Button } from "react-scroll";

const Skills = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Clicked");
    navigate("/volunteer");
  };

  const images = [
    {
      id: 0,
      src: education,
      stats: 10000,
      text: "education",
      style: "shadow-taupe",
      page: "education",
    },
    {
      id: 1,
      src: old,
      stats: 10000,
      text: "Elderly",
      style: "shadow-taupe",
    },
    {
      id: 2,
      src: wempower,
      stats: 10000,
      text: "Women empowerment",
      style: "shadow-taupe",
    },
    {
      id: 3,
      stats: 10000,
      src: kids,
      text: "kids",
      style: "shadow-taupe",
    },
    {
      id: 4,
      stats: 10000,
      src: homeless,
      text: "unhoused",
      style: "shadow-taupe",
    },
    {
      id: 5,
      stats: 10000,
      src: disabled,
      text: "specially challenged",
      style: "shadow-taupe",
    },
  ];
  return (
    <div name="skills">
      <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0 mb-10 md:mb-28">
        <div
          className={`shadow-md hover:scale-150 duration-500 py-2 bg-white rounded-3xl  shadow-taupe cursor-pointer`}
        >
          <img
            src={education}
            className="w-20 h-20 mx-auto text-3xl hover:cursor-pointer"
          />

          <p className="mt-4 capitalize">Education SOmTHIG</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
