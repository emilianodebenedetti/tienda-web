import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, Navigation, Pagination } from "swiper";
import "../Carrusel/Carrusel.css";


export const CarouselHome = () => {
    return (
    <>
        <Swiper
          pagination={{
            dynamicBullets: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          navigation={{
            nextEl: null, // Desactivo botones next y prev
            prevEl: null, 
          }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          loop="true"
          className="mySwiper linkCarousel"
          >
          <SwiperSlide>
              <img alt='Imagenes home 1' src='https://firebasestorage.googleapis.com/v0/b/imgs-tienda-renato.appspot.com/o/Carrusel2.1.jpg?alt=media&token=52437485-64e0-404b-a6c8-866a08ccecb1'/>
          </SwiperSlide>
          <SwiperSlide>
              <img alt='Imagenes home 2' src='https://firebasestorage.googleapis.com/v0/b/imgs-tienda-renato.appspot.com/o/Carrusel2.2.jpg?alt=media&token=4ceb6813-4a3f-4e7b-a084-c66b423340b7'/>
          </SwiperSlide>
          <SwiperSlide>
              <img alt='Imagenes home 3' src='https://firebasestorage.googleapis.com/v0/b/imgs-tienda-renato.appspot.com/o/Carrusel2.3.jpg?alt=media&token=2d626d12-3eab-4a4a-8546-f55f4814637a'/>
          </SwiperSlide>
        </Swiper>

    </>
  );
}
export default CarouselHome