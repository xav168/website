import React from "react";
import TypeWriter from "typewriter-effect";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="min-h-screen w-screen">
      <Navbar />
      <div className="box-border mx-auto p-8 flex justify-items-center justify-center content-center h-[60vh] sm:h-[90vh]">
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
      <div className="flex flex-col sm:flex-row items-end justify-end mb-20 text-xl sm:text-2xl font-header mr-5">
        <div className="sm:px-10 hover:underline">
          <a href="https://github.com/xav168">github.</a>
        </div>
        <div className="sm:px-10 hover:underline">
          <a href="https://www.linkedin.com/in/xav168/">linkedin.</a>
        </div>
        <div className="sm:px-10 hover:underline">
          <a
            href={require("../Items/Xavier_Resume_Oct22.pdf")}
            download={"Xavier_Resume.pdf"}
          >
            resume.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
