const InitialState = [
    {
        "name": "Tai nghe  SONY Truly wireless chống ồn WF-1000XM4",
        "thumbnail": "/backend/uploads/product/avatar/2021/7/9/tai-nghe-true-wilress-sony-wf-1000xm4-16-copyjpg",
        "shared_url": "tai-nghe-sony-truly-wireless-chong-on-wf-1000xm4",
        "promotions": {
            "promo_type_12": null,
            "promo_type_3": null
        },
        "number_options": 2,
        "options": [
            {
                "color": "Đen",
                "thumbnail": "/backend/uploads/product/avatar/2021/7/9/tai-nghe-true-wilress-sony-wf-1000xm4-16-copyjpg"
            }
        ],
        "outstandings": null,
        "cur_sku": "SNWF1000XM401CF",
        "cur_price": 6490000,
        "category_id": 18,
        "ttkd": 1,
        "ttrm": 0
    },
    {
        "name": "Tai Nghe SONY Không Dây Chống Ồn WH-1000XM4",
        "thumbnail": "/backend/uploads/product/avatar/2021/7/9/tai-nghe-sony-wh-1000xm4-28-500x500-1jpg",
        "shared_url": "tai-nghe-sony-khong-day-chong-on-wh-1000xm4",
        "promotions": {
            "promo_type_12": null,
            "promo_type_3": null
        },
        "number_options": 2,
        "options": [
            {
                "color": "Đen",
                "thumbnail": "/backend/uploads/product/avatar/2021/7/9/tai-nghe-khong-day-chong-on-sony-wh-1000xm4-2-copyjpg"
            }
        ],
        "outstandings": null,
        "cur_sku": "SNWH1000XM401CF",
        "cur_price": 8490000,
        "category_id": 18,
        "ttkd": 1,
        "ttrm": 0
    },
    {
        "name": "Bàn phím cơ AKKO 3084 v2 ASA",
        "thumbnail": "/backend/uploads/product/avatar/2021/7/22/ban-phim-co-akko-3084-v2-asa-black-pink-01-510x631jpg",
        "shared_url": "ban-phim-co-akko-3084-v2-asa",
        "promotions": {
            "promo_type_12": {
                "id": 261,
                "dk_time": "2021-09-30 23:59:00",
                "dk_limit_number_using": null,
                "dk_using_times": 47,
                "tk_type": 2,
                "tk_percent": null,
                "tk_money": "100000",
                "tk_option": null
            },
            "promo_type_3": null
        },
        "number_options": 6,
        "options": [
            {
                "color": "Vàng",
                "thumbnail": "/backend/uploads/product/avatar/2021/7/22/ban-phim-co-akko-3084-v2-asa-los-angeles-01-510x631jpg"
            }
        ],
        "outstandings": null,
        "cur_sku": "AKKO3084v2ASA01CF",
        "cur_price": 1499000,
        "category_id": 7,
        "ttkd": 1,
        "ttrm": 0
    }
];

const productsLaptop = (state = InitialState, action) => {
    switch (action.type) {
            // console.log(action.product)  //Ở bên action -> index.js khai báo biến gì thì ở đây nhận lại biến ấy
           default: return [...state];
    }
};

export default productsLaptop;