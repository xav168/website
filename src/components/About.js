import React from "react";
import face from "../Images/IMG_4543.PNG";
import Home from "./Home";

function About() {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center sm:p-20">
        <h1 className="text-2xl sm:text-5xl font-header font-bold">About Me</h1>
        <div className="sm:flex sm:p-5 sm:py-10">
          <div className="hidden sm:block sm:scale-100 shrink-0 sm:h-60 sm:w-60 md:h-96 md:w-96 rounded-lg">
            <img src={face} />
          </div>
          <div className="text-med p-8">
            <p className="mt-2 sm:text-l md:text-3xl">
              Hi, I'm Xavier, A Y2 Student studing Computer Science in the
              National University of Singapore. I enjoy solving programming
              problems and finding innovative ways to solve existing solutions.
            </p>
            <p className="py-3 mt-2 sm:text-l md:text-3xl">
              In my free time, I enjoy bouldering as a hobby. I love the
              outdoors and the scenic view of nature especially those of
              mountains and lakes!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
