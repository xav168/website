import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import React from "react";
import { Autoplay, EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import flaskIcon from "../Images/TechStackIcon/flask_icon_132389.png";
import javaIcon from "../Images/TechStackIcon/java_icon_130901.png";
import mysqlIcon from "../Images/TechStackIcon/mysql_original_wordmark_logo_icon_146417.png";
import jsIcon from "../Images/TechStackIcon/javascript_icon_130900.png";
import pythonIcon from "../Images/TechStackIcon/python_18894.png";
import reactIcon from "../Images/TechStackIcon/react_original_logo_icon_146374.png";
import gitIcon from "../Images/TechStackIcon/file_type_git_icon_130581.png";
import "swiper/css";
import "swiper/css/effect-cards";
import { TimelineOppositeContent } from "@mui/lab";
import { experience } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="p-8">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="sticky top-0 bg-orange-100 flex flex-row items-center justify-center dark:bg-gray-900 w-screen sm:h-32 h-16">
          <h1 className="sm:text-8xl text-5xl font-header font-bold">
            Experience.
          </h1>
        </div>

        <div className="py-3 flex flex-col">
          {experience.map((item) => {
            return (
              <div className="sm:mx-32 py-7 pb-20">
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
