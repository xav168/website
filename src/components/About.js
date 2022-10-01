import React from "react"
import face from "../Images/IMG_0067.JPG"

 function About() {
    return (
        <section id="about">
            <div className=" p-8">
                <h1 className="text-3xl font-mono underline">About Me</h1>
                <div className="sm:flex">
                    <div className="shrink-0 ">
                        <img src={face} className="sm:rounded-full sm:h-72 sm:w-72 p-8"/>
                    </div>
                    <div className="text-med p-8">
                        <p className="mt-2 text-slate-500">
                            Hi, I'm Xavier, A Y2 Student studing Computer Science in 
                            the National University of Singapore. I enjoy solving programming
                            problems and finding innovative ways to solve existing solutions
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
        
    )
}

export default About