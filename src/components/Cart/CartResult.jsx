import React from 'react';
import { currencyFormat } from "../Functional/FormatNumber";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
function CartResult(props) {
    // console.log(props.TotalInCart);

    function showSumMoney(cart) {
        var sum=0;
        if(cart.length>0){
          for(var i=0;i< cart.length;i++){
            sum+=cart[i].price * cart[i].cartQuantity;
          }
        }
        return sum; 
    }

    return (
        <div className="col l-3 m-12 c-12 Add-cart-boder">
        <div className="row no-gutters  Add-cart-price-border">
          <div className="col l-6 m-6 c-6 Add-cart-price">Tạm tính:</div>
          <div className="col l-6 m-6 c-6">{currencyFormat(showSumMoney(props.TotalInCart))} ₫</div>
        </div>
        <div className="row no-gutters Add-cart-price-border">
          <div className="col l-6 m-6 c-6 Add-cart-price">Thành tiền:</div>
          <div className="col l-6 m-6 c-6 Add-cart-btn-price-text-custom">{currencyFormat(showSumMoney(props.TotalInCart))} ₫</div>
        </div>
        <div className="Add-cart-btn-center">
        <NavLink to="/Payment" ><button className="Add-cart-btn-order">Tiến hành đặt hàng</button></NavLink> 
          <div><button className="Add-cart-btn-installment">Tính trả góp</button></div>
        </div>
      </div>
    );
}

export default CartResult;