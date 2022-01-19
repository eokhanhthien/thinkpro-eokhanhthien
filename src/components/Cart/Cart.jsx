import React from 'react';
import './Cart.css'

function Cart(props) {
    return (
<div className="grid wide">
  <div className="row mt-50">
    <div className="col l-1 dis-padding">
      <div className=" Size-logo">
        <img src="./image/logosmall.svg" alt="" /> 
      </div>
    </div>
    <div className="col l-1"><span>/ Laptop</span></div>
  </div>
  <div className="col l-12 Content-2-container-reduce-price"><h1>Giỏ hàng (1)</h1></div>
  <div className="row no-gutters">
    <div className="col l-9">
      <div className="row no-gutters Add-cart-boder">
        <div className="col l-3 "> 
          <div className="Add-cart-size-img">
            <img src="./image/pc1.jpg" alt="" />
          </div> 
        </div>
        <div className="col l-7 ">
          <h3>Dell XPS 15 9510</h3>
          <div className="Add-cart-custom-text">SKU: XPS951006NS - Frost White</div>
          <div className="Add-cart-custom-text">x 1</div>
          <div className="Add-cart-custom-text">Xóa</div>
          <div className="Add-cart-custom-text Add-cart-custom-color">Khuyến mại <i className="far fa-angle-down" /></div>
        </div>
        <div className="col l-2 ">
          <h3>53.990.000 ₫</h3>
          <div className="Add-cart-custom-text-underline">64.990.000 ₫</div>
        </div>
      </div>
    </div>
    <div className="col l-3 Add-cart-boder">
      <div className="row no-gutters  Add-cart-price-border">
        <div className="col l-4 Add-cart-price">Tạm tính:</div>
        <div className="col l-o-4">53.990.000 ₫</div>
      </div>
      <div className="row no-gutters Add-cart-price-border">
        <div className="col l-4 Add-cart-price">Thành tiền:</div>
        <div className="col l-o-3 Add-cart-btn-price-text-custom">53.990.000 ₫</div>
      </div>
      <div className="Add-cart-btn-center">
        <div><button className="Add-cart-btn-order">Tiến hành đặt hàng</button></div> 
        <div><button className="Add-cart-btn-installment">Tính trả góp</button></div>
      </div>
    </div>
  </div>
</div>

    );
}

export default Cart;