import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import './Cart.css'
import CartItem from './CartItem';
import CartResult from "./CartResult"
import { removeFromCart } from '../../reduxtoolkit/cartSlide';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Cart(props) {
  const dispatch = useDispatch();

  const [isOpenModal,setisOpenModal] = useState(false);
  const [item,setItem] = useState();

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

function handleOpenModal(value){
  setisOpenModal(value);
}

function itemDeleteFromCart(item) {
  // console.log(item)
  setItem(item)
  // dispatch(removeFromCart(item))
}

function handleDeleteItemFromCart(item) {
  dispatch(removeFromCart(item))
  handleOpenModal(false)
}

// console.log(cart.cartItem.length)
    return (
<div className="Cart_container">
<div className="grid wide">
  <div className="row mt-50">
    <div className="col l-1 dis-padding ">
      <div className=" Size-logo">
        <img src="./image/logosmall.svg" alt="" /> 
      </div>
    </div>
    <div className="col l-1"><span>/ Cart</span></div>
  </div>
  <div className="col l-12 Content-2-container-reduce-price"><h1>Giỏ hàng ({showSumProduct(cart)})</h1></div>
  <div className="row no-gutters">
    <div className="col l-9 m-12 c-12">
    { cart.cartItem.length > 0 &&
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
       handleOpenModal={handleOpenModal}
       itemDeleteFromCart={itemDeleteFromCart}

       ></CartItem>

      })
     
    }  
    </div>

{
  cart.cartItem.length ===0 && 
          <div className=' col l-12 m-12 c-12'>
            <div className='Container-img-not-cart-empty '>
              <img className="img-not-cart-empty" src="../../image/cart-empty.png" alt="" />
            <div className="text-not-cart-empty">Không có sản phẩm trong giỏ hàng !</div>
            </div>
            
        </div>
}

 { cart.cartItem.length >0 &&<CartResult
  TotalInCart={cart.cartItem}
  ></CartResult>
}
    
{ cart.cartItem.length ==0 &&
<div className='col l-12 m-12 c-12 '>
  <div className='btn-center'><NavLink to="/" >
   <button className="Add-cart-btn-order">Tiếp tục mua hàng</button>
 </NavLink>  
 </div>

</div>
}
  </div>

  <div className={isOpenModal ? "Modal_Cart_overlay isActiveModalcart" : "Modal_Cart_overlay"}></div>
<div className={isOpenModal ? "Modal_Cart_container isActiveModalcart" : "Modal_Cart_container"}>
    <div><i className="fas fa-exclamation-circle icon_Modal_cart"></i></div>
    <div className='text_Modal_cart'>Bạn có chắc chắn muốn xóa sản phẩm khỏi giỏ hàng không?</div>
    <div className="row no-gutters  btn_Modal_cart">
      <button className='btn-item-option delete_cart' onClick={()=>handleDeleteItemFromCart(item)}>Xóa</button>
      <button onClick={()=>handleOpenModal(false)} className='btn-item-option no_delaete_cart'>Hủy</button>
    </div>
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

