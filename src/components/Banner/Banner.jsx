import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Banner() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="zoom-out-up"
      data-aos-duration="1500">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper z-10 absolute top-[66px]"
      >
        <SwiperSlide><img className='md:w-full h-screen md:h-[700px] object-cover object-center' src={"https://i.ibb.co/yPDsFWB/Home-Penthouse.jpg"} alt="" /></SwiperSlide>
        <SwiperSlide><img className='md:w-full h-screen md:h-[700px] object-cover object-center' src={"https://i.ibb.co/Stss6cC/Home-Resorts.jpg"} alt="" /></SwiperSlide>
        <SwiperSlide><img className='md:w-full h-screen md:h-[700px] object-cover object-center' src={"https://i.ibb.co/XZX5j2k/Home-Vila.jpg"} alt="" /></SwiperSlide>
        <SwiperSlide><img className='md:w-full h-screen md:h-[700px] object-cover object-center' src={"https://i.ibb.co/sspzBcQ/Home-Beach.jpg"} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}