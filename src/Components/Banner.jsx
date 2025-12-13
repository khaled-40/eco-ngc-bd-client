import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image1 from "../assets/fer-troulik-rK9ue4liv54-unsplash.jpg";
import image2 from "../assets/mark-konig-WIxAt-XyXO0-unsplash.jpg";
import image3 from "../assets/nico-knaack-1zoaTkEVaZ4-unsplash.jpg";
import { Slide } from "react-awesome-reveal";

const Banner = () => {
    return (
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[550px] my-4 rounded-xl overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                className="w-full h-full"
            >
                {/* === SLIDE 1 === */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src={image1}
                            className="w-full h-full object-cover"
                            alt="Garbage Pollution"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-4 text-center">
                            <Slide direction="down" triggerOnce>
                                <h2 className="text-white text-xl sm:text-3xl lg:text-4xl font-bold drop-shadow-md">
                                    Garbage Pollution
                                </h2>
                                <p className="text-white text-sm sm:text-lg mt-2 max-w-[90%]">
                                    Let’s clean our community—one step at a time.
                                </p>
                            </Slide>
                        </div>
                    </div>
                </SwiperSlide>

                {/* === SLIDE 2 === */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src={image3}
                            className="w-full h-full object-cover"
                            alt="Community Cleaning"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-4 text-center">
                            <Slide direction="up" triggerOnce>
                                <h2 className="text-white text-xl sm:text-3xl lg:text-4xl font-bold drop-shadow-md">
                                    Community Cleaning
                                </h2>
                                <p className="text-white text-sm sm:text-lg mt-2 max-w-[90%]">
                                    A cleaner environment starts with us.
                                </p>
                            </Slide>

                        </div>
                    </div>
                </SwiperSlide>

                {/* === SLIDE 3 === */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src={image2}
                            className="w-full h-full object-cover"
                            alt="Sustainable Action"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-4 text-center">
                            <Slide direction="down" triggerOnce>
                                <h2 className="text-white text-xl sm:text-3xl lg:text-4xl font-bold drop-shadow-md">
                                    Sustainable Future
                                </h2>
                                <p className="text-white text-sm sm:text-lg mt-2 max-w-[90%]">
                                    Small actions today, a greener world tomorrow.
                                </p>
                            </Slide>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
