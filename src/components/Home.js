import React from "react";
import TypeWriter from "typewriter-effect";

function Home() {
  return (
    <div className="box-border mx-auto p-8 ">
      <div className="text-3xl sm:text-8xl font-mono bg-black bg-radius flex space-x-4 p-2">
        <TypeWriter
          onInit={(typewriter) => {
            typewriter.typeString("Hello, I'm Xavier").pauseFor(5000).start();
          }}
          options={{ autoStart: true, loop: true }}
        />
      </div>
    </div>
  );
}

export default Home;
