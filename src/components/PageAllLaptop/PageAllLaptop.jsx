import React, { useState } from 'react';
import { useEffect } from 'react';
import "./PageAllLaptop.css"
import postApi from '../../api/postApi';
import ProductItemColor from '../ProductItemColor/ProductItemColor';
import ProductItemColorAllLaptop from "../ProductItemColorAllLaptop/ProductItemColorAllLaptop"
import SkeletonPageAllLapCol12 from '../Functional/Skeletons/SkeletonPageAllLapCol12';
import SkeletonArticle from '../Functional/Skeletons/SkeletonArticle';
import Pagination from '../Functional/Pagination/Pagination';

import queryString from "query-string"
import ProductItemColorAllLaptopCol12 from '../ProductItemColorAllLaptop/ProductItemColorAllLaptopCol12';

function PageAllLaptop(props) {
    const [isLoading, SetisLoading] = useState(false);
    const [FilterLaptop, SetFilterLaptop] = useState([]);
    const [totalLaptop, SettotalLaptop] = useState([]);

    const [isList, SetIsList] = useState(false);
    const [isDESC, SetisDESC] = useState('');

    // Pagination --- BEGIN----------------------------------
    const [pagination, setPagination] = useState({
      _page : 1,
      _limit : 32,
      _totalRows : 267
    });

    const [filters , setFilters]  = useState({
      _limit:32,
      _page : 1,
      name_like:'',
      // cur_price_gte:'',
      // cur_price_lte:6000000,

      _sort:'',
      _order:''
    })
    // Pagination --- END------------------------------------




    useEffect(() => {
        (async function () {
          // _limit=10&_page=1
            const paramsString = queryString.stringify(filters)
            // console.log(paramsString);
            let dbLaptop = await postApi.getAll(`/filters?${paramsString}`, {
              category_id: 1,
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
        // console.log(optionFilter_item[i])
        optionFilter_item[i].classList.toggle("active_option_filter")
    }
}

  var checkbox_option_item=document.querySelectorAll(".checkbox_option_item")
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
}}

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

    function handleSortPrice(name_sort,option) {
      setFilters({
        ...filters,
        _page:1,
        _sort:name_sort,
        _order:option
      })
      if(option === "desc"){
        SetisDESC(true)
      }
      else{
        SetisDESC(false)
      }
    }

    
// console.log(FilterLaptop.length);
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
              <span onClick={()=>{handleSortPrice("cur_price","asc")}} className={isDESC===true?"PageAllLap-Custom-Color-text filter-option":"PageAllLap-Custom-Color-text filter-option activeSortPrice"}>Giá tăng dần</span>
              <span onClick={()=>{handleSortPrice("cur_price","desc")}} className={isDESC===true?"PageAllLap-Custom-Color-text filter-option activeSortPrice":"PageAllLap-Custom-Color-text filter-option "}>Giá giảm dần</span>
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
                    <div className="Cutom-text-option-container"><input value="Lenovo" type="checkbox" className='checkbox_option_item'/><span className="Cutom-text-option-checkbox">Lenovo</span> </div>
                    <div className="Cutom-text-option-container"><input value="Razer" type="checkbox" className='checkbox_option_item'/><span className="Cutom-text-option-checkbox">Razer</span> </div>
                    <div className="Cutom-text-option-container"><input value="Dell" type="checkbox" className='checkbox_option_item'/><span className="Cutom-text-option-checkbox">Dell</span> </div>
                    <div className="Cutom-text-option-container"><input value="Asus"  type="checkbox" className='checkbox_option_item'/><span className="Cutom-text-option-checkbox">Asus</span> </div>
                    <div className="Cutom-text-option-container"><input value="HP"  type="checkbox" className='checkbox_option_item'/><span className="Cutom-text-option-checkbox">HP</span> </div>
                    <div className="Cutom-text-option-container"><input value="Microsoft" type="checkbox" className='checkbox_option_item'/><span className="Cutom-text-option-checkbox">Microsoft</span> </div>
                  </div>
                  <div className="PageAllLap-Filter-title">Khoảng giá <i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input value="" data-valuetwo="50"type="checkbox" className='checkbox_option_item_price'/><span className="Cutom-text-option-checkbox">Trên 50 triệu</span> </div>
                    <div className="Cutom-text-option-container"><input value="40" data-valuetwo="50"type="checkbox" className='checkbox_option_item_price'/><span className="Cutom-text-option-checkbox">40 - 50 triệu</span> </div>
                    <div className="Cutom-text-option-container"><input value="30" data-valuetwo="40"type="checkbox" className='checkbox_option_item_price'/><span className="Cutom-text-option-checkbox">30 - 40 triệu</span> </div>
                    <div className="Cutom-text-option-container"><input value="20" data-valuetwo="30"type="checkbox" className='checkbox_option_item_price'/><span className="Cutom-text-option-checkbox">20 - 30 triệu</span> </div>
                    <div className="Cutom-text-option-container"><input value="15" data-valuetwo="20"type="checkbox" className='checkbox_option_item_price'/><span className="Cutom-text-option-checkbox">15 - 20 triệu</span> </div>
                    <div className="Cutom-text-option-container"><input value="10" data-valuetwo="15"type="checkbox" className='checkbox_option_item_price'/><span className="Cutom-text-option-checkbox">10 - 15 triệu</span> </div>
                    <div className="Cutom-text-option-container"><input value="10" data-valuetwo=""type="checkbox" className='checkbox_option_item_price'/><span className="Cutom-text-option-checkbox">Dưới 10 triệu</span> </div>
                  </div>
                  <div className="PageAllLap-Filter-title">Loại hàng <i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Chính hãng</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Nhập khẩu</span> </div>
                  </div>
                  <div className="PageAllLap-Filter-title">Tình trạng <i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">New Sealed</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">New, Fullbox</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">New, Outlet </span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Used</span> </div>
                  </div>
                  <div className="PageAllLap-Filter-title">CPU <i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Intel Dual Core</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Intel Core i3</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Intel Core i5 </span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Intel Core i7</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Intel Core i9</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Intel Xeon</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">AMD Ryzen 3</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">AMD Ryzen 5</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">AMD Ryzen 7</span> </div>
                  </div>
                  <div className="PageAllLap-Filter-title">RAM <i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">4 Gb</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">8 Gb</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">16 Gb</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">20 Gb</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">32 Gb</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">64 Gb</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">128 Gb</span> </div>
                  </div>
                  <div className="PageAllLap-Filter-title">Ổ cứng <i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">SSD</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">HDD</span> </div>
                  </div>
                  <div className="PageAllLap-Filter-title">Số ổ cứng hỗ trợ<i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">1</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">2</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">3</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">4</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">5</span> </div>
                  </div>
                  <div className="PageAllLap-Filter-title">Kích thước màn hình<i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">&lt; 13"</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">13 - 13.9"</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">14 - 14.9"</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">15 - 15.9"</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">16 - 17"</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">&gt; 17"</span> </div>
                  </div>
                  <div className="PageAllLap-Filter-title">Tỉ lệ màn hình<i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">16:9</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">16:10</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">3:2</span> </div> 
                  </div>
                  <div className="PageAllLap-Filter-title">Loại màn hình<i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Nhám</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Gương</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Cảm ứng</span> </div> 
                  </div>
                  <div className="PageAllLap-Filter-title">Dải màu hiển thị<i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Trên 90% sRGB</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">70 - 90% sRGB</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Dưới 70% sRGB</span> </div> 
                  </div>
                  <div className="PageAllLap-Filter-title">Tấm nền màn hình<i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">IPS</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">TN</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">OLED</span> </div> 
                  </div>
                  <div className="PageAllLap-Filter-title">Tần số quét<i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">60 Hz</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">75 Hz</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">120 Hz</span> </div> 
                  </div>
                  <div className="PageAllLap-Filter-title">Độ phân giải<i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">1366 x 768 (HD)</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">1600 x 900 (HD+)</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">1920 x 1080 (FHD)</span> </div> 
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">1920 x 1200 (FHD+)</span> </div> 
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">2560 x 1440 (2K)</span> </div> 
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">3840 x 2160 (4K)</span> </div> 
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">3840 x 2400 (4K+)</span> </div> 
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">3072 x 1920 (3K)</span> </div> 
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">3000 x 2000 (3K)</span> </div> 
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">2256 x 1504 (2K)</span> </div> 
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">2560 x 1600 (2K)</span> </div> 
                  </div>
                  <div className="PageAllLap-Filter-title">Card đồ họa<i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Intel HD</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Intel Iris</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Nvidia Geforce</span> </div> 
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Nvidia Quadro</span> </div> 
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">AMD Radeon</span> </div> 
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">AMD FirePro</span> </div> 
                  </div>
                  <div className="PageAllLap-Filter-title">Bộ nhớ đồ họa<i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">2 Gb</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">3 Gb</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">4 Gb</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">6 Gb</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">8 Gb</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">16 Gb</span> </div>
                  </div>
                  <div className="PageAllLap-Filter-title">Trọng lượng<i className="fas fa-plus" /> </div>
                  <div className="Option-checkbox">
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Dưới 1kg</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">1 - 1.5kg</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">1.5 - 2kg</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">2 - 2.5kg</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">2.5 - 3.5kg</span> </div>
                    <div className="Cutom-text-option-container"><input type="checkbox" /><span className="Cutom-text-option-checkbox">Trên 3.5kg</span> </div>
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

export default PageAllLaptop;