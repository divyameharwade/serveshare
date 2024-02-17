import React from "react";

import { ReactComponent as WorkIcon } from "../assets/experience/work.svg";
import { ReactComponent as SchoolIcon } from "../assets/experience/school.svg";
import TimelineElements from "./TimelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

const Experience = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div
      name="experience"
      className="w-full mx-auto bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <div className="flex justify-center mb-4 text-xl font-medium text-cyan-300 md:text-2xl md:mb-8 border-y-2 md:border-y-0 border-cyan-100">
            <div className="md:border-b-2 border-cyan-100">EXPERIENCE</div>
          </div>
          <div className="mx-auto mb-20 text-black md:mb-28">
            <VerticalTimeline>
              {TimelineElements.map((element) => {
                let isWorkIcon = element.icon === "work";
                let showButton =
                  element.buttonText !== undefined &&
                  element.buttonText !== "" &&
                  element.buttonText !== null;
                return (
                  <VerticalTimelineElement
                    key={element.key}
                    date={element.date}
                    dateclassName="date"
                    iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                    icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                  >
                    <h3 className="vertical-timeline-element-title font-bold">
                      {element.title}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle text-sm ">
                      {element.location}
                    </h5>
                    <p id="description">{element.description}</p>
                    {showButton && (
                      <a
                        className={
                          'button ${IsWorkIcon ? "workButton" : "schoolButton" '
                        }
                        href="/"
                      >
                        {element.buttonText}
                      </a>
                    )}
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
