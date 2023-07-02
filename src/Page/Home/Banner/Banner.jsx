import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css'

import img1 from '/img1.jpg'
import img2 from '/img2.jpg'
import img3 from '/img3.jpg'
import img4 from '/img4.jpg'
import img5 from '/img5.jpg'
import img6 from '/img6.jpg'
import img7 from '/img7.jpg'
import img8 from '/img8.jpg'
import img9 from '/img9.jpg'


import { Autoplay, Pagination, Navigation } from 'swiper';


const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    // To Do 

    // const onAutoplayTimeLeft = (s, time, progress) => {
    //     progressCircle.current.style.setProperty('--progress', 1 - progress);
    //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

                // ToDo
                // onAutoplayTimeLeft={onAutoplayTimeLeft}
                
                // modified
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide className='relative  w-full'>
                    <img className="rounded-xl" src={img9} alt="" />
                    <div className="absolute h-full flex rounded-xl md:p-0  py-16 items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

                        <div className="text-white md:space-y-7 md:w-2/3 w-full pl-12">

                            <h2 className="md:text-5xl text-xl md:mt-0  font-bold"> <br className='md:flex hidden' /><span className='text-cyan-600'><span className='text-white'>Join the</span>  Blitz Camp</span> <br />Summer Sports Adventure</h2>


                            <p className='font-medium md:text-sm text-xs text-gray-300'>Experience the ultimate summer sports adventure at Blitz Camp! Unleash your skills in soccer, basketball, volleyball, swimming, and more. With expert coaches, state-of-the-art facilities, and an unforgettable atmosphere, elevate your game and create lifelong memories. Join us for teamwork, competition, and personal growth. Sign up today</p>

                        </div>

                    </div>
                </SwiperSlide>


                <SwiperSlide className='relative  w-full'>
                    <img className='rounded-xl' src={img1} alt="" />
                    <div className="absolute h-full flex rounded-xl md:p-0  py-16 items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

                        <div className="text-white md:space-y-7 md:w-2/3 w-full pl-12">

                            <h2 className="md:text-5xl text-xl md:mt-0  font-bold"> <br className='md:flex hidden' /><span className='text-cyan-600'><span className='text-white'>Join the</span>  Blitz Camp</span> <br />Summer Sports Adventure</h2>


                            <p className='font-medium md:text-sm text-xs text-gray-300'>Experience the ultimate summer sports adventure at Blitz Camp! Unleash your skills in soccer, basketball, volleyball, swimming, and more. With expert coaches, state-of-the-art facilities, and an unforgettable atmosphere, elevate your game and create lifelong memories. Join us for teamwork, competition, and personal growth. Sign up today</p>


                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className='relative  w-full'>
                    <img className='rounded-xl' src={img2} alt="" />
                    <div className="absolute h-full flex rounded-xl md:p-0  py-16 items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

                        <div className="text-white md:space-y-7 md:w-2/3 w-full pl-12">

                            <h2 className="md:text-5xl text-xl md:mt-0  font-bold"> <br className='md:flex hidden' /><span className='text-cyan-600'><span className='text-white'>Join the</span>  Blitz Camp</span> <br />Summer Sports Adventure</h2>


                            <p className='font-medium md:text-sm text-xs text-gray-300'>Experience the ultimate summer sports adventure at Blitz Camp! Unleash your skills in soccer, basketball, volleyball, swimming, and more. With expert coaches, state-of-the-art facilities, and an unforgettable atmosphere, elevate your game and create lifelong memories. Join us for teamwork, competition, and personal growth. Sign up today</p>






                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className='relative  w-full'>
                    <img className='rounded-xl' src={img3} alt="" />
                    <div className="absolute h-full flex rounded-xl md:p-0  py-16 items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

                        <div className="text-white md:space-y-7 md:w-2/3 w-full pl-12">

                            <h2 className="md:text-5xl text-xl md:mt-0  font-bold"> <br className='md:flex hidden' /><span className='text-cyan-600'><span className='text-white'>Join the</span>  Blitz Camp</span> <br />Summer Sports Adventure</h2>


                            <p className='font-medium md:text-sm text-xs text-gray-300'>Experience the ultimate summer sports adventure at Blitz Camp! Unleash your skills in soccer, basketball, volleyball, swimming, and more. With expert coaches, state-of-the-art facilities, and an unforgettable atmosphere, elevate your game and create lifelong memories. Join us for teamwork, competition, and personal growth. Sign up today</p>






                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className='relative  w-full'>
                    <img className='rounded-xl' src={img4} alt="" />
                    <div className="absolute h-full flex rounded-xl md:p-0  py-16 items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

                        <div className="text-white md:space-y-7 md:w-2/3 w-full pl-12">

                            <h2 className="md:text-5xl text-xl md:mt-0  font-bold"> <br className='md:flex hidden' /><span className='text-cyan-600'><span className='text-white'>Join the</span>  Blitz Camp</span> <br />Summer Sports Adventure</h2>


                            <p className='font-medium md:text-sm text-xs text-gray-300'>Experience the ultimate summer sports adventure at Blitz Camp! Unleash your skills in soccer, basketball, volleyball, swimming, and more. With expert coaches, state-of-the-art facilities, and an unforgettable atmosphere, elevate your game and create lifelong memories. Join us for teamwork, competition, and personal growth. Sign up today</p>






                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className='relative  w-full'>
                    <img className='rounded-xl' src={img5} alt="" />
                    <div className="absolute h-full flex rounded-xl md:p-0  py-16 items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

                        <div className="text-white md:space-y-7 md:w-2/3 w-full pl-12">

                            <h2 className="md:text-5xl text-xl md:mt-0  font-bold"> <br className='md:flex hidden' /><span className='text-cyan-600'><span className='text-white'>Join the</span>  Blitz Camp</span> <br />Summer Sports Adventure</h2>


                            <p className='font-medium md:text-sm text-xs text-gray-300'>Experience the ultimate summer sports adventure at Blitz Camp! Unleash your skills in soccer, basketball, volleyball, swimming, and more. With expert coaches, state-of-the-art facilities, and an unforgettable atmosphere, elevate your game and create lifelong memories. Join us for teamwork, competition, and personal growth. Sign up today</p>






                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className='relative  w-full'>
                    <img className='rounded-xl' src={img6} alt="" />
                    <div className="absolute h-full flex rounded-xl md:p-0  py-16 items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

                        <div className="text-white md:space-y-7 md:w-2/3 w-full pl-12">

                            <h2 className="md:text-5xl text-xl md:mt-0  font-bold"> <br className='md:flex hidden' /><span className='text-cyan-600'><span className='text-white'>Join the</span>  Blitz Camp</span> <br />Summer Sports Adventure</h2>


                            <p className='font-medium md:text-sm text-xs text-gray-300'>Experience the ultimate summer sports adventure at Blitz Camp! Unleash your skills in soccer, basketball, volleyball, swimming, and more. With expert coaches, state-of-the-art facilities, and an unforgettable atmosphere, elevate your game and create lifelong memories. Join us for teamwork, competition, and personal growth. Sign up today</p>






                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className='relative  w-full'>
                    <img className='rounded-xl' src={img7} alt="" />
                    <div className="absolute h-full flex rounded-xl md:p-0  py-16 items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

                        <div className="text-white md:space-y-7 md:w-2/3 w-full pl-12">

                            <h2 className="md:text-5xl text-xl md:mt-0  font-bold"> <br className='md:flex hidden' /><span className='text-cyan-600'><span className='text-white'>Join the</span>  Blitz Camp</span> <br />Summer Sports Adventure</h2>


                            <p className='font-medium md:text-sm text-xs text-gray-300'>Experience the ultimate summer sports adventure at Blitz Camp! Unleash your skills in soccer, basketball, volleyball, swimming, and more. With expert coaches, state-of-the-art facilities, and an unforgettable atmosphere, elevate your game and create lifelong memories. Join us for teamwork, competition, and personal growth. Sign up today</p>






                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className='relative  w-full'>
                    <img className='rounded-xl' src={img8} alt="" />
                    <div className="absolute h-full flex rounded-xl md:p-0  py-16 items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

                        <div className="text-white md:space-y-7 md:w-2/3 w-full pl-12">

                            <h2 className="md:text-5xl text-xl md:mt-0  font-bold"> <br className='md:flex hidden' /><span className='text-cyan-600'><span className='text-white'>Join the</span>  Blitz Camp</span> <br />Summer Sports Adventure</h2>


                            <p className='font-medium md:text-sm text-xs text-gray-300'>Experience the ultimate summer sports adventure at Blitz Camp! Unleash your skills in soccer, basketball, volleyball, swimming, and more. With expert coaches, state-of-the-art facilities, and an unforgettable atmosphere, elevate your game and create lifelong memories. Join us for teamwork, competition, and personal growth. Sign up today</p>






                        </div>

                    </div>
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
};

export default Banner;