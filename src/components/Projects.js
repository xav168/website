import React from "react";
import { Autoplay, EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-10">
      <div className=" flex flex-col items-center justify-center min-h-screen">
        <div className="sticky top-0 bg-orange-100 flex flex-row items-center justify-center dark:bg-gray-900 w-screen sm:h-32 h-16 ">
          <h1 className=" text-3xl sm:text-8xl font-header font-bold ">
            Projects.
          </h1>
        </div>

        <div className="sm:mt-40">
          {projects.map((project) => {
            return (
              <div className="mx-5 sm:mx-32 sm:py-32 py-20">
                <div className="border-2 border-gray-500 max-width-xl dark:border-orange-100">
                  <div className="sm:flex border border-r-8 border-b-8 border-gray-800 dark:border-orange-200">
                    <div
                      className={
                        project.imgsrc == null
                          ? "hidden"
                          : "hidden sm:block p-5"
                      }
                    >
                      <img
                        src={project.imgsrc}
                        className="px-3 object-scale-down sm:h-96 sm:w-96"
                      ></img>
                    </div>
                    <div className="p-2 flex flex-col relativce">
                      <h1 className="text-xl sm:text-4xl font-header">
                        {project.name}
                      </h1>
                      <ul>
                        {project.desc.map((item) => {
                          return (
                            <li className="text-sm sm:text-xl my-7">{item}</li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="mx-2 py-10 sm:px-10 place-self-end shrink-0">
                      <a
                        href={project.projlink}
                        className="text-sm bg-orange-200 hover:bg-orange-300 text-gray-900 font-bold py-2 sm:px-4 rounded-full dark:bg-gray-300 dark:hover:bg-gray-400 place-self-end"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
