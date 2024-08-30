import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import productSliceReducers from "./Slices/productSlice";


export const store = configureStore({
    reducer: {
        auth : AuthSliceReducer,
        product : productSliceReducers
    },
    devTools : true,
})