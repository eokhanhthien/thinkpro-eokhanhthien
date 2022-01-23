import React from 'react';
import { currencyFormat } from "../Functional/FormatNumber";
import { connect } from 'react-redux';
import { actRemoveProductInCart} from "../../redux/actions/index.js"

function CartItem(props) {
    function onDeleteProduct(item) {
        props.onDeleteProduct(item);
    }

    return (
        <div className="row no-gutters Add-cart-boder">
        <div className="col l-3 "> 
          <div className="Add-cart-size-img">
            <img src={`https://lumen.thinkpro.vn/${props.thumbnail}`} alt="" />
          </div> 
        </div>
        <div className="col l-7 ">
          <h3>{props.name}</h3>
          <div className="Add-cart-custom-text">SKU: {props.sku}</div>
          <div className="Add-cart-custom-text">x {props.quantity}</div>
          <div onClick={()=>onDeleteProduct(props.oneProduct)} className="Add-cart-custom-text">Xóa</div>
          <div className="Add-cart-custom-text Add-cart-custom-color">Khuyến mại <i className="far fa-angle-down" /></div>
        </div>
        <div className="col l-2 ">
          <h3>{currencyFormat(props.price)} ₫</h3>
          <div className="Add-cart-custom-text-underline">{currencyFormat(props.price)} ₫</div>
        </div>
      </div>
    );
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onDeleteProduct: (item) => {
        dispatch(actRemoveProductInCart(item))
      }
    }
  }

export default connect(null, mapDispatchToProps, null)(CartItem)
