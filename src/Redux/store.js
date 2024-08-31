import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import productSliceReducers from "./Slices/productSlice";
import userSliceReducers from "./Slices/userSlice";


export const store = configureStore({
    reducer: {
        auth : AuthSliceReducer,
        product : productSliceReducers,
        user : userSliceReducers,
    },
    devTools : true,
})