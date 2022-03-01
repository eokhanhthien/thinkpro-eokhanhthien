import React from "react";
import "./DetailLaptop.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { currencyFormat } from "../Functional/FormatNumber";
import productApi from "../../api/productApi";
import SkeletonArticleDetail from "../Functional/Skeletons/SkeletonArticleDetail";
import SwiperThumbnailProductDetail from "../Functional/Swiper/SwiperThumbnailProductDetail";

import { actAddToCart } from "../../redux/actions/index"
import { connect } from "react-redux";
import Btn_loading from "../Functional/ButtonLoading/Btn_loading";
import { useDispatch } from "react-redux";
import {addToCart} from "../../reduxtoolkit/cartSlide"
import { useSelector } from "react-redux";

function DetailLaptop(props) {
  const { id, option } = useParams();
  const [ProductLaptopDetail, SetProductLaptopDetail] = useState(); //lưu ý ([])

  const [scroll, setScroll] = useState(false);
  
  const dispatch = useDispatch();
  const cart = useSelector(state => state.carts)
  // console.log(cart.cartItem);

  useEffect(() => {
    let isMounted = true;//Dư bộ nhớ các thứ thì phải kiểm tra đầu vào
    (async function () {
      const detailLaptop = await productApi.getById({ id, option });
      if(isMounted){  //Dư bộ nhớ các thứ thì phải kiểm tra đầu vào
        SetProductLaptopDetail(detailLaptop.data.data);
      }
      return () => {
        isMounted = false;//Dư bộ nhớ các thứ thì phải kiểm tra đầu vào
        };
    })();

    // document.body.scrollTop = 0
    // window.scrollTo(0, 0)

    window.addEventListener("scroll", () => {
      //----------------------Sự kiện cho thanh add_cart BEGIN --------------------
      setScroll(window.scrollY > 4400); // Nếu height > ... thì scroll = true
      // console.log(window.scrollY);
      //----------------------Sự kiện cho thanh add_cart END ----------------------
      // console.log(window.innerHeight);
      
    });


  }, [ProductLaptopDetail]);

  useEffect (()=>{
    window.scrollTo(0, 0)
    
  },[])

  function onAddToCart(product) {
      // props.onAddToCart(item);
      dispatch(addToCart(product))
      
  }
 

  // console.log(ProductLaptopDetail.thumbnail);

  return (
    <div>
      {ProductLaptopDetail ? (
        <div>
          
          <div className="Detail-container grid wide">
            <div className="row mt-50">
              <div className="col l-1 dis-padding">
                <div className=" Size-logo">
                  <img src="../../image/logosmall.svg" alt="" />
                </div>
              </div>
              <div className="col l-1">
                <span>/ Laptop</span>
              </div>
            </div>
            <div className="row">
              <div className="col l-6 m-12 c-12">
              <div className="Size-img-detail">
                <SwiperThumbnailProductDetail
                ProductLaptopDetail={ProductLaptopDetail}
                ></SwiperThumbnailProductDetail>
              </div> 

              </div>
              <div className="col l-6 m-12 c-12">
                <h1>{ProductLaptopDetail.name}</h1>
                <div className="mt-t-b-16">
                  MPN: {ProductLaptopDetail.mpn} | SKU:
                  {ProductLaptopDetail.sku}
                </div>
                <div className="mt-t-b-16 Comment-client-numbers">
                  0 <i className="fas fa-star" />
                  <i className="fas fa-star"></i> <i className="far fa-star" />
                  <i className="far fa-star" /> <i className="far fa-star" />
                  <span>0 đánh giá</span> <span>0 bình luận</span>
                </div>
                <div className="row">
                  <div className="col l-6 m-12 c-12">
                    <div className="row Detail-trademark-container">
                      
                      <div>Thương hiệu:</div>
                      <div className="Size-img-trademark">
                        
                        <img
                          src={`https://lumen.thinkpro.vn/${ProductLaptopDetail.brand.icon}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="Custom-for-SetInnerHTML-info-product-item"
                      dangerouslySetInnerHTML={{
                        __html: ProductLaptopDetail.features,
                      }}
                    />
                    <div>
                      <span className="Detail-custom-text">Màu sắc:</span>
                      <div className="Detail-custom-text-content">
                        
                        {ProductLaptopDetail.color}
                      </div>
                      <div className="row no-gutters">
                        {ProductLaptopDetail.colors.map((itemcolor, index) => {
                          return (
                            <div
                              key={index}
                              className="Custom-size-img-color-detail"
                            >
                              <img
                                src={`https://lumen.thinkpro.vn/${itemcolor.thumbnail}`}
                                alt=""
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="col l-6">
                    <div className="row">
                      <div className="col l-12">
                        <div className="Detail-insurance-boder">
                          <ul>
                            <span className="Detail-custom-text size-big-text">
                              Bảo hành
                            </span>
                            <li>
                              <span className="Detail-custom-text-content">
                                
                                Sản phẩm
                              </span>
                              <span className="Detail-custom-text">
                                chính hãng
                              </span>
                            </li>
                            <li>
                              <span className="Detail-custom-text-content">
                                
                                Bảo hành
                              </span>
                              <span className="Detail-custom-text">
                                12 tháng tại TTBH Dell Việt Nam
                              </span>
                            </li>
                            <li>
                              <span className="Detail-custom-text">
                                Áp dụng chính sách Bảo hành tại nhà 24/7
                                (Hotline: 1800 54 54 55)
                              </span>
                            </li>
                            <li>
                              <span className="Detail-custom-text-content">
                                
                                Đổi mới trong 15 ngày đầu tiên
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col l-12 mt-50">
                        <div className="Detail-insurance-boder">
                          <a href="true">
                            
                            Từ 01/10/2021 - 31/12/2021 giảm 100.000đ khi mua
                            Microsoft Office 365 và Office Home &amp; Student
                            2021 kèm laptop.
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters boder-sale">
                  <div className="col l-12">
                    <div className="Detail-custom-text size-big-text">
                      Khuyến mãi
                    </div>
                    <div className="row mt-50">
                      <div className="col l-8">
                        <i className="fal fa-gift gift-icon" />
                        <span className="Detail-custom-time-sale">
                          Giảm trực tiếp vào giá bán
                        </span>
                        <span className="gift-icon"> 1.790.000 ₫</span>
                      </div>
                      <div className="col l-4">
                        <div className="gift-icon">Kết thúc sau</div>
                        <div className="Detail-time-sale">06:14:44</div>
                        <div className="Detail-custom-time-sale">
                          ngày giờ phút
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col l-12 mt-t-b-16">
                    Có {ProductLaptopDetail.options.length} cấu hình tùy chọn
                  </div>

                  {ProductLaptopDetail.options.map((itemOption, index) => {
                    return (
                      <div
                        key={index}
                        className="col l-12 Detail-option-choose-boder"
                      >
                        <div className="row">
                          <div className="col l-8">
                            <span className="Detail-color-backgroud-orange">
                              Đang về
                            </span>
                            <span className="Detail-custom-time-sale">
                              
                              MPN: {itemOption.npm} SKU: {itemOption.sku}
                            </span>
                          </div>
                          <div className="col l-4">
                            
                            <div className="gift-icon">
                              {currencyFormat(itemOption.price)} ₫
                            </div>
                            <div className="strikethrough-text">
                              27.990.000 ₫
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col l-8">
                            <span className="line-height-text-span">
                              
                              <div
                                className="Custom-for-SetInnerHTML"
                                dangerouslySetInnerHTML={{
                                  __html: itemOption.name,
                                }}
                              />
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col l-8 Detail-custom-text-content">
                            Hàng New, Fullbox, Chính hãng
                          </div>
                          <div className="col l-4">
                            <i className="fas fa-check-square Detail-color-text-blue" />
                          </div>
                        </div>
                        <div className="col l-12 boder-bt" />
                        <div className="row">
                          <i className="far fa-bell Detail-color-icon-blue" />
                          <span className="Detail-color-text-blue">
                            
                            Nhận thông báo khi hàng về
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="Detail-padding-content">
              <div className="row">
                <div className="col l-12 c-12 m-12  Content-2-container-reduce-price">
                  <h1>Đánh giá chi tiết</h1>
                </div>
                <div className="col l-12 c-12 m-12 boder-bt-9" />
              </div>

              <div 
                className="Custom-for-SetInnerHTML "
                dangerouslySetInnerHTML={{
                  __html: ProductLaptopDetail.content,
                }}
              />

              <div className="row">
                <div className="col l-12 m-12 c-12 mt-t-b-16">
                  <span className="size-big-text-span">Tags:</span>
                  <span className="size-big-text-tag">
                    Dell Gaming G15 5511 Intel Gen 11
                  </span>
                </div>
                <div className="col l-6 m-12 c-12">
                  <div className="Comment-cient">Đánh giá của khách hàng</div>
                </div>
                <div className="col l-3 m-12 c-12">
                  <div className="Comment-cient-write">Viết đánh giá</div>
                </div>
                <div className="col l-12 m-12 c-12">
                  <span className="Detail-number-comment">0</span>
                  <span>
                    <i className="far fa-star Detail-star-commnet " />
                    <i className="far fa-star Detail-star-commnet" />
                    <i className="far fa-star Detail-star-commnet" />
                    <i className="far fa-star Detail-star-commnet" />
                    <i className="far fa-star Detail-star-commnet" />
                  </span>
                  <span className="Detail-custom-text-content text-underline">
                    0 đánh giá
                  </span>
                </div>
              </div>
              <div className="col l-12 boder-bt-9" />
              <div className="col l-12 m-12 c-12 Content-2-container-reduce-price">
                <div className="row">
                  <h1>Bình luận</h1>
                  <span className="Detail-custom-text-content center-text">
                    0 bình luận
                  </span>
                </div>
              </div>
              <div className="Detail-custom-text mt-50">Bình luận của bạn</div>
              <div className="row no-gutters">
                <div className="col l-12 m-12 c-12 Container-intput-comment">
                  <textarea
                    className="intput-comment"
                    placeholder="Mời bạn để lại bình luận"
                    defaultValue={""}
                  />
                  <button className="intput-comment-input">Gửi</button>
                </div>
              </div>
            </div>
          </div>
          <div className={scroll ? "Detail-sticky-hidden" : "Detail-sticky"}>
            <div className="grid wide">
              <div className="row">
                <div className="col l-2-4 m-4 c-6">
                  <div className="Detail-sticky-hotline">Hotline</div>
                  <div className="Detail-sticky-hotline-number">
                    1900.63.3579
                  </div>
                </div>
               
                <div className="col l-2-4 m-4 c-6">
                  <div className="Detail-sticky-price">
                    {currencyFormat(ProductLaptopDetail.price)} ₫
                  </div>
                  <div className="Detail-sticky-price-sale">
                    {currencyFormat(ProductLaptopDetail.price)} ₫
                  </div>
                </div>
                <div onClick={() => onAddToCart(ProductLaptopDetail)} className="col l-2-4 m-12 c-12">
                  {/* <div className="Detail-sticky-add-cart">
                    <i className="fal fa-cart-plus position-right-option-icon"> </i>
                    <span >Thêm vào giỏ hàng</span>    
                  </div> */}
                  
                  <Btn_loading></Btn_loading>
                </div>
                <div className="col l-4 m-12 c-12 Detail-sticky-add-compare-container">
                  <button className="Detail-sticky-add-compare">
                    <i className="far fa-plus Detail-sticky-add-compare-icon" />
                    <span>Thêm vào so sánh</span>
                  </button>
                  <span>
                    <i className="far fa-heart Detail-sticky-add-compare-icon-like" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SkeletonArticleDetail></SkeletonArticleDetail>
      )}
    </div>
  );
}


// const mapStateToProps = (state, ownProps) => {
//   return {
//     Cart: state.Cart
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onAddToCart: (item) => {
//       dispatch(actAddToCart(item,1))
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps, null)(DetailLaptop)

export default DetailLaptop;