import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation} from 'swiper/core';
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss"

import "./Swiper.css"
SwiperCore.use([Navigation])




function SwiperCustom(props) {
    const list = [1, 2, 3, 4, 5];
    return (
        <div className="list">      
        <Swiper slidesPerView={3} navigation={true}>
          {list.map((x,index) => (
            <SwiperSlide key={index}>             
              <div className="item">{x}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
}

export default SwiperCustom;