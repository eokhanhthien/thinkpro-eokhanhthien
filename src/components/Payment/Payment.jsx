import React, { useEffect, useState } from "react";
import "./Payment.css"
import CartResult from "../Cart/CartResult"
import { useSelector } from "react-redux";
import LocationForm from "../Functional/Location/LocationForm";

function Payment(props) {
const cart = useSelector(state => state.carts)
const [isPayinShop, SetisPayinShop] = useState(true);

function handleChangeOption(value) {
    SetisPayinShop(value);
}

useEffect(()=>{
  window.scrollTo(0, 0)
},[])

  return (

    <div className="Payment_conatainer">
      <div className="grid wide">
        <div className="row mt-50">
          <div className="col l-1 dis-padding">
            <div className=" Size-logo">
              <img src="./image/logosmall.svg" alt="" />
            </div>
          </div>
          <div className="col l-1">
            <span>/ Payment</span>
          </div>


        </div>

        <div className="row no-gutters">
             <div className="col l-9 m-12 c-12 Payment_info">
                <div className="info_user">
                       <div className="info_user_title">
                           <div className="row no-gutters title_container">
                           <i class="fas fa-phone-alt title_info_icon"></i>
                           <div className="title_info"> 1. Thông tin liên hệ</div>
                           </div>
                      
                      <div className="row "> 
                      <div className="col l-6 m-12 c-12">
                          <div className="custom_text_payment">Họ tên</div>
                         <div className="pd_20"><input className="custom_input_payment" type="text" name="" id="" placeholder="Tên người nhận" /> </div> 
                      </div>
                      <div className="col l-6 m-12 c-12">
                          <div className="custom_text_payment">Số điện thoại</div>
                          <div className="pd_20"><input className="custom_input_payment" type="text" name="" id="" placeholder="Số điện thoại người nhận" /> </div>
                      </div>
                       </div>
                    </div>
                </div>

                <div className="info_user">
                       <div className="info_user_title">
                           <div className="row no-gutters title_container">
                           <i class="fas fa-map-marked-alt title_info_icon"></i>
                           <div className="title_info"> 2. Bạn muốn nhận hàng tại đâu?</div>
                           </div>
                      
                    
                      <div className="row no-gutters option_Location"> 
                      <div onClick={()=>handleChangeOption(true)} className={isPayinShop?"col l-2 m-6 c-6 option_choose_place isChoose" : "col l-2 m-6 c-6 option_choose_place"}>Tại cửa hàng</div>
                      <div onClick={()=>handleChangeOption(false)} className={isPayinShop?"col l-2 m-6 c-6 option_choose_place " : "col l-2 m-6 c-6 option_choose_place isChoose"}>Giao tận nơi</div>
                    </div>

                    {isPayinShop ? <div className="row no-gutters">
                      <div className="col l-12 m-12 c-12 position_payment_container_title">Thành phố Hồ Chí Minh</div>
                      <div className="col l-6 m-12 c-12 position_payment_container"><div className="position_pay"> <input type="radio" name="positon" /> Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh</div> </div>
                      <div className="col l-6 m-12 c-12 position_payment_container"><div className="position_pay"> <input type="radio" name="positon" /> 95 Trần Thiện Chánh, F12, Q10, HCM</div> </div>
                      
                      <div className="col l-12 m-12 c-12 position_payment_container_title">Hà Nội</div>
                      <div className="col l-6 m-12 c-12 position_payment_container"><div className="position_pay"> <input type="radio" name="positon" /> 53 Thái Hà, Trung Liệt, Đống Đa, Hà Nội</div> </div>
                    </div> :

                    <div className="row no-gutters"> 
                      <div className="col l-6 m-12 c-12">
                        <LocationForm></LocationForm>
                          {/* <div className="custom_text_payment">Tỉnh / Thành phố</div>
                          <input className="custom_input_payment" type="text" name="" id="" placeholder="Tỉnh / Thành phố" />
                          <div className="custom_text_payment">Quận / Huyện</div>
                          <input className="custom_input_payment" type="text" name="" id="" placeholder="Quận / Huyện" />
                          <div className="custom_text_payment">Phường / Xã</div>
                          <input className="custom_input_payment" type="text" name="" id="" placeholder="Phường / Xã" /> */}
                          <div className="custom_text_payment">Địa chỉ cụ thể</div>
                          <input className="custom_input_payment" type="text" name="" id="" placeholder="Địa chỉ cụ thể" />
                          <span className="Detail-custom-text-content">Ví dụ: 1205 E1, Gold Park, 122, Phố Trung Kính</span>
                         <div className="btn_submit_positon"><button>Lưu địa chỉ</button></div> 
                         <i class="fas fa-truck-moving"></i> <span>Nhập tỉnh/thành phố, quận/huyện để xem <b>phí vận chuyển</b>  và <b>thời gian giao hàng</b> </span>
                      </div>

                      <div className="col l-6 m-12 c-12">
                          <img src="./image/payment.png" alt="" />
                      </div>
                    </div>
                    }

                    

                    </div>
                </div>
            </div>
            <CartResult
            TotalInCart={cart.cartItem}>    
            </CartResult>

        </div>
        
      </div>
    </div>
  );
}

export default Payment;
