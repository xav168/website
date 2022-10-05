import React from "react";
import { C } from "../Images/TechStackIcon/C";
import { Firebase } from "../Images/TechStackIcon/Firebase";
import { Git } from "../Images/TechStackIcon/Git";
import { Java } from "../Images/TechStackIcon/Java";
import { JavaFX } from "../Images/TechStackIcon/JavaFX";
import { JavaScript } from "../Images/TechStackIcon/JavaScript";
import { MySQL } from "../Images/TechStackIcon/MySQL";
import { Pandas } from "../Images/TechStackIcon/Pandas";
import { Python } from "../Images/TechStackIcon/Python";
import { ReactIcon } from "../Images/TechStackIcon/ReactIcon";
import { SQLAlchemy } from "../Images/TechStackIcon/SQLAlchemy";
import { Tailwind } from "../Images/TechStackIcon/Tailwind";
import { TypeScript } from "../Images/TechStackIcon/TypeScript";
export default function Skills() {
  return (
    <section id="skills">
      <div className="flex p-4 items-center justify-center min-h-[60vh] sm:min-h-screen">
        <div>
          <div className="sticky top-0 bg-orange-100 flex flex-row items-center justify-center dark:bg-gray-900 w-screen sm:h-32 h-16 ">
            <div className="font-header p-5 text-5xl sm:text-8xl">
              My Skills
            </div>
          </div>
          <div className="font-header my-10 p-5 text-2xl sm:text-3xl px-10">
            Skills that I have worked with
            <div className="flex space-x-4">
              <div>
                <Git></Git>
              </div>
              <div>
                <ReactIcon></ReactIcon>
              </div>
              <div>
                <Python></Python>
              </div>
              <div>
                <Java></Java>
              </div>
              <div>
                <Firebase></Firebase>
              </div>
              <div>
                <JavaScript></JavaScript>
              </div>
              <div>
                <Pandas></Pandas>
              </div>
              <div>
                <SQLAlchemy></SQLAlchemy>
              </div>
              <div>
                <MySQL></MySQL>
              </div>
              <div>
                <Tailwind></Tailwind>
              </div>
            </div>
          </div>
          <div className="font-header p-5 text-2xl sm:text-3xl px-10">
            Skills that I have played with
            <div className="flex flex-row space-x-4">
              <div>
                <JavaFX></JavaFX>
              </div>
              <div>
                <TypeScript></TypeScript>
              </div>
              <div>
                <C></C>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
