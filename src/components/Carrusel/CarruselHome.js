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

        <h2 className="text-center text-black pt-8 text-xl" >Elige tu categoria!</h2>
        <div className="category-container w-full grid justify-items-center grid-cols-2 py-4 lg:py-12 md:py-8 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto  mb-0 text-center text-white font-bold"> 
          <Link className="category-link " to="/category/Calzas">
            <div className="category-item rounded overflow-hidden h-mobile w-full">
              <img 
                className="category-image w-full h-full object-cover" 
                src="https://firebasestorage.googleapis.com/v0/b/imgs-tienda-renato.appspot.com/o/imagenes-categorias%2Fcalzas.jpg?alt=media&token=a03bda60-2ebb-40ac-af94-1349be8c36c7"
              />
              <p className="category-text">CALZAS</p>
            </div>
            <p className="text-black">Calzas</p>
          </Link>
          <Link className="category-link " to="/category/Abrigos">
            <div className="category-item rounded overflow-hidden h-mobile ">
              <img 
                className="category-image w-full h-full object-cover" 
                src="https://firebasestorage.googleapis.com/v0/b/imgs-tienda-renato.appspot.com/o/abrigos.jpg?alt=media&token=a7457e67-4879-45c7-98d5-2dee41134726"
              />
              <p className="category-text">ABRIGOS</p>
            </div>
            <p className="text-black">Abrigos</p>
           </Link>
          <Link className="category-link" to="/category/Musculosas&Remeras">
            <div className="category-item rounded overflow-hidden h-mobile ">
              <img 
                className="category-image w-full h-40 object-cover" 
                src="https://firebasestorage.googleapis.com/v0/b/imgs-tienda-renato.appspot.com/o/imagenes-categorias%2Fmusculosas%20y%20remeras.jpg?alt=media&token=d6337dba-5a88-453b-9fcd-4c72de7efe60"
              />
              <p className="category-text">MUSCULOSAS & REMERAS</p>
            </div>
            <p className="text-black">Musculosas & Remeras</p>
          </Link>
          <Link className="category-link" to="/category/Tops">
            <div className="category-item rounded overflow-hidden h-mobile ">
              <img 
                className="category-image w-full h-40 object-cover" 
                src="https://firebasestorage.googleapis.com/v0/b/imgs-tienda-renato.appspot.com/o/imagenes-categorias%2Ftops.jpg?alt=media&token=73a3c027-129d-456b-a96f-7034d1b67535"
              />
              <p className="category-text">TOPS</p>
            </div>
            <p className="text-black">Tops</p>
          </Link>
          <Link className="category-link" to="/category/Biker&Shorts">
            <div className="category-item rounded overflow-hidden h-mobile">
              <img 
                className="category-image w-full h-40 object-cover" 
                src="https://firebasestorage.googleapis.com/v0/b/imgs-tienda-renato.appspot.com/o/imagenes-categorias%2Fbiker%20y%20shorts.jpg?alt=media&token=5f7939ca-08b4-4853-8314-0c7cec5f3c12"
              />
              <p className="category-text">BIKER & SHORTS</p>
            </div>
            <p className="text-black">Biker & Shorts</p>
          </Link>

        </div>
          <h2 className="text-center text-black pt-2 text-2xl text-center font-bold" >Todos los productos ...</h2>
    </>
  );
}
export default CarouselHome