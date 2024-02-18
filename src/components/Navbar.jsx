import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "react-scroll";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setNav(!nav);
    console.log("Clicked");
    navigate("/feed");
  };

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "volunteer",
    },
    {
      id: 3,
      link: "donate",
    },
    {
      id: 4,
      link: "contact",
    },
    {
      id: 5,
      link: "join us",
      style:
        "py-0.5 my-0.5 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-2 text-white bg-black fixed z-10 ">
      <div>
        <h1 className="text-3xl md:text-5xl font-signature ml-2">ServeShare</h1>
      </div>

      <ul className="hidden md:flex items-center">
        {links.map(({ id, link, style }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium text-white  hover:text-orange-500 hover:scale-105 duration-200 ${style}`}
          >
            <p onClick={handleClick} smooth duration={500}>
              {" "}
              {link}{" "}
            </p>
            {/* <Link smooth duration={500 onClick={handleClick}}>
              {link}
            </Link> */}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col top-0 left-0 w-full h-screen justify-center items-center absolute bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, style }) => (
            <li
              key={id}
              className="px-4 py-6 capitalize cursor-pointer text-4xl"
            >
              <p onClick={handleClick} smooth duration={500}>
                {" "}
                {link}{" "}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
