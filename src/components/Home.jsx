import React from "react";
import bg from "../Assets/bg.png";
import kids from "../Assets/kids.png";
import background from "../Assets/background.png";
import homeless from "../Assets/homeless.png";
import Cards from "./Cards";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Skills from "./Skills";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <div className="h-screen  w-full ">
        <div className="relative">
          <img src={background} alt="" className="w-full mx-auto h-screen" />
          <section className="flex relative bottom-40 mx-auto h-80 pb-8">
            <div className="container mx-auto">
              <div className="mx-40 flex flex-row">
                <div className=" w-1/2 md-5 d-flex justify-center text-center h-76">
                  <div className=" bg-orange-600 text-center">
                    <div className="text justify-center font-serif ">
                      <h1 className="text-6xl font-bold font-serif text-black justify-center  text-center p-5">
                        SERVE
                      </h1>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo unt in culpa qui officia deserunt mollit anim id
                        est laborum.
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" w-1/2 md-5 d-flex justify-center text-center h-76">
                  <div className=" bg-orange-500 text-center">
                    <div className="text justify-center font-sans ">
                      <h1 className="text-6xl font-bold font-serif text-black justify-center  text-center p-5">
                        SHARE
                      </h1>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo unt in culpa qui officia deserunt mollit anim id
                        est laborum.
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
      {/* <Cards /> */}
      <Gallery />
    </div>
  );
};

export default Home;
