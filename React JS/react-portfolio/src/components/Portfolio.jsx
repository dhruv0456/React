import React from "react";
import api from "../assets/portfolio/api.jpg";
import eventhandler from "../assets/portfolio/event.jpg";
import taskmanager from "../assets/portfolio/Taskmanager.jpg";
import taskmanager1 from "../assets/portfolio/task.jpg";
import formvalidation from "../assets/portfolio/validation.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: api,
      repo: "https://github.com/dhruv0456/React/tree/main/React%20JS/Api%20Project/Api%20Project",
    },
    {
      id: 2,
      src: eventhandler,
      repo: "https://github.com/dhruv0456/React/tree/main/React%20JS/Event%20Handler",
    },
    {
      id: 3,
      src: taskmanager,
      repo: "https://github.com/dhruv0456/React/tree/main/React%20JS/Task%20Manager",
    },
    {
      id: 4,
      src: taskmanager1,
      repo: "https://github.com/dhruv0456/React/tree/main/React%20JS/TaskManager1",
    },
    {
      id: 5,
      src: formvalidation,
      repo: "https://github.com/dhruv0456/React/tree/main/React%20JS/Form%20Validation",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white md:h-screen portfolio py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
      
        <div className="pb-10 text-center">
          <p className="text-4xl font-extrabold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-gray-300">
            Check out some of my work right here
          </p>
        </div>

        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 sm:px-0">
          {portfolios.map(({ id, src, repo }) => (
            <div
              key={id}
              className="shadow-sm shadow-gray-700 rounded-xl overflow-hidden hover:scale-105 transform transition duration-300"
            >
              
              <img
                src={src}
                alt="project"
                className="rounded-t-xl w-full h-52 object-cover"
              />

              
              <div className="flex items-center justify-center bg-gray-800">
                <button
                  className="w-full px-6 py-3 text-sm font-semibold text-white bg-gray-600 hover:bg-gray-700 m-2 rounded-lg transition duration-300"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
