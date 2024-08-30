import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import toast from "react-hot-toast"
import axiosInstance from "../../Helpers/axiosInstance"


const initialState = {
    productData : []
}

export const getAllProducts = createAsyncThunk('product/getAll', async () =>{
    try {
        const products = axiosInstance.get('/product');
        toast.promise(products, {
            loading: 'Loading all the products',
            error: 'Something went cannot load products',
            success: 'Products loaded successfully',
        });
        const apiResponse = await products;
        return apiResponse
    } catch(error) {
        console.log(error);
        toast.error('Something went wrong');
    }
})

const productSlices = createSlice({
    name : 'product',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            console.log(action.payload)
            state.productData = action?.payload?.data?.data
            console.log(state.productData);
            
        })
    }
})

export default productSlices.reducer;