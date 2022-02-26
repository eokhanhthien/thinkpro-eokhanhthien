import React from 'react';
import "./Login.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";

function Login(props) {
    return (
        <div className="grid wide">
        <div className="row Form_Login_container">
         <div className='col l-4 m-12 c-11 Form_Login'>
                <h2>Đăng nhập </h2>
                <div className='title_Form'>Tên đăng nhập</div>
                <input className='Form_input' type="text" name="" id="" placeholder='Username' />
                <div className='title_Form'>Mật khẩu</div>
                <input className='Form_input' type="password" name="" id="" placeholder='Password' />
               <div className='Submit_login'> <input type="submit" value="Đăng nhập" /></div>
               <div className='Logup_text'>Chưa có tài khoản ? <NavLink to="/Registration"> Đăng ký</NavLink> </div>
        </div>
        </div>
        </div>
    );
}


export default Login;