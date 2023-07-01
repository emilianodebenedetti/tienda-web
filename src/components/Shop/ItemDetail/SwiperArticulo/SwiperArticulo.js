import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

export const SwiperArticulo = ({ imagen }) => {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        loop={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 swiper-image rounded-lg shadow-2xl"
      >
        {imagen &&
          imagen.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <img
                className="swiper-image"
                src={imgSrc}
                alt={`Imagen Articulo ${index + 1}`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default SwiperArticulo