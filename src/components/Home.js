import React from "react";
import TypeWriter from "typewriter-effect";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="min-h-screen w-screen transition ease-linear duration-300">
      <Navbar />
      <div className="box-border mx-auto p-8 flex justify-items-center justify-center content-center h-[70vh] sm:h-[80vh]">
        <div className="text-5xl sm:text-9xl font-header bg-radius space-x-4 p-2 place-self-center">
          <div className="">
            <TypeWriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello, I'm Xavier.")
                  .pauseFor(5000)
                  .start();
              }}
              options={{ autoStart: true }}
            />
          </div>
        </div>
      </div>
      <div className="px-8 sm:mb-10 flex flex-col sm:flex-row items-end justify-end text-xl sm:text-2xl font-header mr-5">
        <div className=" sm:px-10 pb-5">
          <a
            href="https://github.com/xav168"
            className="transition ease-in duration-300 hover:border-b-4 hover:border-black dark:hover:border-white"
          >
            github.
          </a>
        </div>
        <div className=" sm:px-10 pb-5">
          <a
            href="https://www.linkedin.com/in/xav168/"
            className="transition ease-in duration-300 hover:border-b-4 hover:border-black dark:hover:border-white"
          >
            linkedin.
          </a>
        </div>
        <div className=" sm:px-10 pb-5">
          <a
            href={require("../Items/Xavier_Resume.pdf")}
            download={"Xavier_Resume.pdf"}
            className="transition ease-in duration-300 hover:border-b-4 hover:border-black dark:hover:border-white"
          >
            resume.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
