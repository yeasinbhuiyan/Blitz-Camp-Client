import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";


import slider1 from '../../../assets/slider1.jpg'
import slider2 from '../../../assets/slider2.jpg'
import slider3 from '../../../assets/slider3.jpg'
import slider4 from '../../../assets/slider4.jpg'

const AbouSlider = () => {


    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="h-[300px] w-[700px]"  src={slider1} />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="h-[300px] w-[700px]" src={slider2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-[300px] w-[700px]"  src={slider3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-[300px] w-[700px]" src={slider4} />
                </SwiperSlide>

            </Swiper>

        </>
    );
};

export default AbouSlider;