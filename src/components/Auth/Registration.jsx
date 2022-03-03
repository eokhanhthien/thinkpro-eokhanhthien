import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";

function Registration(props) {
    useEffect (()=>{
        window.scrollTo(0, 0)
        
      },[])

    function getValue(id) {
        return document.getElementById(id).value.trim();
    }

    function showError(error,mess) {
        return document.getElementById(error + "_error").innerHTML = mess;
    }

    function validate() {
        var flag = true;

        //usrenam
        var username = getValue("username");

        if(username == ""){
            flag= false;
            showError("username","Bạn chưa nhập username")
        } 
        else if(username.length < 5){
            flag= false;
            showError("username","Username phải nhiều hơn 5 kí tự")
        }
        else if(!/^([a-zA-Z0-9])+$/.test(username)){
            flag= false;
            showError("username","Username không đúng định dạng")
        }
        else{
            showError("username","");
        }


        // if(username == "" || username.length < 5 || !/[a-zA-Z0-9]/.test(username)){
        //     flag= false;
        //     showError("username","Vui lòng kiểm tra lại username")
        // }


        //password
        var password = getValue("password");
        var repassword = getValue("repassword");
        if(password==""){
                flag = false;
                showError("password","Bạn chưa nhập mật khẩu");
    
            }
           
        if( password.length < 8){
                flag = false;
                showError("password","Mật khẩu phải nhiều hơn 8 kí tụ");        
            }  
        else if(password.length > 8){
                showError("password","");
                } 
        if( password != repassword){
                flag = false;
                showError("repassword","Mật khẩu nhập lại không khớp");
            }  
 
        else{
            showError("password","");
            showError("repassword","");
        }
        // if(password="" || password.length < 8 || password != repassword){
        //     flag = false;
        //     showError("password","Vui lòng kiểm tra lại mật khẩu")

        // }

        //phone
        var phone = getValue("phone");
        if(phone != "" && !/[0-9]{10}/.test(phone)){
            flag = false;
            showError("phone","Số điện thoại không đúng định dạng");
        }
        else{
            showError("phone","");
        }
        //email
        var email= getValue("email");
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!mailformat.test(email)){
            flag = false;
            showError("email","Email không đúng định dạng");
        }
        else{
            showError("email","");
        }
        return flag;
    }

    return (
        <div className="grid wide">
        <div className="row Form_Login_container">
         <div className='col l-4 m-12 c-11 Form_Login'>
                <h2>Đăng ký </h2>
                <div className='title_Form'>Tên đăng nhập</div>
                <input onChange={()=> validate()} className='Form_input'  type="text" name="" id="username" placeholder='Username' />
                <div className='error' id="username_error"></div>

                <div className='title_Form'>Mật khẩu</div>
                <input onChange={()=> validate()} className='Form_input'  type="password" name="" id="password" placeholder='Password' />
                <div className='error' id="password_error"></div>

                <div className='title_Form'>Nhập lại mật khẩu</div>
                <input onChange={()=> validate()} className='Form_input'  type="password" name="" id="repassword" placeholder='Repeat password' />
                <div className='error' id="repassword_error"></div>

                <div className='title_Form'>Email</div>
                <input onChange={()=> validate()} className='Form_input'  type="text" name="" id="email" placeholder='Your email' />
                <div className='error' id="email_error"></div>

               <div className='title_Form'>Số điện thoại</div>
                <input onChange={()=> validate()} className='Form_input'  type="text" name="" id="phone" placeholder='Number phone' />
                <div className='error' id="phone_error"></div>


                <div className='Submit_login' onClick={()=>validate()} > <input type="submit" value="Đăng ký" /></div>
               <div className='Logup_text'>Đã có tài khoản ? <NavLink to="/Login"> Đăng nhập ngay</NavLink></div>
        </div>
        </div>
        </div>
    );
}

export default Registration;