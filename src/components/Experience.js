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

function Experience() {
  return (
    <section id="experience" className="p-8">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="sm:text-5xl text-2xl font-mono font-bold">
          My Experience
        </h1>
        <div className="py-3">
          <Timeline>
            <TimelineItem>
              <TimelineOppositeContent>
                Aug 2022 - Dec 2022{" "}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h1 className="sm:text-xl font-bold">
                  Teaching Assistant at National University of Singapore
                </h1>
                <p className="sm:text-l py-2">
                  CS2040: Data Structures and Algorithms
                </p>
                <p className="sm:text-l">CS1101S: Programming Methodology I</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                May 2022 - Aug 2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h1 className="sm:text-xl font-bold">
                  {" "}
                  Software Developer Intern at Aktus M.U.
                </h1>
                <p className="sm:text-l py-2">
                  Developed a machine learning model using TensorFlow and
                  ScikitLearn.
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                Aug 2021 - May 2025
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h1 className="sm:text-xl font-bold">
                  {" "}
                  Entered National University of Singapore's Computer Science
                  programme
                </h1>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                January 2017 - December 2018
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <h1 className="sm:text-xl font-bold">
                  {" "}
                  Entered Victoria Junior College
                </h1>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>

      <div className="flex-column items-center justify-center p-2">
        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            effect={"slide"}
            loop={true}
            autoplay={true}
            centered={true}
            breakpoints={{
              640: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <img
                src={javaIcon}
                className="rounded-s h-20 w-20 object-scale-down"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={jsIcon}
                className="rounded-s h-20 w-20 object-scale-down"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={pythonIcon}
                className="rounded-s h-20 w-20 object-scale-down"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={flaskIcon}
                className="rounded-s h-20 w-20 object-scale-down"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={mysqlIcon}
                className="rounded-s h-20 w-20 object-scale-down"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={reactIcon}
                className="rounded-s h-20 w-20 object-scale-down"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gitIcon}
                className="rounded-s h-20 w-20 object-scale-down"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Experience;
