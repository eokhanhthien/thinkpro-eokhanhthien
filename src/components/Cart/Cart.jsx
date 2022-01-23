import React from 'react';
import { connect } from 'react-redux';
import './Cart.css'
import CartItem from './CartItem';
import CartResult from "./CartResult"

function Cart(props) {

  function showSumProduct(cart) {
    var sumProduct=0;
    if(cart.length>0){
      for(var i=0;i< cart.length;i++){
        sumProduct+= cart[i].quantity;
      }
    }
    return sumProduct; 
}

    return (
<div className="Cart_container">
<div className="grid wide">
  <div className="row mt-50">
    <div className="col l-1 dis-padding">
      <div className=" Size-logo">
        <img src="./image/logosmall.svg" alt="" /> 
      </div>
    </div>
    <div className="col l-1"><span>/ Cart</span></div>
  </div>
  <div className="col l-12 Content-2-container-reduce-price"><h1>Giỏ hàng ({showSumProduct(props.Cart)})</h1></div>
  <div className="row no-gutters">
    <div className="col l-9 m-12 c-12">
    { props.Cart.length > 0 ?
      props.Cart.map((item, index) =>{
       return <CartItem
       key={index}
       oneProduct={item.product}
       name={item.product.name}
       price={item.product.price}
       thumbnail={item.product.thumbnail}
       sku={item.product.sku}
       quantity = {item.quantity}
       ></CartItem>

      })
      :
           <div className='Container-img-not-cart-empty'>
            <img className="img-not-cart-empty" src="../../image/cart-empty.png" alt="" />
            <div className="text-not-cart-empty">Không có sản phẩm trong giỏ hàng !</div>
            </div>
    }  
    </div>

  <CartResult
  TotalInCart={props.Cart}
  ></CartResult>

    
  </div>
</div>
</div>
    );
}

const mapStateToProps = (state, ownProps) => {
  return {
    Cart: state.Cart
  }
}

export default connect(mapStateToProps, null, null)(Cart)

