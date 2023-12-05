import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, Navigation, Pagination } from "swiper";
import "../Carrusel/Carrusel.css";
import { Link } from "react-router-dom";


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
          className="mySwiper linkCarousel carousel-container"
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

        <h1 className="text-center text-black pt-4" >Elige tu categoria!</h1>
        <div className="category-container w-full grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto py-8 mb-0 text-center text-white font-bold"> 
          <Link className="category-link " to="/category/Calzas">
            <div className="category-item rounded overflow-hidden h-mobile w-full">
              <img 
                className="category-image w-full h-full object-cover" 
                src="https://firebasestorage.googleapis.com/v0/b/imgs-tienda-renato.appspot.com/o/Calza%20Argelia%20estampada%20talle%20S%20.JPG?alt=media&token=13adf7a2-47b0-4abd-969d-0ccdf0754763"
              />
              <h2 className="category-text">CALZAS</h2>
            </div>
            <h3 className="text-black">Calzas</h3>
          </Link>
          <Link className="category-link " to="/category/Abrigos">
            <div className="category-item rounded overflow-hidden h-mobile ">
              <img 
                className="category-image w-full h-full object-cover" 
                src="https://firebasestorage.googleapis.com/v0/b/imgs-tienda-renato.appspot.com/o/2%20Buzo%20lakes%20coral%20snow%20S%20M%20L%20.JPG?alt=media&token=d665c378-e2c3-47cd-8481-71e0fd5c4458"
              />
              <h2 className="category-text">ABRIGOS</h2>
            </div>
            <h3 className="text-black">Abrigos</h3>
           </Link>
          <Link className="category-link" to="/category/Musculosas&Remeras">
            <div className="category-item rounded overflow-hidden h-mobile ">
              <img 
                className="category-image w-full h-40 object-cover" 
                src="https://firebasestorage.googleapis.com/v0/b/backend-proyect-e58f8.appspot.com/o/imagen%2FMUSCULOSA%20IDUS%20NARANJA%20S%20M%20L%20.JPG?alt=media&token=1947fe68-b880-4fd1-9dd1-659bbb2b154a"
              />
              <h2 className="category-text">MUSCULOSAS & REMERAS</h2>
            </div>
            <h3 className="text-black">Musculosas & Remeras</h3>
          </Link>
          <Link className="category-link" to="/category/Tops">
            <div className="category-item rounded overflow-hidden h-mobile ">
              <img 
                className="category-image w-full h-40 object-cover" 
                src="https://firebasestorage.googleapis.com/v0/b/imgs-tienda-renato.appspot.com/o/2%20Top%20Beuge%20negro%20S%20M%20L%20%20.jpg?alt=media&token=eb83717e-eb54-45fc-b548-d18a578e01ed"
              />
              <h2 className="category-text">TOPS</h2>
            </div>
            <h3 className="text-black">Tops</h3>
          </Link>
          <Link className="category-link" to="/category/Biker&Shorts">
            <div className="category-item rounded overflow-hidden h-mobile">
              <img 
                className="category-image w-full h-40 object-cover" 
                src="https://firebasestorage.googleapis.com/v0/b/imgs-tienda-renato.appspot.com/o/Short%20botanic%20talle%202S.jpg?alt=media&token=be73367b-62bf-4877-9fcd-903b50c0bd17"
              />
              <h2 className="category-text">BIKER & SHORTS</h2>
            </div>
            <h3 className="text-black">Biker & Shorts</h3>
          </Link>

        </div>
    </>
  );
}
export default CarouselHome