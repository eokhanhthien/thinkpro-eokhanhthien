import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/thumbs";
import "./SwiperThumbnail.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs ,Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs,Autoplay]);

export default function SwiperThumbnail() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="fixed-height-swiper">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            }}   

      >
        {/* SwiperSlide dòng 33-44 sẽ giống y như thumbnail bên dưới nếu mình muốn nó giống nhau như thumbmail product, cái này đã custom khác đi*/}
        <SwiperSlide>
          <img src="./image/img1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/img2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/img3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/img4.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="border-swiper-thumbnail">
          <div className="Content-left-text">
            Mừng sinh nhật Think, linh đình quà tặng!
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="border-swiper-thumbnail">
          <div className="Content-left-text">
          Ghế công thái học SIHOO về hàng, giá sốc rộn ràng!
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="border-swiper-thumbnail">
          <div className="Content-left-text">
          GAME THÊM MẠNH, QUÀ THÊM YÊU !.......
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="border-swiper-thumbnail">
          <div className="Content-left-text">
          Sức mạnh vượt trội, hội tụ tinh hoa cùng MSI Modern 14 B5M
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
