import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import python from "../assets/python.png";
import golang from "../assets/golang.png";
import cassandra from "../assets/cassandra.png";
import elk from "../assets/elk.png";
import grafana from "../assets/grafana.png";
import spark from "../assets/spark.png";

const Skills = () => {
  const images = [
    {
      id: 0,
      src: python,
      text: "PYTHON",
      style: "shadow-blue-500",
    },
    {
      id: 1,
      src: html,
      text: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      text: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: reactImage,
      text: "REACT",
      style: "shadow-cyan-400",
    },
    {
      id: 4,
      src: tailwind,
      text: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: javascript,
      text: "JAVASCRIPT",
      style: "shadow-yellow-300",
    },
    {
      id: 6,
      src: cassandra,
      text: "CASSANDRA",
      style: "shadow-white",
    },
    {
      id: 7,
      src: golang,
      text: "GOLANG",
      style: "shadow-white",
    },
    {
      id: 8,
      src: elk,
      text: "ELK",
      style: "shadow-white",
    },
    {
      id: 9,
      src: grafana,
      text: "GRAFANA",
      style: "shadow-white",
    },
    {
      id: 10,
      src: spark,
      text: "SPARK",
      style: "shadow-white",
    },
    {
      id: 11,
      src: github,
      text: "GITHUB",
      style: "shadow-white",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full h-full text-white ">
        <div className="flex justify-center mb-4 text-xl font-medium text-cyan-300 md:text-2xl md:mb-8 border-y-2 md:border-y-0 border-cyan-100">
          <div className="md:border-b-2 border-cyan-100">SKILLS</div>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0 mb-10 md:mb-28">
          {images.map(({ id, src, text, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}
            >
              <img src={src} alt="" className="w-20 h-20 mx-auto" />
              <p className="mt-4 capitalize">{text} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
