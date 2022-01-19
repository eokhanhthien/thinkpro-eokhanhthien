import React from "react";
import "./ProductItemColorAllLaptop.css";
import { currencyFormat } from "../Functional/FormatNumber";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function ProductItemColor(props) {
  return (
    <div className="col l-3 m-4 c-6 Content-2-container-product-item">
      <NavLink to={`/DetailLaptop/${props.shared_url}/${props.cur_sku}`}>
        <div className="Content-2-container-product">
          <img src={`https://lumen.thinkpro.vn/${props.thumbnail}`} alt="" />
        </div>
      </NavLink>
      <div className="Content-2-container-product-info">
        <div className="Content-2-container-product-item-name">
          {" "}
          {props.name}
        </div>
        <div className="Content-2-container-product-item-small-text">
          SKU: {props.cur_sku}
        </div>
        <div className="Content-2-container-product-item-price">
          {" "}
          {currencyFormat(props.cur_price)} ₫
        </div>
        <div className="Content-2-container-product-item-gift">
          <i className="fal fa-gift gift-icon" /> Quà tặng kèm
        </div>
      </div>
      <div className="Content-2-container-product-info-detail-laptop">
      {props.options &&  <div className="Content-2-container-product-info-detail-laptop-item">
          {props.options[0].color}
        </div>}
        <div className="Content-2-container-product-info-detail-laptop-item-size-img">
        {props.options &&
          <img src={`https://lumen.thinkpro.vn/${props.options[0].thumbnail}`}alt=""/>
        }
        </div>
      </div>
    </div>
  );
}

export default ProductItemColor;
