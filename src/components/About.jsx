import React from "react";

const About = () => {
  return (
    // <div className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500"></p>
        </div>
        <div className="text-md mt-10 mb-20 space-y-5 md:mb-28">
          <div className="flex justify-center text-2xl text-cyan-300 font-bold md:text-4xl">
            Welcome to my digital space!
          </div>
          <div>
            With a profound journey spanning 9 years in software development and
            a current pursuit of a Master's in Computer Science at Santa Clara
            University{" "}
            <strong className="text-yellow-200">
              {" "}
              (expected graduation in June 2025),{" "}
            </strong>
            I am deeply passionate about designing and developing innovative
            software solutions.
          </div>
          <div>
            My professional journey includes pivotal roles in the development
            teams at Akamai Technologies (7.5 years) and Oracle (1.5 years).
          </div>
          <div>
            Proficient in both frontend
            <strong className="text-green-400">
              {" "}
              (utilizing technologies such as jQuery and React){" "}
            </strong>
            and backend{" "}
            <strong className=" text-sky-500">
              {" "}
              (with expertise in Python and Golang){" "}
            </strong>
            development, I have championed the creation of scalable RESTful web
            applications and implemented sophisticated telemetry analytics using
            the ELK stack and Grafana.
          </div>
          <div>
            My leadership extends beyond coding, involving mentorship programs,
            project guidance, and a commitment to fostering collaborative
            learning environments.
          </div>

          <div>
            At the core of my journey is a commitment to continuous learning and
            growth.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
