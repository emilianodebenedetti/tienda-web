import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


import { FreeMode, Navigation, Thumbs } from "swiper";

export const SwiperArticulo = ({ img, img1, img2, img3, img4 }) => { /* img1, img2, img3, img4 */
    const [thumbsSwiper, setThumbsSwiper] = useState("");

  return (
    <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 lg:w-96 md:w-80 w-56 rounded-lg shadow-2xl"
        >
          <SwiperSlide>    
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} />
          </SwiperSlide>
      </Swiper>
      {/* <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img></img>
        </SwiperSlide>
      </Swiper> */}
      
    </>
  );
}

export default SwiperArticulo