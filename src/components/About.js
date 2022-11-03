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
              <p className="py-3 mt-2 text-l sm:text-4xl">
                Hi, I'm Xavier, I am currently studying Computer Science in the
                National University of Singapore. I am actively looking for
                Software Engineering Internship opportunities near the bay area
                specifically in startups. As a developer, I enjoy working more
                on the backend, but I am open to learning about different areas
                and exposing myself to all the different frameworks and
                technologies out there. I built this website while trying to
                learn React.JS and Tailwind CSS, and this was the outcome.
              </p>
              <p className="py-3 mt-2 text-l sm:text-4xl">
                In my free time, I enjoy bouldering as a hobby. I am actively
                competing in local competitions in Singapore, representing my
                University. I enjoy bouldering because of problem solving nature
                of it. Each time I fall from a boulder problem, I think about
                where I went wrong and how I can improve and do better on my
                next attempt. I find it quite similar to programming in the
                sense that we are often faced with new challenges in
                programming, and we have to think about how to approach the
                problem differently each time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
