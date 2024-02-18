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
    <div mx-10>
      <Navbar />
      <div className="grid grid-cols-4 gap-2 h-screen w-full mx-10 pt-24 justify-center text-center">
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

    //  {/* <div className="cards  w-full h-screen flex flex-col text-white mx-10 pt-24"> */}
    //   <div className="cards w-full grid grid-cols-3 gap-4 sm:grid-cols-6 text-center py-8 px-12 sm:px-0 mb-10 md:mb-28">
    //     <div
    //       className="flex flex-wrap justify-center h-6 mx-6"
    //       style={{ height: 250 }}
    //     >
    //       {/* Card 1 */}
    //       <div
    //         onClick={handleClick}
    //         className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden"
    //       >
    //         <div className="px-6 py-4  bg-taupe">
    //           <div className="font-bold text-xl mb-2 text-black">
    //             <h1>Content Writing Volunteer</h1>
    //           </div>
    //         </div>
    //         <div className="text-xl mb-2 text-black">
    //           <p className="text-gray-700 text-base">
    //             Content of Card 1 goes here.
    //           </p>
    //         </div>
    //       </div>

    //       {/* Card 2 */}
    //       <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
    //         <div className="px-6 py-4 bg-taupe">
    //           <div className="font-bold text-xl mb-2 text-black">
    //             Fundraiser Volunteer
    //           </div>
    //         </div>
    //         <div className="text-xl mb-2 text-black">
    //           <p className="text-gray-700 text-base">
    //             Content of Card 2 goes here.
    //           </p>
    //         </div>
    //       </div>

    //       {/* Card 3 */}
    //       <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden ">
    //         <div className="px-6 py-4 bg-taupe">
    //           <div className="font-bold text-xl mb-2 text-black">
    //             Social Media Volunteer
    //           </div>
    //         </div>
    //         <div className="text-xl mb-2 text-black">
    //           <p className="text-gray-700 text-base ">
    //             Content of Card 3 goes here.
    //           </p>
    //         </div>
    //       </div>

    //       {/* Card 4 */}
    //       <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
    //         <div className="px-6 py-4 bg-taupe">
    //           <div className="font-bold text-xl mb-2 text-black">
    //             Computer teaching Volunteer
    //           </div>
    //         </div>
    //         <div className="text-xl mb-2 text-black">
    //           <p className="text-gray-700 text-base">
    //             Content of Card 4 goes here.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
  );
};

export default Cards;
