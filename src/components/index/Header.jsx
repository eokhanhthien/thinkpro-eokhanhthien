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
import { connect, useSelector } from "react-redux";
import { currencyFormat } from "../Functional/FormatNumber";


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function Header(props) {
  const [ScrollDown, setScrollDown] = useState(false);
  const [isLoading, SetisLoading] = useState(false);
  const [isOpenHeaderNavbar, SetisOpenHeaderNavbar] = useState(false);
  const [isSeachMobile, SetisSeachMobile] = useState(false);
  const [isShowList, SetisShowList] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const typingTimeoutRef = useRef(null)
  
  const [FilterLaptop, SetFilterLaptop] = useState([]);

  const [filters , setFilters]  = useState({
    name_like:'',
  })

  const cart = useSelector(state => state.carts)
// console.log(cart);
  useEffect(() => {
          (async function () {
          // _limit=10&_page=1
            // const paramsString = queryString.stringify(filters)
            const paramsString = parseToParams(filters)

            // console.log(paramsString);
            

            if(filters.name_like===''){
              SetFilterLaptop([]);
            }
            if(filters.name_like){
               let dbLaptop = await postApi.getAll(`/filters?${paramsString}`, {
              _start: 0,
              _limit: 10,
            })
      
            SetFilterLaptop(dbLaptop.data)
              if (dbLaptop) {
                SetisLoading(true);
              }
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
      name_like :e.target.value.replace(/\+/g, ' ')   
      // replace(/\+/g, ' ')  chuyển khoảng trắng sang dấu cộng
      })
  },300)

  
  }

  function showSumProduct(cart) {
    var sumProduct=0;
    if(cart.cartItem.length>0){
      for(var i=0;i< cart.cartItem.length;i++){
        sumProduct+= cart.cartItem[i].cartQuantity;
      }
    }
    return sumProduct; 
}

function showSumMoney(cart) {
  var sum=0;
  if(cart.cartItem.length>0){
    for(var i=0;i< cart.cartItem.length;i++){
      sum+=cart.cartItem[i].price * cart.cartItem[i].cartQuantity;
    }
  }
  return sum; 
}

  
const user = useSelector(state => state.users)
// console.log(user.userInfo._delegate)

function handleLogout() {
  firebase.auth().signOut();
  window.location.reload();
}

function handleOpenHeaderNavbar(value) {
  SetisOpenHeaderNavbar(value)
}

function parseToParams(filter) {
  let array =[];
  for(const key in filter){
    if(filter[key]){
      array.push(`${key}=${filter[key]}`)
    }
  }
  return array.join('&')  
}

function handleIsSeachMobile(value) {
  SetisSeachMobile(value)
}

function showList(value) {
  SetisShowList(value)
}

function handleModalMobileSearch() {
  handleIsSeachMobile(false)
  SetisShowList(false) 
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
          <div className="col l-4 Header-search-container hidden-search">
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

          <div onClick={()=>handleIsSeachMobile(true)} className="Search-for-mobile ">
              
            <input onClick={()=>showList(true)} onChange={handleSearchTermChange} className={isSeachMobile ? "icon-header-option-mobile-search border-search mobile-search-active" : "icon-header-option-mobile-search "}/>
            <i className="fas fa-search position-right-option-icon iconsearch-Header-mobile"></i>
            
          <div className={isShowList ? "List-search-mobile List-search-mobile-active": "List-search-mobile"}>

          {
            FilterLaptop.length>0 ? 
            FilterLaptop.map((item,index) =>{
              return ( 
                <div key={index} className="item-search-mobile">
                    
                    <div className="row">
                   <NavLink to={`/DetailLaptop/${item.shared_url}/${item.cur_sku}`}> 
                    <div className="col l-4 m-4 c-4">
                       <div className="item-search-mobile-img">
                       <img src={`https://lumen.thinkpro.vn/${item.thumbnail}`} />
                       </div>
                     </div>
                      </NavLink> 
                     <div className="col l-8 m-8 c-8 item-search-mobile-name"><NavLink to={`/DetailLaptop/${item.shared_url}/${item.cur_sku}`}> {item.name} </NavLink> </div>
                   </div>
                  
                 
                   
                 </div> )
            }) 
            :
            <>
            <img className="img-not-found-product" src="../../image/Product-Not-Found.png" alt="" />
            <div  className="Text-no-product">Không tìm thấy sản phẩm thích hợp !</div>
            </>
          }     

           
           


          </div>
               <div  onClick={()=>handleModalMobileSearch()} className={isShowList ?"Modal_search-mobile open_search":"Modal_search-mobile"}> </div>
            </div>  

              <NavLink to="/Cart" className="icon-header-option-add-cart ">
                <i className="fal fa-cart-plus position-right-option-icon icon_news" />
                {showSumProduct(cart)>0 && <div className="Number_product_cart">{showSumProduct(cart)}</div>}
                <div className="Cart-hover-list">
                  <span className="Number-products">{showSumProduct(cart)} sản phẩm </span>
                  <span>trong giỏ hàng</span>
                  
                <div className="Setheight_Header_product-cart">
                  {
                    cart.cartItem.map((item,index)=>{
                      return (
                      <div key={index} className="row Header_product-cart">
                        <div className="col l-3 m-3 c-3">
                      <div className="Cart-hover-list-size-img">
                        <img src={`https://lumen.thinkpro.vn/${item.thumbnail}`} alt="" />{" "}
                      </div>
                    </div>
                    <div className="col l-9 m-9 c-9">
                      <div className="Cart-number-products-name">
                        {item.name}
                      </div>
                      <div className="Cart-number-products-name-price">
                        {currencyFormat(item.price)} ₫ x {item.cartQuantity}
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
                       <button className="Cart-btn-add-products-total">
                        Giỏ hàng: {currencyFormat(showSumMoney(cart))} ₫
                      </button>
                      </NavLink>
                    </div>
                  </div>
                  
                </div>
              </NavLink>

              <div onClick={()=>handleOpenHeaderNavbar(true)} className="icon-header-option-mobile ">
                <i className="fas fa-bars position-right-option-icon"></i>
              </div>

             {user.userInfo._delegate ? <div className="icon-header-option">
             <i className="far fa-user-circle position-right-option-icon" />
                 <div className="User_login">
                  <h2 >Tài khoản </h2>
                  <div className="row">
                    <div className="col l-4"> <div className="ImgURL_user " >{<img src={user.userInfo._delegate.photoURL} alt="" /> }</div></div>
                    <div className="col l-8"> <div> <span className="info_text_user_name "> {user.userInfo._delegate.displayName}</span></div></div>

                 
                  </div>
                  {/* <span className="info_text_user">Email: {user.userInfo._delegate.email}</span> */}
                  <div className="row no-gutters">
                  <div className="col l-2 m-2 c-2"><i className="fas fa-user-alt icon_info_user_login"></i></div>
                  <div className="col l-8 m-8 c-8"> Thông tin tài khoản</div>
                  <div className="col l-2 m-2 c-2"><i className="fas fa-angle-right custom_icon_right"></i></div>
                  </div>
                  <div className="row no-gutters">
                  <div className="col l-2 m-2 c-2"><i className="fas fa-box-heart icon_info_user_login"></i></div>
                  <div className="col l-8 m-8 c-8"> Yêu thích</div>
                  <div className="col l-2 m-2 c-2"><i className="fas fa-angle-right custom_icon_right"></i></div>
                  </div>
                  <div className="row no-gutters">
                  <div className="col l-2 m-2 c-2"><i className="fas fa-map-marker-alt icon_info_user_login"></i></div>
                  <div className="col l-8 m-8 c-8"> Thông tin địa chỉ</div>
                  <div className="col l-2 m-2 c-2"><i className="fas fa-angle-right custom_icon_right"></i></div>
                  </div>
                  <div className="row no-gutters">
                  <div className="col l-2 m-2 c-2"><i className="fas fa-shopping-cart icon_info_user_login"></i></div>
                  <div className="col l-8 m-8 c-8"> Lịch sử mua hàng</div>
                  <div className="col l-2 m-2 c-2"><i className="fas fa-angle-right custom_icon_right"></i></div>
                  </div>

                <div>  <button onClick={() => handleLogout()}><i className="fas fa-sign-out icon_login_user"></i>Đăng xuất</button></div>

                </div>
              </div>
             :
             <div className="icon-header-option">
                <i className="far fa-user-circle position-right-option-icon" />
                <div className="User_login">
                <h2 >Tài khoản </h2>
                  <div> <NavLink to="/Login"> <button> <i className="fal fa-sign-in-alt icon_login_user"></i>Đăng nhập</button></NavLink></div>
                  <p className="User_logup">Chưa có tài khoản? <a>Đăng ký</a> </p>
                </div>
              </div>  
              
              }

            </div>
            {/* <a className="Header-icon" href=""><i class="far fa-bell"></i></a>
                <a class="Header-icon" href=""><i class="fal fa-cart-plus"></i></a>
                <a class="Header-icon" href=""><i class="far fa-user-circle"></i></a> */}
          </div>
        </div>
      </div>
      <div className={isOpenHeaderNavbar ? "Header-mobile-navbar Header-mobile-navbar-active":"Header-mobile-navbar"}>
      <div className="Header-mobile-navbar-container">
        <NavLink to="/"><div onClick={()=>handleOpenHeaderNavbar(false)} className="Header-mobile-navbar-page"><i className="fas fa-home-lg-alt"></i> Trang chủ <i className="fas fa-angle-right Header-mobile-navbar-page-icon"></i></div></NavLink>
        <NavLink to="/PageAllLaptop"><div onClick={()=>handleOpenHeaderNavbar(false)} className="Header-mobile-navbar-page"><i className="fas fa-laptop"></i> Laptop<i className="fas fa-angle-right Header-mobile-navbar-page-icon"></i></div> </NavLink>
        <NavLink to="/PageAllPC"><div onClick={()=>handleOpenHeaderNavbar(false)} className="Header-mobile-navbar-page"><i className="fas fa-desktop"></i> PC <i className="fas fa-angle-right Header-mobile-navbar-page-icon"></i></div></NavLink>
        <NavLink to="/PageAllAccessory"><div onClick={()=>handleOpenHeaderNavbar(false)} className="Header-mobile-navbar-page"><i className="fas fa-keyboard"></i> Bàn phím <i className="fas fa-angle-right Header-mobile-navbar-page-icon"></i></div></NavLink>
        <NavLink to="/PageAllMouse"><div onClick={()=>handleOpenHeaderNavbar(false)} className="Header-mobile-navbar-page"><i className="fas fa-mouse"></i> Chuột <i className="fas fa-angle-right Header-mobile-navbar-page-icon"></i></div></NavLink>
        <NavLink to="/PageAllBalo"><div onClick={()=>handleOpenHeaderNavbar(false)} className="Header-mobile-navbar-page"><i className="fas fa-backpack"></i> Balo <i className="fas fa-angle-right Header-mobile-navbar-page-icon"></i></div></NavLink>
      </div>
      <div className="Header-mobile-navbar-container">
      <NavLink to="/Login"> <div onClick={()=>handleOpenHeaderNavbar(false)} className="Header-mobile-navbar-page">Đăng nhập </div></NavLink>
      <NavLink to="/Registration"><div onClick={()=>handleOpenHeaderNavbar(false)} className="Header-mobile-navbar-page">Đăng ký </div></NavLink>
      <NavLink to="/PageNews"><div onClick={()=>handleOpenHeaderNavbar(false)} className="Header-mobile-navbar-page"><i className="fas fa-newspaper"></i> Tin tức <i className="fas fa-angle-right Header-mobile-navbar-page-icon"></i></div></NavLink>
      </div>

      <div className="Header-mobile-navbar-Hotline">
      <div className="Detail-sticky-hotline">Hotline</div>
      <div className="Detail-sticky-hotline-number">1900.63.3579</div>
      </div>
      </div>
      <div onClick={()=>handleOpenHeaderNavbar(false)} className={isOpenHeaderNavbar ?"overlay overlay-active":"overlay"}></div>

    </div>
  );
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     Cart: state.Cart
//   }
// }

// export default connect(mapStateToProps, null, null)(Header)


export default Header
