import React from "react";
import { Autoplay, EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import bwbot from "../Images/ProjectImages/Booking_Bot.png";
import yiqichi from "../Images/ProjectImages/5311.png";

function Projects() {
  return (
    <section id="projects" className="divide-y divide-solid">
      <div className=" flex flex-col items-center justify-center min-h-screen">
        <h1 className=" text-2xl sm:text-5xl font-header font-bold">
          My Projects
        </h1>
        <div className="container p-5 sm:h-2/3 sm:w-2/3">
          <Swiper
            modules={[Autoplay, EffectCards]}
            slidesPerView={1}
            effect={"slide"}
            autoplay={true}
            loop={true}
            breakpointsBase={"container"}
          >
            <SwiperSlide>
              <div className="sm:flex rounded-lg">
                <div className="md:h-96 md:w-96 sm:h-72 sm:w-72 p-5 shrink-0">
                  <img src={bwbot} className="px-3"></img>
                </div>
                <div className="p-2">
                  <h1 className="text-3xl font-header">BookingBot</h1>
                  <p className="py-3 text-l">
                    Your one app for all your gym slot booking needs.
                  </p>
                  <p className="py-3 text-l">
                    A telegram bot that has can help to automate booking
                    processes. Built with python, selenium, telebot-API, and
                    mysql
                  </p>
                  <div className="py-10">
                    <a
                      href="https://github.com/xav168/bwbot"
                      className="bg-orange-200 text-gray-900 hover:bg-orange-300 font-bold py-2 px-4 rounded-full dark:bg-gray-300 dark:hover:bg-gray-400"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sm:flex rounded-lg">
                <div className="md:h-96 md:w-96 sm:h-72 sm:w-72 p-5 shrink-0">
                  <img src={yiqichi} className="px-3"></img>
                </div>
                <div className="p-2">
                  <h1 className="text-3xl font-header">YiQiChi</h1>
                  <p className="py-3 text-l">A do it all app for foodies!</p>
                  <p className="py-3 text-l">
                    A cross platform mobile application built using react native
                    and firebase Features the ability to upload images, view
                    other's posts and more!
                  </p>
                  <div className="py-10">
                    <a
                      href="https://docs.google.com/document/d/1KNDXbyY2w_YTDxWszvzhPsJTUENZYYrB8ON3EaTpCnA/edit?usp=sharing"
                      className="bg-orange-200 hover:bg-orange-300 text-gray-900 font-bold py-2 px-4 rounded-full dark:bg-gray-300 dark:hover:bg-gray-400"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Projects;
