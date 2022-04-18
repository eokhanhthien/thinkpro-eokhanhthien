import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./Pagination.css"
Pagination.propTypes = {
    pagination : PropTypes.object.isRequired,
    onPageChange : PropTypes.func
};

Pagination.defaultProps = {
    onPageChange : null,
};



function Pagination(props) {
    const {pagination , onPageChange} = props;
    const {_page, _limit, _totalRows} = pagination;
    const totalPages = (_totalRows/_limit);

    const [arrBtn, SetArrBtn] = useState([]);

    const [curentPageActiveBtn, SetCurentPageActiveBtn] = useState(1);
    // 51/10 = 5.1 -> 6 page


    // xử lý giới hạn nút trang - BEGIN
    let leftSide = curentPageActiveBtn - 2;
    let rightSide = curentPageActiveBtn + 2;
    if(leftSide <= 0 ) leftSide=1;
    if(rightSide>Math.ceil(totalPages)) rightSide = Math.ceil(totalPages);
    let items = [];
    for (let number = leftSide ; number <= rightSide; number++) {
        items.push(
            <button  onClick={() => handlePageChange(number)} className={curentPageActiveBtn == number?"Btn-Prev-Next-Pagination active-curentPage" : "Btn-Prev-Next-Pagination"} >{number}</button>,
        );
      }
    // xử lý giới hạn nút trang - ENĐ
      
    useEffect(()=>{
        (async function () {
            var arr=[]
            for(var i=1;i <= Math.ceil(totalPages) ;i++){
            arr.push(i);
            } 
            
            if(arr.length>0){
                SetArrBtn(arr)
            }
        })()
        
    },[])  //Dấu ngoặc [] là để gọi lại khi có sự thay đổi của mảng trống => [trống] sẽ k bị callback liên tục

    function handlePageChange(newPage) {
        if(onPageChange){
            onPageChange(newPage);
            SetCurentPageActiveBtn(newPage)
        }
    }


// console.log(props.page_total);
    // console.log(Math.ceil(totalPages));
    return (
        <div className='Custom-center-pagination'>
            <button className='Btn-Prev-Next-Pagination'
            disabled={_page <= 1}
            onClick={() => handlePageChange(_page - 1 )}
            >
               <i className ="fas fa-chevron-left"></i>
            </button>

        {/* Đây là cách thường  */}
       {/* {
           arrBtn.map((item,index) => {
               return (<button  onClick={() => handlePageChange(index+1)} className={curentPageActiveBtn == index+1?"Btn-Prev-Next-Pagination active-curentPage" : "Btn-Prev-Next-Pagination"} key = {index+1}>{index+1}</button>)
           })
       } */}
       
       {/* items là mảng đã xử lý số nút */}
       {items}

            <button className='Btn-Prev-Next-Pagination'
            disabled={_page >= Math.ceil(totalPages)}
            onClick={() => handlePageChange(_page + 1 )}
            >
                <i className ="fas fa-chevron-right"></i>
            </button>

        </div>
    );
}

export default Pagination;