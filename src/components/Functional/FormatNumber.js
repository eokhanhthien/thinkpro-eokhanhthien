// export var FormatNumber  = (num) => {
//     return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
//   };

  export var  currencyFormat = (num) =>{
    return  num?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') //Thêm dấu chấm ỏi sau num? để tránh lỗi undefine
 }