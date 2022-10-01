import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import bwbot from '../Images/ProjectImages/IMG_4498.PNG'
import yiqichi from '../Images/ProjectImages/5311.png'

function Projects() {
    return (
        <section id="projects" className="divide-y divide-solid">
            <div className="p-8">
                <h1 className='text-2xl font-mono underline'>My Projects</h1>
                <div class="swiper-button-prev"></div>
                <div className="p-5">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        effect={"slide"}
                        loop={true}
                        centeredSlides={true}
                        navigation={true}>
                            
                            <SwiperSlide>
                                <div className="sm:flex">
                                    <div>
                                        <img src={bwbot} className="sm:h-72 sm:w-40 p-3"></img>
                                    </div>
                                    <div>
                                        <h1>BookingBot</h1>
                                        <p>
                                            Your one app for all your gym slot booking needs.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sm:flex">
                                    <div className="p-2">
                                        <img src={yiqichi} className="sm:h-72 sm:w-40 p-3"></img>
                                    </div>
                                    <div>
                                        <h1>
                                            YiQiChi
                                        </h1>
                                        <p>
                                            A do it all app for foodies!
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div class="swiper-button-next"></div>

                    </div>
                </div>
        </section>
    )
}

export default Projects