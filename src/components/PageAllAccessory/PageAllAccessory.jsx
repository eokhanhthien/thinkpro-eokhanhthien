import React, { useState } from 'react';
import { useEffect } from 'react';
import "./PageAllAccessory.css"
import postApi from '../../api/postApi';
import ProductItemColorAllLaptop from "../ProductItemColorAllLaptop/ProductItemColorAllLaptop"
import SkeletonPageAllLapCol12 from '../Functional/Skeletons/SkeletonPageAllLapCol12';
import SkeletonArticle from '../Functional/Skeletons/SkeletonArticle';
import Pagination from '../Functional/Pagination/Pagination';

import queryString from "query-string"
import ProductItemColorAllLaptopCol12 from '../ProductItemColorAllLaptop/ProductItemColorAllLaptopCol12';

function PageAllAccessory(props) {
    const [isLoading, SetisLoading] = useState(false);
    const [FilterLaptop, SetFilterLaptop] = useState([]);
    const [totalLaptop, SettotalLaptop] = useState([]);

    const [isList, SetIsList] = useState(false);

    // Pagination --- BEGIN----------------------------------
    const [pagination, setPagination] = useState({
      _page : 1,
      _limit : 32,
      _totalRows : 32
    });

    const [filters , setFilters]  = useState({
      _limit:32,
      _page : 1,
    })
    // Pagination --- END------------------------------------




    useEffect(() => {
        (async function () {
          // _limit=10&_page=1
            const paramsString = queryString.stringify(filters)
            console.log(paramsString);
            let dbLaptop = await postApi.getAll(`/filters?${paramsString}`, {
              category_id: 7,
            //   _start: 10,
            //   _limit: 10,
            })
            SetFilterLaptop(dbLaptop)
              if (dbLaptop) {
                SetisLoading(true);
              }
              
        })();


    var optionFilter = document.querySelectorAll(".PageAllLap-Filter-title")
    var optionFilter_item =  document.querySelectorAll(".Option-checkbox")
    for(let i=0;i<optionFilter.length;i++){
    optionFilter[i].onclick  = () => {
        console.log(optionFilter_item[i])
        optionFilter_item[i].classList.toggle("active_option_filter")
    }
}
},[filters]);

    function handlePageChange(newPage) {
        // setFilters dùng để truyền vào params và giữ nguyên fillter khi phân trang
        setFilters({
          ... filters,
          _page : newPage,
        })

        // setPagination dùng để cập nhật số trang truyền hàm từ cha sang con 
        setPagination({
          _page : newPage,
        })

    }  

    const ChangeList  = (value) => {
      SetIsList(value)    
    }
    
console.log(FilterLaptop);
    return (
        <div className="Detail-container grid wide">
        <div className="row mt-50">
          <div className="col l-1 dis-padding">
            <div className=" Size-logo">
              <img src="../../image/logosmall.svg" alt="" /> 
            </div>
          </div>
          <div className="col l-1"><span>/ Laptop</span></div>
          <div className="col l-12 Content-2-container-reduce-price"><h1>Máy tính xách tay</h1></div>
        </div>
        <div className="row PageAllLap-justify-content">
          <div className="col l-2">
            <span className="PageAllLap-Custom-Bold-text">1 - 24 </span>
            <span className="PageAllLap-Custom-Color-text"> trên 307 sản phẩm</span>
          </div>
          <div className="col l-8">
            <div>
              <span className="PageAllLap-Custom-Bold-text">Sắp xếp theo:</span>
              <span className="PageAllLap-Custom-Color-text filter-option">Giá tăng dần</span>
              <span className="PageAllLap-Custom-Color-text filter-option">Giá giảm dần</span>
            </div>
          </div>
          <div className="col l-2">   
            <div className="row no-gutters PageAllLap-justify-content">
              <div onClick={()=>{ChangeList(true)}} className={isList===true ? "PageAllLap-icon-list-option PageAllLap-icon-list-option-active" : "PageAllLap-icon-list-option"}><i className="fas fa-list-ul" /></div>
              <div onClick={()=>{ChangeList(false)}} className={isList===false ? "PageAllLap-icon-list-option PageAllLap-icon-list-option-active" : "PageAllLap-icon-list-option"}><i className="fas fa-th-large" /></div>     
            </div>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col l-2 m-12 c-12">
            <div className="PageAllLap-Filter-Container">
              <div className="PageAllLap-Filter">Bộ lọc được áp dụng</div>
              <div className="Option-checkbox-container">
                <div className="PageAllLap-Filter">
                  <div className="PageAllLap-Filter-title">Thương hiệu <i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Keychron</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Filco</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">E-Dra</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Logitech</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">DAREU</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Microsoft</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Akko</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Newmen</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Keydous</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Mistel</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Asus</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">FL-ESPORT</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Leopold</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Apple</span> </div>
                  </div>
                  <div className="PageAllLap-Filter-title">Kết nối <i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Có dây</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Không dây</span> </div>
                  </div>
                  <div className="PageAllLap-Filter-title">Kết nối qua <i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Dây</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">USB Receiver</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Bluetooth</span> </div>
                  </div>
                  <div className="PageAllLap-Filter-title">Đèn LED <i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">RGB</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Đơn sắc</span> </div>
                  </div>
                  <div className="PageAllLap-Filter-title">Layout <i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Fullsize</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Tenkeyless</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">75% </span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">60%</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Khác</span> </div>
                  </div>
                  <div className="PageAllLap-Filter-title">Loại switch <i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Red</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Black</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Brown</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Blue</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Speed</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Khác</span> </div>
                  </div>
                  
                </div>
              </div> 
            </div>
          </div>
          <div className="col l-10">
         { isList === true &&  <div className="row ">
             
          {isLoading 
            ? FilterLaptop.map((item, index) => {
                return (
                  <ProductItemColorAllLaptopCol12
                    id={item.id}
                    key={index}
                    name={item.name}
                    thumbnail={item.thumbnail}
                    cur_price={item.cur_price}
                    tang_type={item.tang_type}
                    cur_sku={item.cur_sku}
                    shared_url={item.shared_url}
                    options={item.options}
                    number_options={item.number_options}
                  ></ProductItemColorAllLaptopCol12>
                );
              })
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                return <SkeletonPageAllLapCol12 key={index}></SkeletonPageAllLapCol12>;
              })} 
          
        
 

            <div className="col l-12">
            <Pagination
              pagination={pagination}
              onPageChange={handlePageChange}
            ></Pagination>

            </div>
            </div>
}

{ isList ===false &&  <div className="row ">
             
            {isLoading
            ? FilterLaptop.map((item, index) => {
                return (
                  <ProductItemColorAllLaptop
                    id={item.id}
                    key={index}
                    name={item.name}
                    thumbnail={item.thumbnail}
                    cur_price={item.cur_price}
                    tang_type={item.tang_type}
                    cur_sku={item.cur_sku}
                    shared_url={item.shared_url}
                    options={item.options}
                  ></ProductItemColorAllLaptop>
                );
              })
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                return <SkeletonArticle key={index}></SkeletonArticle>;
              })}
              
    

            <div className="col l-12 m-12 c-12">
            <Pagination
              pagination={pagination}
              onPageChange={handlePageChange}
            ></Pagination>

            </div>
            </div>
}

          </div>
        </div>
      </div>
      
    );
}

export default PageAllAccessory;