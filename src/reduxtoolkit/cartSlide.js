import { createSlice } from "@reduxjs/toolkit";



const cart = createSlice({
    name: 'cart',
    initialState: {
        cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")):[],
        cartTotalQuantity: 0,
    },
    reducers:{
        addToCart: (state, action)=>{ 
            const itemIndex = state.cartItem.findIndex((item)=>item.id === action.payload.id);
            if(itemIndex >= 0){
                state.cartItem[itemIndex].cartQuantity += 1;
            }
            else{
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartItem.push(tempProduct);
            }
            localStorage.setItem("cartItem",JSON.stringify(state.cartItem));  //localStorage
        },

        removeFromCart :(state, action)=>{ 
            const nextCartItems = state.cartItem.filter((cartItem)=> cartItem.id !== action.payload.id);
            state.cartItem = nextCartItems;
            localStorage.setItem("cartItem",JSON.stringify(state.cartItem));  //localStorage

        },
      
        decreaseCart:(state, action)=>{ 
            const itemIndex = state.cartItem.findIndex((item)=>item.id === action.payload.id);
            if(state.cartItem[itemIndex].cartQuantity > 1){
                state.cartItem[itemIndex].cartQuantity -= 1;
            }
            else if(state.cartItem[itemIndex].cartQuantity === 1){
                const nextCartItems = state.cartItem.filter((cartItem)=> cartItem.id !== action.payload.id);
                state.cartItem = nextCartItems;
            }
            localStorage.setItem("cartItem",JSON.stringify(state.cartItem));  //localStorage
        }
    },
})




const {reducer , actions} = cart;
export const {addToCart,removeFromCart,decreaseCart} = actions;
export default reducer;