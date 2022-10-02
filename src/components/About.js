import React from "react";
import face from "../Images/IMG_0067.JPG";

function About() {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center sm:p-20">
        <h1 className="text-2xl sm:text-5xl font-mono font-bold">About Me</h1>
        <div className="sm:flex grid justify-items-center grid-cols-1 p-5 py-10">
          <div className="shrink-0 sm:rounded-full sm:h-72 sm:w-72 h-2/3 w-2/3 rounded-lg">
            <img src={face} />
          </div>
          <div className="text-med p-8">
            <p className="mt-2 text-slate-500 sm:text-xl">
              Hi, I'm Xavier, A Y2 Student studing Computer Science in the
              National University of Singapore. I enjoy solving programming
              problems and finding innovative ways to solve existing solutions.
            </p>
            <p className="mt-2 text-slate-500 sm:text-xl">
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
