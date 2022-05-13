import React, { useEffect } from 'react';
import "./Btn_loading.css"


function Btn_loading(props) {
    useEffect (()=>{
        const loginBtn = document.getElementById("login-btn");

        loginBtn.addEventListener('click', () => {
          // Show loader on button click
          loginBtn.classList.add("loading");
          // Hide loader after success/failure - here it will hide after 2seconds
          setTimeout(() => loginBtn.classList.remove("loading"), 700);
        });
    },[])
    return (
        <div>
            <button className="action-btn" id="login-btn">
            <i className="fal fa-cart-plus position-right-option-icon"> </i>
            <span >Thêm vào giỏ hàng</span>
            </button>
        </div>
    );
}

export default Btn_loading;