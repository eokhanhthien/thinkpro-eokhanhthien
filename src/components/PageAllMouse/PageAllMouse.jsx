import React, { useState } from 'react';
import { useEffect } from 'react';
import postApi from '../../api/postApi';
import ProductItemColor from '../ProductItemColor/ProductItemColor';
import ProductItemColorAllLaptop from "../ProductItemColorAllLaptop/ProductItemColorAllLaptop"
import SkeletonPageAllLapCol12 from '../Functional/Skeletons/SkeletonPageAllLapCol12';
import SkeletonArticle1 from '../Functional/Skeletons/SkeletonArticle1';
import Pagination from '../Functional/Pagination/Pagination';

import queryString from "query-string"
import ProductItemColorAllLaptopCol12 from '../ProductItemColorAllLaptop/ProductItemColorAllLaptopCol12';

function PageAllMouse(props) {
    const [isLoading, SetisLoading] = useState(false);
    const [FilterLaptop, SetFilterLaptop] = useState([]);
    const [totalLaptop, SettotalLaptop] = useState(267);

    const [isList, SetIsList] = useState(false);
    const [isDESC, SetisDESC] = useState(0);

    // Pagination --- BEGIN----------------------------------
    const [pagination, setPagination] = useState({
      _page : 1,
      _limit : 24,
      _totalRows : 267
    });

    const [filters , setFilters]  = useState({
      _limit:32,
      _page : 1,
      name_like:'',
     
      _sort:'',
      _order:'' ,

      cur_price_gte:'',
      cur_price_lte:'',
    })
    // Pagination --- END------------------------------------



    window.scrollTo(0, 0)
    useEffect(() => {
        (async function () {
            // const paramsString = queryString.stringify(filters)
            const paramsString = parseToParams(filters)

            // console.log(paramsString);
            let dbLaptop = await postApi.getAll(`/filters?${paramsString}`, {
              category_id: 8,
            })
            SetFilterLaptop(dbLaptop.data)
            setPagination({
              ...pagination,
             _totalRows : dbLaptop.pagination._totalRows})

            // console.log(dbLaptop.pagination._totalRows)
              if (dbLaptop) {
                SetisLoading(true);
              }
              
        })();


    var optionFilter = document.querySelectorAll(".PageAllLap-Filter-title")
    var optionFilter_item =  document.querySelectorAll(".Option-checkbox")
    for(let i=0;i<optionFilter.length;i++){
    optionFilter[i].onclick  = () => {
        // console.log(optionFilter_item[i])
        optionFilter_item[i].classList.toggle("active_option_filter")
    }
}

  var checkbox_option_item=document.querySelectorAll(".checkbox_option_item")
  var checkbox_option_item_price=document.querySelectorAll(".checkbox_option_item_price")
  for(let j=0;j<checkbox_option_item.length;j++){
    checkbox_option_item[j].onclick  = () => {
      for(let n=0;n<checkbox_option_item.length;n++){
        checkbox_option_item[n].checked = false
    }

    checkbox_option_item[j].checked = true
    setFilters({
      ...filters,
      _page:1,
      name_like: checkbox_option_item[j].value
    })
}
}

for(let j=0;j<checkbox_option_item_price.length;j++){
  checkbox_option_item_price[j].onclick  = () => {
    for(let n=0;n<checkbox_option_item_price.length;n++){
      checkbox_option_item_price[n].checked = false
  }

  checkbox_option_item_price[j].checked = true
  setFilters({
    ...filters,
   
    cur_price_gte:checkbox_option_item_price[j].value,
    cur_price_lte:checkbox_option_item_price[j].getAttribute("data-valuetwo"),
  })
  // console.log(checkbox_option_item_price[j].value ,checkbox_option_item_price[j].getAttribute("data-valuetwo"))
}
}

},[filters]);


function parseToParams(filter) {
  let array =[];
  for(const key in filter){
    if(filter[key]){
      array.push(`${key}=${filter[key]}`)
    }
  }
  return array.join('&')  
}

    function handlePageChange(newPage) {
        // setFilters dùng để truyền vào params và giữ nguyên fillter khi phân trang
        setFilters({
          ... filters,
          _page : newPage,
        })

        // setPagination dùng để cập nhật số trang truyền hàm từ cha sang con 
        setPagination({
          ...pagination,
          _page : newPage,
        })

    }  

    const ChangeList  = (value) => {
      SetIsList(value)    
    }

    function handleSortPrice(name_sort,option) {
      setFilters({
        ...filters,
        _page:1,
        _sort:name_sort,
        _order:option
      })
      if(option === "desc"){
        SetisDESC(1)
      }
      else{
        SetisDESC(2)
      }
    }

    
// console.log(FilterLaptop);

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
            <span className="PageAllLap-Custom-Color-text"> trên {pagination._totalRows} sản phẩm</span>
          </div>
          <div className="col l-8">
            <div>
              <span className="PageAllLap-Custom-Bold-text">Sắp xếp theo:</span>
              <span onClick={()=>{handleSortPrice("cur_price","asc")}} className={isDESC===2?"PageAllLap-Custom-Color-text filter-option activeSortPrice":"PageAllLap-Custom-Color-text filter-option "}>Giá tăng dần</span>
              <span onClick={()=>{handleSortPrice("cur_price","desc")}} className={isDESC===1?"PageAllLap-Custom-Color-text filter-option activeSortPrice":"PageAllLap-Custom-Color-text filter-option "}>Giá giảm dần</span>
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
          <div className="col l-2 c-12 m-12">
            <div className="PageAllLap-Filter-Container">
              <div className="PageAllLap-Filter">Bộ lọc được áp dụng</div>
              <div className="Option-checkbox-container">
                <div className="PageAllLap-Filter">
                  <div className="PageAllLap-Filter-title">Thương hiệu <i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input value="Logitech" type="checkbox" className='checkbox_option_item'/><span className="Cutom-text-option-checkbox">Logitech</span> </div>
                    <div className="Cutom-text-option-container"><input value="Lenovo" type="checkbox" className='checkbox_option_item'/><span className="Cutom-text-option-checkbox">Lenovo</span> </div>
                    <div className="Cutom-text-option-container"><input value="Newmen" type="checkbox" className='checkbox_option_item'/><span className="Cutom-text-option-checkbox">Newmen</span> </div>
                    <div className="Cutom-text-option-container"><input value="DAREU" type="checkbox" className='checkbox_option_item'/><span className="Cutom-text-option-checkbox">DAREU</span> </div>
                    <div className="Cutom-text-option-container"><input value="Asus"  type="checkbox" className='checkbox_option_item'/><span className="Cutom-text-option-checkbox">Asus</span> </div>
                    <div className="Cutom-text-option-container"><input value="Razer"  type="checkbox" className='checkbox_option_item'/><span className="Cutom-text-option-checkbox">Razer</span> </div>
                    <div className="Cutom-text-option-container"><input value="Microsoft" type="checkbox" className='checkbox_option_item'/><span className="Cutom-text-option-checkbox">Microsoft</span> </div>
                    <div className="Cutom-text-option-container"><input value="MSI" type="checkbox" className='checkbox_option_item'/><span className="Cutom-text-option-checkbox">MSI</span> </div>
                    <div className="Cutom-text-option-container"><input value="GIGABYTE" type="checkbox" className='checkbox_option_item'/><span className="Cutom-text-option-checkbox">GIGABYTE</span> </div>
                  </div>
                  <div className="PageAllLap-Filter-title">Khoảng giá <i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input value="50000000" data-valuetwo=""type="checkbox" className='checkbox_option_item_price'/><span className="Cutom-text-option-checkbox">Trên 50 triệu</span> </div>
                    <div className="Cutom-text-option-container"><input value="40000000" data-valuetwo="50000000"type="checkbox" className='checkbox_option_item_price'/><span className="Cutom-text-option-checkbox">40 - 50 triệu</span> </div>
                    <div className="Cutom-text-option-container"><input value="30000000" data-valuetwo="40000000"type="checkbox" className='checkbox_option_item_price'/><span className="Cutom-text-option-checkbox">30 - 40 triệu</span> </div>
                    <div className="Cutom-text-option-container"><input value="20000000" data-valuetwo="30000000"type="checkbox" className='checkbox_option_item_price'/><span className="Cutom-text-option-checkbox">20 - 30 triệu</span> </div>
                    <div className="Cutom-text-option-container"><input value="15000000" data-valuetwo="20000000"type="checkbox" className='checkbox_option_item_price'/><span className="Cutom-text-option-checkbox">15 - 20 triệu</span> </div>
                    <div className="Cutom-text-option-container"><input value="10000000" data-valuetwo="15000000"type="checkbox" className='checkbox_option_item_price'/><span className="Cutom-text-option-checkbox">10 - 15 triệu</span> </div>
                    <div className="Cutom-text-option-container"><input value="0" data-valuetwo="10000000"type="checkbox" className='checkbox_option_item_price'/><span className="Cutom-text-option-checkbox">Dưới 10 triệu</span> </div>
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
          
            {
              FilterLaptop.length == 0 && 
              <div className='jtf-content col l-12 m-12 c-12'>
                <img src="../../image/no_product.png" alt="" />
              </div>
              }

            <div className="col l-12">
            <Pagination
              pagination={pagination}
              onPageChange={handlePageChange}
            ></Pagination>

            </div>
            </div>
}

{ isList ===false &&  <div className="row">
             
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
                return <SkeletonArticle1 key={index}></SkeletonArticle1>;
              })}
              
              {
              FilterLaptop.length == 0 && 
              <div className='jtf-content col l-12 m-12 c-12'>
                <img src="../../image/no_product.png" alt="" />
              </div>
              }

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

export default PageAllMouse;