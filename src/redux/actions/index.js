import * as Types from "./../constants/ActionType"

export const actAddToCart = (product,quantity) => {
    return {
        type : Types.ADD_TO_CART,  // ADD TO CART sẽ nhận lại 2 object tên  product, quantity
        product,
        quantity
    }
}

export const actRemoveProductInCart  = (product) => {
    return{
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateProductInCart  = (product,quantity) => {
    return{
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}



