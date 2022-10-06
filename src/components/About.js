import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about">
      <div className="py-10 flex items-center justify-center min-h-[110vh] bg-orange-50 dark:bg-gray-800">
        <div className="place-self-center flex flex-col items-center">
          <div className="sticky top-0 bg-orange-50 dark:bg-gray-800 flex flex-row items-center justify-center dark:bg-gray-900 sm:h-32 h-16 ">
            <h1 className="text-3xl py-10 sm:text-8xl font-header font-bold ">
              About.
            </h1>
          </div>

          <div className="sm:flex sm:p-5 sm:py-10">
            <div className="text-med p-8">
              <p className="py-3 mt-2 text-l sm:text-3xl">
                Hi, I'm Xavier, A Y2 Student studing Computer Science in the
                National University of Singapore. I enjoy solving programming
                problems and finding innovative ways to solve existing
                solutions.
              </p>
              <p className="py-3 mt-2 text-l sm:text-3xl">
                In my free time, I enjoy bouldering as a hobby. I love the
                outdoors and the scenic view of nature especially those of
                mountains and lakes!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
