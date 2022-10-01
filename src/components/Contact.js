import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
    return (
        <section id="contact">
            <div className="p-8">
                <div className='text-2xl font-mono underline'> Contact Me </div>
                <div>
                    <a href={require("../Items/Xavier_Resume_Oct22.pdf")} download={"Xavier_Resume.pdf"}> View my Resume</a>
                </div>
                <div>
                    +6584480168
                </div>
                <div>
                    xavier.ong@u.nus.edu
                </div>
                <div className="flex flex-row space-x-3">
                    <div>
                        <GitHubIcon/>
                    </div>
                    <div>
                        <LinkedInIcon/>
                    </div>
                    <div>
                        <InstagramIcon/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact