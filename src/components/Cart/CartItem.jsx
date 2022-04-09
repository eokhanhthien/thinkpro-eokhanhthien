import React from 'react';
import { currencyFormat } from "../Functional/FormatNumber";
// import { connect } from 'react-redux';
// import { actRemoveProductInCart} from "../../redux/actions/index.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { removeFromCart, decreaseCart, addToCart } from '../../reduxtoolkit/cartSlide';

function CartItem(props) {
  const dispatch = useDispatch();

    function onDeleteProduct(item) {
        // props.onDeleteProduct(item);
        // dispatch(removeFromCart(item))
        props.handleOpenModal(true);
        props.itemDeleteFromCart(item)
    }

    function handleDecrease(item){
      dispatch(decreaseCart(item))
    }

    function handleIncrease(item){
      dispatch(addToCart(item))
    }
    return (
        <div className="row no-gutters Add-cart-boder">
        <div className="col l-3 m-3 c-3"> 
        <NavLink to={`/DetailLaptop/${props.shared_url}/${props.cur_sku}`}> <div className="Add-cart-size-img">
            <img src={`https://lumen.thinkpro.vn/${props.thumbnail}`} alt="" />
          </div> 
        </NavLink> 
        </div>
        <div className="col l-7 m-6 c-6">
          <h3>{props.name}</h3>
          <div className="Add-cart-custom-text">SKU: {props.sku}</div>
          <div className="Add-cart-custom-text">x <button className='btnChangequantityCart' onClick={()=>handleDecrease(props.oneProduct)}> -</button> {props.cartQuantity} <button className='btnChangequantityCart' onClick={()=>handleIncrease(props.oneProduct)}>+</button></div>
          <div  className="Add-cart-custom-text"><span onClick={()=>onDeleteProduct(props.oneProduct)}>Xóa</span> </div>
          <div className="Add-cart-custom-text Add-cart-custom-color">Khuyến mại <i className="far fa-angle-down" /></div>
        </div>
        <div className="col l-2 m-3 c-3">
          <h3>{currencyFormat(props.price)} ₫</h3>
          <div className="Add-cart-custom-text-underline">{currencyFormat(props.price)} ₫</div>
        </div>
      </div>
    );
}


// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//       onDeleteProduct: (item) => {
//         dispatch(actRemoveProductInCart(item))
//       }
//     }
//   }

// export default connect(null, mapDispatchToProps, null)(CartItem)


export default  CartItem