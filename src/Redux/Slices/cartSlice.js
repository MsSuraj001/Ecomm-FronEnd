import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast";


const initialState = {
    cartData : ''
}


export const getTheCart = createAsyncThunk('cart/getTheCart', async () => {
    try{
        const cart = axiosInstance.get('/cart');
        toast.promise(cart, {
            loading: 'Loading the cart data so Please wait',
            success: 'Cart data loaded successfully',
            error: 'Failed to load cart data',
        })

        const apiResponse = await cart;
        return apiResponse;
    }catch(error){
        console.log(error);
        toast.error("Something is wrong can't be loaded the cart Data")
    }

})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers :  (builder) => {
        builder.addCase(getTheCart.fulfilled, (state, action)=>{
            state.cartData = action.payload?.data?.data
        })
    }
})

export default cartSlice.reducer
