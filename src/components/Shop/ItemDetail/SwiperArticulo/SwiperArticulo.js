import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


import { FreeMode, Navigation, Thumbs } from "swiper";

export const SwiperArticulo = ({  imagen }) => { 
    /* const [thumbsSwiper, setThumbsSwiper] = useState(""); */

  return (
    <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          /* thumbs={{ swiper: thumbsSwiper }} */
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 lg:w-96 md:w-80 w-56 rounded-lg shadow-2xl"
        >
          {imagen ?
            <SwiperSlide><img src={imagen[0]} alt='Imagen Articulo'/></SwiperSlide>
            :
            <></>
          }
          {imagen ?
            <SwiperSlide><img src={imagen[1]} alt='Imagen Articulo'/></SwiperSlide>
            :
            <></>
          }
          {imagen ?
            <SwiperSlide><img src={imagen[2]} alt='Imagen Articulo'/></SwiperSlide>
            :
            <></>
          }

          {/* {product.imagen.map((img) => {
					  <SwiperSlide><img src={img}/></SwiperSlide>
					})} */}
         {/*  <SwiperSlide>    
            <img src={img} />
          </SwiperSlide> */}
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