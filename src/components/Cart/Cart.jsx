import React from 'react';
import { connect, useSelector } from 'react-redux';
import './Cart.css'
import CartItem from './CartItem';
import CartResult from "./CartResult"

function Cart(props) {
  window.scrollTo(0, 0)
  function showSumProduct(cart) {
    var sumProduct=0;
    if(cart.cartItem.length>0){
      for(var i=0;i< cart.cartItem.length;i++){
        sumProduct+= cart.cartItem[i].cartQuantity;
      }
    }
    return sumProduct; 
}
const cart = useSelector(state => state.carts)

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
  <div className="col l-12 Content-2-container-reduce-price"><h1>Giỏ hàng ({showSumProduct(cart)})</h1></div>
  <div className="row no-gutters">
    <div className="col l-9 m-12 c-12">
    { cart.cartItem.length > 0 ?
     cart.cartItem.map((item, index) =>{
       return <CartItem
       key={index}
       oneProduct={item}
       name={item.name}
       price={item.price}
       thumbnail={item.thumbnail}
       sku={item.sku}
       cartQuantity = {item.cartQuantity}
       shared_url = {item.shared_url}
       cur_sku={item.cur_sku}
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
  TotalInCart={cart.cartItem}
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

