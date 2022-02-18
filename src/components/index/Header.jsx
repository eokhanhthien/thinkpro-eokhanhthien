import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import queryString from "query-string"
import postApi from '../../api/postApi';
import SearchItem from "../SearchItem/SearchItem";
import { connect } from "react-redux";
import { currencyFormat } from "../Functional/FormatNumber";

function Header(props) {
  const [ScrollDown, setScrollDown] = useState(false);
  const [isLoading, SetisLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const typingTimeoutRef = useRef(null)
  
  const [FilterLaptop, SetFilterLaptop] = useState([]);

  const [filters , setFilters]  = useState({
    name_like:'',
  })

  useEffect(() => {
          (async function () {
          // _limit=10&_page=1
            const paramsString = queryString.stringify(filters)
            // console.log(paramsString);
            let dbLaptop = await postApi.getAll(`/filters?${paramsString}`, {
              _start: 20,
              _limit: 10,
            })
      
            SetFilterLaptop(dbLaptop)
              if (dbLaptop) {
                SetisLoading(true);
              }
        })();


    //----------------------Sự kiện cho thanh Header BEGIN ----------------------
    var lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // console.log("dow");
        setScrollDown(true)
      } else {
        // console.log("up");
        setScrollDown(false)
      }
      lastScrollTop = st <= 0 ? 0 : st;
    });
 //----------------------Sự kiện cho thanh Header END ----------------------

    var Header_search_focus = document.querySelector(".Header-search-focus")
    var Header_search = document.querySelector(".Header-search")
    var Modal_search = document.querySelector(".Modal_search")

    Header_search.onclick  = () => {
    Header_search_focus.classList.add("open_search")
    Modal_search.classList.add("open_search")
    }

    Modal_search.onclick  = () => {
    Header_search_focus.classList.remove("open_search")
    Modal_search.classList.remove("open_search")
    }

  }, [filters]);

  
  function handleSearchTermChange(e) {
    if(typingTimeoutRef.current){
      clearTimeout(typingTimeoutRef.current)
    };

   typingTimeoutRef.current = setTimeout(()=>{
      setFilters({
      name_like :e.target.value
      })
  },300)
  }

  function showSumProduct(cart) {
    var sumProduct=0;
    if(cart.length>0){
      for(var i=0;i< cart.length;i++){
        sumProduct+= cart[i].quantity;
      }
    }
    return sumProduct; 
}

function showSumMoney(cart) {
  var sum=0;
  if(cart.length>0){
    for(var i=0;i< cart.length;i++){
      sum+=cart[i].product.price * cart[i].quantity;
    }
  }
  return sum; 
}


  return (
    <div className={ScrollDown ? "Header Header-down" : "Header Header-up"}>
      <div className="Container grid wide">
        <div className="row">
          <NavLink to="/" className="col l-2 m-4 c-4 mt-15 position-left-img">
            <img src="../../image/logo.svg" alt="" />
          </NavLink>
          <div className="col l-3 position-left-option">
          <NavLink to="/PageAllLaptop" className="Header-option">
              Laptop
          </NavLink>
          <NavLink to="/PageAllPc" className="Header-option">
              PC
          </NavLink>
          <NavLink to="/PageAllAccessory" className="Header-option">
              Phụ Kiện
          </NavLink>

          </div>
          <div className="col l-4 Header-search-container">
            <input
              className="Header-search"
              placeholder="Tìm kiếm trên ThinkPro"
              type="text"
              onChange={handleSearchTermChange}
            />
            <i className="far fa-search Header-search-icon" />
  
          <div className="Header-search-focus">

          {
            FilterLaptop.length>0 ? 
            FilterLaptop.map((item,index) =>{
              return ( <SearchItem
              key={index}
              name={item.name}
              thumbnail={item.thumbnail}
              cur_price={item.cur_price}
              cur_sku={item.cur_sku}
              shared_url={item.shared_url}
              ></SearchItem>)
            }) 
            :
            <>
            <img className="img-not-found-product" src="../../image/Product-Not-Found.png" alt="" />
            <div>Không tìm thấy sản phẩm thích hợp !</div>
            </>
          }
            
           
    

            </div>

            <div className="Modal_search">
            </div>

          </div>
          <div className="col l-3 m-8 c-8 position-right-option">
            <div className="row space-icon-header">
            <NavLink to="/PageNews" className="icon-header-option">
                <i className="far fa-bell position-right-option-icon" /> 
            </NavLink>

              
              <NavLink to="/Cart" className="icon-header-option-add-cart ">
                <i className="fal fa-cart-plus position-right-option-icon icon_news" />
                <div className="Cart-hover-list">
                  <span className="Number-products">{showSumProduct(props.Cart)} sản phẩm </span>
                  <span>trong giỏ hàng</span>
                  
                <div className="Setheight_Header_product-cart">
                  {
                    props.Cart.map((item,index)=>{
                      return (
                      <div key={index} className="row Header_product-cart">
                        <div className="col l-3 m-3 c-3">
                      <div className="Cart-hover-list-size-img">
                        <img src={`https://lumen.thinkpro.vn/${item.product.thumbnail}`} alt="" />{" "}
                      </div>
                    </div>
                    <div className="col l-9 m-9 c-9">
                      <div className="Cart-number-products-name">
                        {item.product.name}
                      </div>
                      <div className="Cart-number-products-name-price">
                        {currencyFormat(item.product.price)} ₫ x {item.quantity}
                      </div>
                    </div>
                    </div>
                      )
                    })
                  }
                  </div>
                  <div className="row">
                     <div className="col l-12">
                     <NavLink to="/Cart"> 
                       <button className="Cart-btn-add-products">
                        Giỏ hàng: {currencyFormat(showSumMoney(props.Cart))} ₫
                      </button>
                      </NavLink>
                    </div>
                  </div>
                  
                </div>
              </NavLink>

              <div className="icon-header-option">
                <i className="far fa-user-circle position-right-option-icon" />
              </div>
            </div>
            {/* <a class="Header-icon" href=""><i class="far fa-bell"></i></a>
                <a class="Header-icon" href=""><i class="fal fa-cart-plus"></i></a>
                <a class="Header-icon" href=""><i class="far fa-user-circle"></i></a> */}
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

export default connect(mapStateToProps, null, null)(Header)



