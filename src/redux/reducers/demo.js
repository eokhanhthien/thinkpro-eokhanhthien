const InitialState = {
    StoreProduct :[
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
        }
    ]
}
const demo = (state = InitialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default demo;