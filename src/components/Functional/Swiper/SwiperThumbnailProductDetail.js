import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/thumbs";
import "./SwiperThumbnailProductDetail.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs ,Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs,Autoplay]);



export default function SwiperThumbnailProductDetail(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    // console.log(props.ProductLaptopDetail.thumbnail);
    
  return (
    <main>
     { props.ProductLaptopDetail && <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
        // autoplay={{
        //     delay: 5000,
        //     disableOnInteraction: false,
        //     }}   
       
      >
        {/* SwiperSlide dòng 33-44 sẽ giống y như thumbnail bên dưới nếu mình muốn nó giống nhau như thumbmail product, cái này đã custom khác đi*/}
        {props.ProductLaptopDetail.images.length > 0?
            props.ProductLaptopDetail.images.map((item , index) =>{
                return ( 
                <SwiperSlide key={index}>
                    <img className = "size-img-title-swiper" src={`https://lumen.thinkpro.vn/${item}`} />
                </SwiperSlide>)
            }) : 
                <SwiperSlide >
                <img className = "size-img-title-swiper" src={`https://lumen.thinkpro.vn/${props.ProductLaptopDetail.thumbnail}`} />
                </SwiperSlide>
        }
        
      
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        // freeMode={true}
        // watchSlidesProgress={true}
        className="mySwiper"
        modules={[Thumbs]}
        watchSlidesProgress
      >
        {props.ProductLaptopDetail.images.length > 0?
            props.ProductLaptopDetail.images.map((item , index) =>{
                return ( 
                <SwiperSlide key={index}>
                    <img className = "size-img-thumbnail-swiper"src={`https://lumen.thinkpro.vn/${item}`} />
                </SwiperSlide>)
            }) : 
                <SwiperSlide >
                <img className = "size-img-thumbnail-swiper"src={`https://lumen.thinkpro.vn/${props.ProductLaptopDetail.thumbnail}`} />
                </SwiperSlide>
        }
      </Swiper>
      </>}
      </main>
  );
}
