import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { currencyFormat } from "../Functional/FormatNumber";

// Giống như ProductItem nhưng bỏ col l-2-4 ... để full swiper
function ProductItem(props) {
  return (
    <div className="Content-2-container-product-item">  
      <NavLink to={`/DetailLaptop/${props.shared_url}/${props.cur_sku}`}>
        <div className="Content-2-container-product">
          <img src={`https://lumen.thinkpro.vn/${props.thumbnail}`} alt="" />
        </div>
      </NavLink>
      <div className="Content-2-container-product-info">
        <div className="Content-2-container-product-item-name">
          {props.name}
        </div>
        <div className="Content-2-container-product-item-small-text">
          SKU: {props.cur_sku}
        </div>
        <div className="Content-2-container-product-item-price">
          {currencyFormat(props.cur_price)} ₫
        </div>

        <div className="Content-2-container-product-item-gift">
          <i className="fal fa-gift gift-icon" /> Quà tặng kèm
        </div>
      </div>
      <div className="Content-2-container-product-info-detail">
        <div className="Content-2-container-product-info-detail-item">
          {" "}
          Intel Core i7 11800H, RAM 16GB, 1TB m.2 NVMe, 15.6" 3.5K OLED (3456 x
          2160), Nvidia Geforce RTX 3050Ti 4GB, 86Wh, Frost White
        </div>
        <button className="add-cart">Thêm vào giỏ hàng</button>
        <button className="add-compare">Thêm vào so sánh</button>
      </div>
    </div>
  );
}

export default ProductItem;
