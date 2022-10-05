import React from "react";

import { experience } from "../data/experience";

function Experience() {
  return (
    <section id="experience">
      <div className="flex flex-col items-center justify-center min-h-screen py-20">
        <div className="sticky top-0 bg-orange-100 flex flex-row items-center justify-center dark:bg-gray-900 w-screen sm:h-32 h-16">
          <h1 className="sm:text-8xl text-5xl font-header font-bold">
            Experience.
          </h1>
        </div>

        <div className="py-3 flex flex-col">
          {experience.map((item) => {
            return (
              <div className="mx-5 sm:mx-32 sm:pb-32 pb-20 bg-orange-100 dark:bg-gray-900 sm:min-w-[40rem]">
                <div className="border-2 border-orange-200 max-width-xl dark:border-orange-100">
                  <div className="sm:flex flex-col border border-r-8 border-b-8 border-orange-300 dark:border-gray-200 p-10">
                    <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-xl">
                      {item.startDate} - {item.endDate}
                    </div>
                    <div py-2>
                      <p className="text-md sm:text-3xl">
                        <span className="font-header font-bold">
                          {item.role}{" "}
                        </span>{" "}
                        <span className="px-5">@{item.company}</span>
                      </p>
                      <ul className="list-disc text-sm p-5 sm:text-2xl">
                        {item.points.map((point) => {
                          return <li>{point}</li>;
                        })}
                      </ul>
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

export default Experience;
