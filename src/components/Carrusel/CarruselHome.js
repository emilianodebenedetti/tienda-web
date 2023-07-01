import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Autoplay, Pagination, FreeMode, Navigation } from "swiper";

export const CarouselHome = () => {
    
   /*  const [thumbsSwiper, setThumbsSwiper] = useState(""); */

    return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        navigation={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: true,
        }}
        loop="true"
        className="mySwiper"
      >
            {/* METER FOR EACH POR CADA IMAGEN */}
            <SwiperSlide>
                <img alt='Imagenes home' src='https://firebasestorage.googleapis.com/v0/b/imgs-tienda-renato.appspot.com/o/Carrusel1.jpg?alt=media&token=532ba49a-d18c-4e24-b58e-ef772be1e5e5'/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt='Imagenes home' src='https://firebasestorage.googleapis.com/v0/b/imgs-tienda-renato.appspot.com/o/Carrusel2.jpg?alt=media&token=d1070407-704e-45af-b9b2-05f8c900c337'/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt='Imagenes home' src='https://firebasestorage.googleapis.com/v0/b/imgs-tienda-renato.appspot.com/o/Carrusel3.jpg?alt=media&token=65c2255e-76a7-4693-9f72-6f36971c9bc2'/>
            </SwiperSlide>
      </Swiper>
    </>
  );
}
export default CarouselHome