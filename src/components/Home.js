import React from "react";
import TypeWriter from "typewriter-effect";

function Home() {
  return (
    <div className="box-border mx-auto p-8 flex justify-items-center justify-center content-center">
      <div className="text-2xl sm:text-9xl font-header bg-radius space-x-4 p-2 min-h-1/2 min-w-1">
        <TypeWriter
          onInit={(typewriter) => {
            typewriter.typeString("Hello, I'm Xavier").pauseFor(5000).start();
          }}
          options={{ autoStart: true }}
        />
      </div>
    </div>
  );
}

export default Home;
