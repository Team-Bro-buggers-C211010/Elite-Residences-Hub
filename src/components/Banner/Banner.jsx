import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Banner() {
    return (
      <>
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
          className="mySwiper mt-4 relative z-10"
        >
          <SwiperSlide><img className='md:w-full h-screen  md:h-[700px] object-cover object-center' src={"https://i.ibb.co/y0DbjN8/Home-Mansion.jpg"} alt="" /></SwiperSlide>
          <SwiperSlide><img className='md:w-full h-screen md:h-[700px] object-cover object-center' src={"https://i.ibb.co/yPDsFWB/Home-Penthouse.jpg"} alt="" /></SwiperSlide>
          <SwiperSlide><img className='md:w-full h-screen md:h-[700px] object-cover object-center' src={"https://i.ibb.co/Stss6cC/Home-Resorts.jpg"} alt="" /></SwiperSlide>
          <SwiperSlide><img className='md:w-full h-screen md:h-[700px] object-cover object-center' src={"https://i.ibb.co/XZX5j2k/Home-Vila.jpg"} alt="" /></SwiperSlide>
          <SwiperSlide><img className='md:w-full h-screen md:h-[700px] object-cover object-center' src={"https://i.ibb.co/sspzBcQ/Home-Beach.jpg"} alt="" /></SwiperSlide>
        </Swiper>
      </>
    );
  }