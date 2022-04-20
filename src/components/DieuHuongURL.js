import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Cart from './Cart/Cart';
import DetailLaptop from './DetailLaptop/DetailLaptop';
import Home from './index/Home';
import PageAllAccessory from './PageAllAccessory/PageAllAccessory';
import PageAllLaptop from './PageAllLaptop/PageAllLaptop';
import PageAllPc from './PageAllPc/PageAllPc';
import PageAllMouse from './PageAllMouse/PageAllMouse.jsx'
import PageAllBalo from './PageAllBalo/PageAllBalo.jsx'
import News from './PageNews/News';
import NewsDetail from './NewsDetail/NewsDetail';
import Login from './Auth/Login';
import Registration from './Auth/Registration';
import Payment from './Payment/Payment';

function DieuHuongURL(props) {
    return (
     <Routes>
        <Route exact path="" element={<Home></Home>} />
        <Route exact path="/" element={<Home/>} />
         <Route exact path="/Cart" element={<Cart/>} />
         <Route exact path="/Payment" element={<Payment/>} />
       <Route exact path="/PageAllLaptop" element={<PageAllLaptop/>} />
        <Route exact path="/PageAllPc" element={<PageAllPc/>} />
        <Route exact path="/PageAllAccessory" element={<PageAllAccessory/>} />
        <Route exact path="/PageAllMouse" element={<PageAllMouse/>} />
        <Route exact path="/PageAllBalo" element={<PageAllBalo/>} />
        <Route exact path="/PageNews" element={<News/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/Registration" element={<Registration/>} /> 
        <Route exact path='/PageNewsDetail/:id' element={<NewsDetail/>} />
        <Route exact path='/DetailLaptop/:id/:option' element={<DetailLaptop/>} />
     </Routes>
    );
}

export default DieuHuongURL;