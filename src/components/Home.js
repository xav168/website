import React from "react";
import TypeWriter from 'typewriter-effect'


function Home() {
    return (
        <div className="box-border mx-auto p-8 ">
            <div className= "text-6xl sm:text-8xl font-mono bg-black bg-radius flex space-x-4 min-h-screen">
                <TypeWriter 
                    onInit={(typewriter) => {
                        typewriter.typeString("Hello, I'm Xavier")
                        .pauseFor(2000)
                        .start()
                    }}
                    options={{autoStart: true}}
                />
            </div>
        </div>
    )
}

export default Home