import bwbot from "../Images/ProjectImages/Booking_Bot.png";
import yiqichi from "../Images/ProjectImages/5311.png";

export const projects = [
  {
    name: "YiQiChi",
    projType: "Cross-platform Mobile Application",
    imgsrc: yiqichi,
    projlink:
      "https://docs.google.com/document/d/1KNDXbyY2w_YTDxWszvzhPsJTUENZYYrB8ON3EaTpCnA/edit?usp=sharing",
    desc: [
      "YiQiChi is a cross-platform mobile application to let foodies share, review and locate restaurants all over Singapore.",
      "Utilised Feature branch workflow to manage workflow",
      "Backend constructed using Firebase",
      "Frontend constructed using React Native and CSS",
    ],
    skills: "",
  },
  {
    name: "BookingBot",
    projType: "Telegram Bot",
    imgsrc: bwbot,
    projlink: "https://github.com/xav168/bwbot",
    desc: [
      "BookingBot allows users to book gym slots using a telegram bot instead of having to navigate to different gym websites",
      "Utilised Feature branch workflow to manage workflow",
      "Backend developed using Selenium for web automation and MySQL for database management",
      "Frontend developed using Python and telebotAPI",
    ],
    skills: "",
  },
  {
    name: "NutriGoals",
    projType: "Desktop Application",
    imgsrc: null,
    projlink: "https://github.com/AY2223S1-CS2103T-T17-2/tp",
    desc: [
      "NutriGoals is a desktop application to track user's diet and calorie consumption.",
      "Collaborated with a team of 4 other developers",
      "Backend built using Java as well as JSON to store data locally",
      "Frontend designed using JavaFX",
    ],
    skills: "",
  },
];
