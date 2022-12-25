'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

SwiperCore.use([Autoplay, Navigation, Pagination]);
interface Slides {
  image: string;
  title: string;
  content: string;
}

const Slider = () => {
    const slides: Slides[] = [
        {
            image: 'swiperimage1.png',
            title: '',
            content: '',
        },
        {
            image: 'swiperimage1.png',
            title: '',
            content: '',
        },
        {
            image: 'swiperimage1.png',
            title: '',
            content: '',
        },
    ]

  return (
    <div>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='w-full'
    >
        {slides.map((slide, key) => {
            return (
                <SwiperSlide className='w-full' key={key}>
                    <div className='w-full h-[200px]'>
                        <Image loader={() => slide.image} src={slide.image} fill={true} alt="Swiper Image" />
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
    </div>
  )
}

export default Slider