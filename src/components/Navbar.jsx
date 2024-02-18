import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const handleClick = (page) => {
    // setNav(!nav);
    console.log("Clicked");
    navigate(page);
  };

  const links = [
    {
      id: 1,
      link: "home",
      page: "/",
    },
    {
      id: 2,
      link: "volunteer",
      page: "/volunteer",
    },
    {
      id: 3,
      link: "donate",
      page: "/donate",
    },
    {
      id: 4,
      link: "contact",
    },
    {
      id: 5,
      link: "join us",
      page: "/feed",
      style:
        "py-0.5 my-0.5 flex items-center rounded-md bg-orange-500 cursor-pointer",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20  text-white bg-transparent fixed z-10 pr-10">
      <div>
        <h1 className="text-5xl md:text-4xl font-signature pl-10">
          ServeShare
        </h1>
      </div>

      <ul className="hidden md:flex items-center">
        {links.map(({ id, link, style, page }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium text-orange-500  hover:scale-105 duration-200 ${style}`}
          >
            <p onClick={() => handleClick(page)}> {link} </p>
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
          {links.map(({ id, link, style, page }) => (
            <li
              key={id}
              className="px-4 py-6 capitalize cursor-pointer text-4xl"
            >
              {/* <p onClick={handleClick} smooth duration={500}>
                {" "}
                {link}{" "}
              </p> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
