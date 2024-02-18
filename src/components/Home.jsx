import React from "react";
import bg from "../Assets/background.png";
import kids from "../Assets/kids.png";
import background from "../Assets/background.png";
import homeless from "../Assets/homeless.png";
import Cards from "./Cards";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import Gallery from "./Gallery";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import TypewriterEffect from 'react-typewriter-effect';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen  w-full ">
        <div className="relative">
          <img src={background} alt="" className="w-full mx-auto h-screen opacity-80" />
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-white text-center font-bold font-sans">
            <TypewriterEffect
              textStyle={{ fontSize: '4.5em' }} // Set the size and other styles as needed
              startDelay={100}
              cursorColor="white"
              multiText={[
                "1.5 Million NGOs across USA",
                "Empowering voices, creating opportunities.",
                "Together we can make a difference.",
                "Join us in making a change."
              ]}
              multiTextDelay={1000}
              typeSpeed={100}
              deleteSpeed={50}
              
            />
          </div>
        </div>
          <section className="flex relative bottom-40 mx-auto h-80 pb-8 ">
            <div className="container mx-auto">
              <div className="mx-40 flex flex-row">
                <div className=" w-1/2 md-5 d-flex justify-center text-center h-76 ">
                  <div className=" bg-orange-600 text-center">
                    <div className="text justify-center font-sans ">
                      <h1 className="text-6xl font-bold font-serif text-white justify-center  text-center p-5">
                        SERVE
                      </h1>
                      <span class="block p-5 font-sans text-white rounded-lg shadow, text-justify">
                      Serving the community embodies the spirit of empathy and 
                      solidarity, enabling individuals to connect with and uplift 
                      those around them through acts of kindness, support, and advocacy. 
                      It is a powerful way to build stronger, more resilient communities, 
                      fostering a sense of belonging and mutual respect among diverse groups of people.
                    </span>
                    </div>
                  </div>
                </div>
                <div className=" w-1/2 md-5 d-flex justify-center text-center h-76">
                  <div className=" bg-orange-500 text-center">
                    <div className="text justify-center font-sans ">
                      <h1 className="text-6xl font-bold font-sans text-white justify-center  text-center p-5">
                        SHARE
                      </h1>
                      <span class="block p-5 font-sans text-white rounded-lg shadow, text-justify">
                      Serving the community embodies the spirit of empathy and 
                      solidarity, enabling individuals to connect with and uplift 
                      those around them through acts of kindness, support, and advocacy. 
                      It is a powerful way to build stronger, more resilient communities, 
                      fostering a sense of belonging and mutual respect among diverse groups of people.
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Skills />

      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
