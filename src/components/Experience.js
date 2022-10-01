import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import React from "react";
import flaskIcon from "../Images/TechStackIcon/flask_icon_132389.png";
import javaIcon from "../Images/TechStackIcon/java_icon_130901.png";
import mysqlIcon from "../Images/TechStackIcon/mysql_original_wordmark_logo_icon_146417.png";
import jsIcon from "../Images/TechStackIcon/javascript_icon_130900.png";
import pythonIcon from "../Images/TechStackIcon/python_18894.png";
import reactIcon from "../Images/TechStackIcon/react_original_logo_icon_146374.png";
import gitIcon from "../Images/TechStackIcon/file_type_git_icon_130581.png";

import { TimelineOppositeContent } from '@mui/lab';

function Experience() {
    return (
        <section id="experience" className="p-8">
            <h1 className='text-2xl font-mono underline'>My Experience</h1>
            <div>
                <Timeline>
                    <TimelineItem>
                        <TimelineOppositeContent>Aug 2022 - Dec 2022 </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <h1 className='text-l'>
                            Teaching Assistant at National University of Singapore
                        </h1>
                        <p>
                            CS2040: Data Structures and Algorithms
                        </p>
                        <p>
                            CS1101S: Programming Methodology I
                        </p>
                        
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>May 2022 - Aug 2022</TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p> Software Developer Intern at Aktus M.U.</p>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>Aug 2021 - May 2025</TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p> Entered National University of Singapore's Computer Science programme</p>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>January 2017 - Decemner 2018</TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p> Entered Victoria Junior College</p>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
            <div className='text-xl'>
                Tech Stack
            </div>
            <div className='flex flex-row-7'>
                <div>
                    <img src={javaIcon} className="rounded-s h-32 w-32 object-scale-down px-5"/>
                </div>
                <div>
                    <img src={jsIcon} className="rounded-s h-32 w-32 object-scale-down px-5"/>
                </div>
                <div>
                    <img src={pythonIcon} className="rounded-s h-32 w-32 object-scale-down px-5"/>
                </div>
                <div>
                    <img src={flaskIcon} className="rounded-s h-32 w-32 object-scale-down px-5"/>
                </div>
                <div>
                    <img src={mysqlIcon} className="rounded-s h-32 w-32 object-scale-down px-5"/>
                </div>
                <div>
                    <img src={reactIcon} className="rounded-s h-32 w-32 object-scale-down px-5"/>
                </div>
                <div>
                    <img src={gitIcon} className="rounded-s h-32 w-32 object-scale-down px-5"/>
                </div>
            </div>
        </section>
    )
}

export default Experience