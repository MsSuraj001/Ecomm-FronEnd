import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import productSliceReducers from "./Slices/productSlice";
import userSliceReducers from "./Slices/userSlice";
import cartSliceReducers from "./Slices/cartSlice";


export const store = configureStore({
    reducer: {
        auth : AuthSliceReducer,
        product : productSliceReducers,
        user : userSliceReducers,
        cart : cartSliceReducers
    },
    devTools : true,
})