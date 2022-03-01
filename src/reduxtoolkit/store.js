import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlide";
import userReducer from "./userSlice"

const rootReducer = {
  carts: cartReducer,
  users: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
