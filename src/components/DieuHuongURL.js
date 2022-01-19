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


function DieuHuongURL(props) {
    return (
     <Routes>
        <Route exact path="" element={<Home></Home>} />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Cart" element={<Cart/>} />
        <Route exact path="/PageAllLaptop" element={<PageAllLaptop/>} />
        <Route exact path="/PageAllPc" element={<PageAllPc/>} />
        <Route exact path="/PageAllAccessory" element={<PageAllAccessory/>} />
        <Route exact path='/DetailLaptop/:id/:option' element={<DetailLaptop/>} />
     </Routes>
    );
}

export default DieuHuongURL;