import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";

function Contact() {
  return (
    <section id="contact">
      <div className="p-8  grid place-items-center">
        <div className="text-2xl font-mono font-bold"> Contact Me </div>

        <div>+6584480168</div>
        <div>xavier.ong@u.nus.edu</div>
        <div className="py-2">
          <a
            href={require("../Items/Xavier_Resume_Oct22.pdf")}
            download={"Xavier_Resume.pdf"}
            className="bg-orange-200 hover:bg-orange-300 dark:bg-gray-300 dark:hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center rounded-full"
          >
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            Download Resume
          </a>
        </div>
        <div className="flex flex-row space-x-3">
          <div>
            <IconButton href="https://github.com/xav168">
              <GitHubIcon className="dark:fill-gray-400" />
            </IconButton>
          </div>
          <div>
            <IconButton href="https://www.linkedin.com/in/xav168/">
              <LinkedInIcon className="dark:fill-gray-400" />
            </IconButton>
          </div>
          <div>
            <IconButton href="https://www.instagram.com/xaaavv/">
              <InstagramIcon className="dark:fill-gray-400" />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
