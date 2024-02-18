import React from "react";

const Cards = () => {
  return (
    <div className=" w-full h-screen flex text-white">
      <div className="flex flex-wrap justify-center h-6 mx-6">
        {/* Card 1 */}
        <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Content Writing Volunteer
            </div>
            <p className="text-gray-700 text-base">
              Content of Card 1 goes here.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Fundraiser Volunteer</div>
            <p className="text-gray-700 text-base">
              Content of Card 2 goes here.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-4">
            <div className="font-bold text-xl mb-2">Social Media Volunteer</div>
            <p className="text-gray-700 text-base">
              Content of Card 3 goes here.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Computer teaching Volunteer
            </div>
            <p className="text-gray-700 text-base">
              Content of Card 4 goes here.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Psychology Volunteer</div>
            <p className="text-gray-700 text-base">
              Content of Card 5 goes here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
