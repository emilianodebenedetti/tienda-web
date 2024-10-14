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
          className="mySwiper linkCarousel carousel-container lg:max-h-[600px]"/* max-h-[180px] md:max-h-[400px]  flex justify-center items-center */
          >
          <SwiperSlide>
              <img alt='Imagenes home 1' src='https://firebasestorage.googleapis.com/v0/b/e-commerce-reactjs-971e5.appspot.com/o/imagenes%2FPortada1.jpg?alt=media&token=107bf211-0882-4c87-a9e0-b2361d756a1d'/>
          </SwiperSlide>
          <SwiperSlide>
              <img alt='Imagenes home 2' src='https://firebasestorage.googleapis.com/v0/b/e-commerce-reactjs-971e5.appspot.com/o/imagenes%2FPortada2.jpg?alt=media&token=d0fd4c1b-b803-42c7-b7aa-dba487e3d3d5'/>
          </SwiperSlide>
          <SwiperSlide>
              <img alt='Imagenes home 3' src='https://firebasestorage.googleapis.com/v0/b/e-commerce-reactjs-971e5.appspot.com/o/imagenes%2FPortada3%20.jpg?alt=media&token=e323d1ab-56f4-4d62-8e74-b972e89ff01c'/>
          </SwiperSlide>
        </Swiper>

        {/* <h2 className="text-center text-black pt-8 text-xl" >Elige tu categoria!</h2> */}
        <div className="category-container w-full grid justify-items-center grid-cols-2 py-4 lg:py-12 md:py-8 lg:grid-cols-4 gap-4 mx-auto mb-0 text-center text-white font-bold"> 
          <Link className="category-link" to="/category/Remeras">
            <div className="category-item rounded overflow-hidden h-mobile ">
              <img 
                className="category-image w-full h-40 object-cover" 
                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-reactjs-971e5.appspot.com/o/categorias%2FRemeras.jpg?alt=media&token=82cd5bd4-cf63-4373-8c61-9e9b1f53ac01"
              />
              <p className="category-text">REMERAS</p>
            </div>
            <p className="text-black">Remeras</p>
          </Link>
          <Link className="category-link" to="/category/Camperas">
            <div className="category-item rounded overflow-hidden h-mobile ">
              <img 
                className="category-image w-full h-40 object-cover" 
                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-reactjs-971e5.appspot.com/o/categorias%2FCamperas.jpg?alt=media&token=546ec919-48d2-4594-a98b-e487f24eace0"
              />
              <p className="category-text">CAMPERAS</p>
            </div>
            <p className="text-black">Camperas</p>
          </Link>
          <Link className="category-link" to="/category/Shorts">
            <div className="category-item rounded overflow-hidden h-mobile">
              <img 
                className="category-image w-full h-40 object-cover" 
                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-reactjs-971e5.appspot.com/o/categorias%2FPantalones-Shorts.jpg?alt=media&token=75d35987-df4e-4dc6-bc9b-5da2f0cf6f95"
              />
              <p className="category-text">SHORTS</p>
            </div>
            <p className="text-black">Shorts</p>
          </Link>
          <Link className="category-link" to="/category/Pantalones">
            <div className="category-item rounded overflow-hidden h-mobile">
              <img 
                className="category-image w-full h-40 object-cover" 
                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-reactjs-971e5.appspot.com/o/categorias%2FPantalon%20Negro%20UA.jpg?alt=media&token=d33fe82c-54c0-4f41-bbc4-3e495a751303"
              />
              <p className="category-text">PANTALONES</p>
            </div>
            <p className="text-black">Pantalones</p>
          </Link>
        </div>
          
    </>
  );
}
export default CarouselHome