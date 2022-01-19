import React from "react";
import { currencyFormat } from "../Functional/FormatNumber";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";

function SearchItem(props) {
  return (
    <div className="row Header-search-focus-item no-gutters">
      <div className="col l-3">
    <NavLink to={`/DetailLaptop/${props.shared_url}/${props.cur_sku}`}>
        <div className="Cart-hover-list-size-img">
          <img src={`https://lumen.thinkpro.vn/${props.thumbnail}`} />
        </div>
    </NavLink>
      </div>
      <div className="col l-5">
        <div className="Cart-number-products-name">{props.name}</div>
        <div className="Cart-number-products-name-price">{currencyFormat(props.cur_price)} ₫ x 1</div>
      </div>
      <div className="col l-4">
        <button className="Cart-btn-add-products">Thêm</button>
      </div>
    </div>
  );
}

export default SearchItem;
