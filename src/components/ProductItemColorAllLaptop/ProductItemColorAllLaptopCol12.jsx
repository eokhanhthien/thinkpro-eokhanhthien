import React from 'react';
import "./../PageAllLaptop/PageAllLaptop.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";
import { currencyFormat } from '../Functional/FormatNumber';

function ProductItemColorAllLaptopCol12(props) {
    
    return (
        <div className="col l-12 c-12 m-12 Content-2-container-product-col-12">
        <div className="row no-gutters">
          <div className="col l-3 c-3 m-3">
          <NavLink to={`/DetailLaptop/${props.shared_url}/${props.cur_sku}`}>
            <div className="Content-2-container-product">
              <img src={`https://lumen.thinkpro.vn/${props.thumbnail}`} alt="" />
            </div>
        </NavLink>
          </div>
          <div className="col l-5 m-5 c-5">
            <div className="Content-2-container-product-item-name">{props.name}</div>
            <div className="Content-2-container-product-item-gift">{props.number_options} cấu hình tùy chọn</div>
         {  props.options &&  <div className="row no-gutters">
                {
                   props.options.map((item, index) => {
                       return (<div key={index} className="Content-2-container-product-info-detail-laptop-item-size-img mt-50 mt-r-10"> <img src={`https://lumen.thinkpro.vn/${item.thumbnail}`} /></div> )
                   }) 
                }
              {/* <div className="Content-2-container-product-info-detail-laptop-item-size-img mt-50 mt-r-10"> <img src="./image/logo.svg" alt="" /></div>
              <div className="Content-2-container-product-info-detail-laptop-item-size-img mt-50 mt-r-10"> <img src="./image/logo.svg" alt="" /></div> */}
            </div>}
          </div>
          <div className="col l-4 m-4 c-4">
            <span>Giá từ:</span> <span className="Content-2-container-product-item-price">{currencyFormat(props.cur_price)} ₫</span>
            <div className="Content-2-container-product-item-gift Detail-sticky-price-sale">21.990.000 ₫</div>
            <div className="Content-2-container-product-item-gift"><i className="fal fa-gift gift-icon" /> Quà tặng kèm</div>
          </div>
        </div>
      </div>
    );
}

export default ProductItemColorAllLaptopCol12;