import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import ProductItemSwiper from "./../ProductItemSwiper/ProductItemSwiper";
import ProductItemColor from "./../ProductItemColor/ProductItemColor";
import postApi from "../../api/postApi";

import SkeletonArticle from "../Functional/Skeletons/SkeletonArticle";

// Import Swiper - BEGIN-------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import "./../Functional/Swiper/Swiper.css";
import SwiperThumbnail from "../Functional/Swiper/SwiperThumbnail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { useSelector } from "react-redux";

SwiperCore.use([Navigation]);
// Import Swiper - END---------------------------------


//  var show  = (productsLaptop) => {
//    console.log(productsLaptop)
//  }

function Home(props) {
  // {show(props.productsLaptop)}
  const [isLoading, SetisLoading] = useState(false);

  const [ProductLaptop, SetProductLaptop] = useState([]);
  const [ProductLaptopMore, SetProductLaptopMore] = useState([]);
  const [ProductPC, SetProductPC] = useState([]);
  const [ProductAccessory, SetProductAccessory] = useState([]);
  const [ProductMouse, SetProductProductMouse] = useState([]);
  const [Balo, SetBalo] = useState([]);

  useEffect(() => {
    (async function () {
      let dbLaptop = await postApi.getAll("/filters", {
        category_id: 1,
        _start: 10,
        _limit: 10,
      });

      let dbLaptopmore = await postApi.getAll("/filters", {
        category_id: 1,
        _start: 70,
        _limit: 10,
      });

      let dbPC = await postApi.getAll("/filters", {
        category_id: 3,
        _start: 10,
        _limit: 10,
      });

      let dbAccessory = await postApi.getAll("/filters", {
        category_id: 7,
        _start: 10,
        _limit: 5,
      });

      let dbMouse = await postApi.getAll("/filters", {
        category_id: 8,
        _start: 10,
        _limit: 10,
      });

      let dbBalo = await postApi.getAll("/filters", {
        category_id: 9,
        _start: 0,
        _limit: 5,
      });

      SetProductLaptop(dbLaptop.data);
      SetProductLaptopMore(dbLaptopmore.data);
      SetProductPC(dbPC.data);
      SetProductAccessory(dbAccessory.data);
      SetProductProductMouse(dbMouse.data)
      SetBalo(dbBalo.data)
      if (dbLaptop && dbLaptopmore && dbPC && dbAccessory&&dbMouse&&dbBalo) {
        SetisLoading(true);
      }
    })();
  }, []);


  // const datastore = useSelector(state => state.carts)

  // console.log(Balo);

  return (
    <div className="Content-container">
      <div className="grid wide">
        {/* Content 1 - BEGIN*/}
        <div className="row">
          <div className="col l-8 m-12 c-12 fix-height">
            <SwiperThumbnail></SwiperThumbnail>
          </div>
          <div className="col l-4 m-12 c-12 customheight-Content-right mt-50">
            <div className="row">
              <div className="col l-12 Content-right-item">
              <NavLink to="/PageNews"> <div className="Content-right-item-boder active-right-item-boder">
                  <a href="true">
                    Mừng Sinh Nhật Think - Linh Đình Quà Tặng”, Cơ Hội Trúng
                    Logo ThinkPro Bằng Vàng Cực Đã
                  </a> 
                </div>
              </NavLink>
              </div>
            </div>
            <div className="row">
            <div className="col l-12 Content-right-item">
                <NavLink to="/PageNews">  <div className="Content-right-item-boder">
                  <a href="true">
                    Noel Trẩy Hội - Quà Tặng Dữ Dội Tại ThinkPro Với Tổng Giá
                    Trị Lên Tới 100 Triệu Đồng
                  </a>
                </div></NavLink>
              </div>
            
            </div>
            <div className="row">
              <div className="col l-12 Content-right-item">
              <NavLink to="/PageNews"><div className="Content-right-item-boder">
                  <a href="true">
                    Chia Sẻ Cảm Nghĩ Về Think, Nhận Ngay Quà Tặng Linh Đình -
                    Minigame Siêu HOT “How I Met ThinkPro
                  </a>
                </div></NavLink>
              </div>
            

            </div>
            <div className="row">
              <div className="col l-12 Content-right-item">
              <NavLink to="/PageNews"> <div className="Content-right-item-morenews">
                  <a href="true">
                    Tất cả tin tức{" "}
                    <i className="fas fa-chevron-right Content-right-item-morenews-icon" />
                  </a>
                </div> </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* Content 1 - END */}
        {/* Content 2 - BEGIN*/}
        <div className="row Content-2-container">
          <div className="col l-12 m-12 c-12 Content-2-container-reduce-price">
            <h1>Giảm giá sốc</h1>
          </div>

          {isLoading ? (
            <Swiper
              slidesPerView={5}
              navigation={true}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 3,
                },
                1023: {
                  slidesPerView: 5,
                },
              }}
            >
              {ProductLaptop.map((item, index) => {
                return (
                  <SwiperSlide className="Custom-dis-col" key={index}>
                    <ProductItemSwiper
                      id={item.id}
                      key={index}
                      name={item.name}
                      thumbnail={item.thumbnail}
                      cur_price={item.cur_price}
                      tang_type={item.tang_type}
                      shared_url={item.shared_url}
                      cur_sku={item.cur_sku}
                    ></ProductItemSwiper>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return <SkeletonArticle key={index}></SkeletonArticle>;
            })
          )}

          <div className="col l-12 m-12 c-12 Content-2-container-view-all">
          <NavLink to="/PageAllLaptop">  <button className="add-view-all">Xem tất cả</button></NavLink>
          </div>
        </div>
        <div className="row Content-2-container">
          <div className="col l-12 m-12 c-12 Content-2-container-reduce-price">
            <h1>Máy tính xách tay</h1>
          </div>

          <div className="col l-2 m-2 c-2 logo-thuonghieu-text">
            Thương hiệu
          </div>

          <div className="col l-10 c-10 m-10">
            <Swiper
              slidesPerView={8}
              // navigation={true}
              breakpoints={{
                0: {
                  slidesPerView: 4,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 4,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 6,
                },
                1023: {
                  slidesPerView: 8,
                },
              }}
            >
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th2.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th3.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th4.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th5.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th6.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th7.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th8.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th9.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img
                  className="logo-thuonghieu"
                  src="./image/th10.png"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="col l-1-71 m-1-71 c-1-71 logo-thuonghieu-text">
            Khoảng giá
          </div>
          <div className="col l-1-71 m-1-71 c-1-71 ">
            <div className="khoanggia-option"> Trên 50 triệu</div>
          </div>
          <div className="col l-1-71 m-1-71 c-1-71 ">
            <div className="khoanggia-option"> 30 - 40 triệu</div>
          </div>
          <div className="col l-1-71 m-1-71 c-1-71 ">
            <div className="khoanggia-option"> 20 - 30 triệu</div>
          </div>
          <div className="col l-1-71 m-1-71 c-1-71 ">
            <div className="khoanggia-option"> 15 - 20 triệu</div>
          </div>
          <div className="col l-1-71 m-1-71 c-1-71 ">
            <div className="khoanggia-option"> 10 - 15 triệu</div>
          </div>
          <div className="col l-1-71 m-1-71 c-1-71 ">
            <div className="khoanggia-option"> Dưới 10 triệu</div>
          </div>



          {isLoading
            ? ProductLaptopMore.map((item, index) => {
                return (
                  <ProductItemColor
                    id={item.id}
                    key={index}
                    name={item.name}
                    thumbnail={item.thumbnail}
                    cur_price={item.cur_price}
                    tang_type={item.tang_type}
                    cur_sku={item.cur_sku}
                    shared_url={item.shared_url}
                    options={item.options}
                  ></ProductItemColor>
                );
              })
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                return <SkeletonArticle key={index}></SkeletonArticle>;
              })}

          <div className="col l-12 m-12 c-12 Content-2-container-view-all">
          <NavLink to="/PageAllLaptop"><button className="add-view-all">Xem tất cả</button></NavLink>
          </div>
        </div>
        <div className="row Content-2-container">
          <div className="col l-12 m-12 c-12 Content-2-container-reduce-price">
            <h1>Chuột</h1>
          </div>

          {isLoading
            ? ProductMouse.map((item, index) => {
                return (
                  <ProductItemColor
                  id={item.id}
                  key={index}
                  name={item.name}
                  thumbnail={item.thumbnail}
                  cur_price={item.cur_price}
                  tang_type={item.tang_type}
                  cur_sku={item.cur_sku}
                  shared_url={item.shared_url}
                  options={item.options}
                  ></ProductItemColor>
                );
              })
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                return <SkeletonArticle key={index}></SkeletonArticle>;
              })}

          <div className="col l-12 m-12 c-12 Content-2-container-view-all">
          <NavLink to="/PageAllMouse">  <button className="add-view-all">Xem tất cả</button></NavLink>
          </div>
        </div>
        <div className="row Content-2-container">
          <div className="col l-12 m-12 c-12 Content-2-container-reduce-price">
            <h1>Máy tính - PC</h1>
          </div>
          <div className="col l-2 m-2 c-2 logo-thuonghieu-text">
            Thương hiệu
          </div>

          <div className="col l-10 c-10 m-10">
            <Swiper
              slidesPerView={8}
              // navigation={true}
              breakpoints={{
                0: {
                  slidesPerView: 4,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 4,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 6,
                },
                1023: {
                  slidesPerView: 8,
                },
              }}
            >
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th2.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th3.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th4.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th5.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th6.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th7.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th8.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img className="logo-thuonghieu" src="./image/th9.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="cutom-slider-swiper">
                <img
                  className="logo-thuonghieu"
                  src="./image/th10.png"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="col l-1-71 m-1-71 c-1-71 logo-thuonghieu-text">
            Khoảng giá
          </div>
          <div className="col l-1-71 m-1-71 c-1-71 ">
            <div className="khoanggia-option"> Trên 50 triệu</div>
          </div>
          <div className="col l-1-71 m-1-71 c-1-71 ">
            <div className="khoanggia-option"> 30 - 40 triệu</div>
          </div>
          <div className="col l-1-71 m-1-71 c-1-71 ">
            <div className="khoanggia-option"> 20 - 30 triệu</div>
          </div>
          <div className="col l-1-71 m-1-71 c-1-71 ">
            <div className="khoanggia-option"> 15 - 20 triệu</div>
          </div>
          <div className="col l-1-71 m-1-71 c-1-71 ">
            <div className="khoanggia-option"> 10 - 15 triệu</div>
          </div>
          <div className="col l-1-71 m-1-71 c-1-71 ">
            <div className="khoanggia-option"> Dưới 10 triệu</div>
          </div>
  

          {isLoading
            ? ProductPC.map((item, index) => {
                return (
                  <ProductItem
                    id={item.id}
                    key={index}
                    name={item.name}
                    thumbnail={item.thumbnail}
                    cur_price={item.cur_price}
                    tang_type={item.tang_type}
                    shared_url={item.shared_url}
                    cur_sku={item.cur_sku}
                  ></ProductItem>
                );
              })
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                return <SkeletonArticle key={index}></SkeletonArticle>;
              })}

          <div className="col l-12 m-12 c-12 Content-2-container-view-all">
          <NavLink to="/PageAllPc"> <button className="add-view-all">Xem tất cả</button></NavLink>
          </div>
        </div>
        <div className="row Content-2-container">
          <div className="col l-12 m-12 c-12 Content-2-container-reduce-price">
            <h1>Phụ kiện - Gear</h1>
          </div>

          {isLoading
            ? ProductAccessory.map((item, index) => {
                return (
                  <ProductItemColor
                    id={item.id}
                    key={index}
                    name={item.name}
                    thumbnail={item.thumbnail}
                    cur_price={item.cur_price}
                    tang_type={item.tang_type}
                    cur_sku={item.cur_sku}
                    shared_url={item.shared_url}
                    options={item.options}
                  ></ProductItemColor>
                );
              })
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                return <SkeletonArticle key={index}></SkeletonArticle>;
              })}

          <div className="col l-12 m-12 c-12 Content-2-container-view-all">
          <NavLink to="/PageAllAccessory"> <button className="add-view-all">Xem tất cả</button></NavLink>
          </div>
        </div>


        <div className="row Content-2-container">
          <div className="col l-12 m-12 c-12 Content-2-container-reduce-price">
            <h1>Balo</h1>
          </div>

          {isLoading
            ? Balo.map((item, index) => {
                return (
                  <ProductItemColor
                    id={item.id}
                    key={index}
                    name={item.name}
                    thumbnail={item.thumbnail}
                    cur_price={item.cur_price}
                    tang_type={item.tang_type}
                    cur_sku={item.cur_sku}
                    shared_url={item.shared_url}
                    options={item.options}
                  ></ProductItemColor>
                );
              })
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                return <SkeletonArticle key={index}></SkeletonArticle>;
              })}

          <div className="col l-12 m-12 c-12 Content-2-container-view-all">
          <NavLink to="/PageAllBalo"> <button className="add-view-all">Xem tất cả</button></NavLink>
          </div>
        </div>


      </div>
          

    </div>
  );
}



export default (Home)
