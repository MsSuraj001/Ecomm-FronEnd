import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast";


const initialState = {
    userData : {}
}


export const getUserDatails = createAsyncThunk('user/getUserDetails', async () => {
    // console.log("hit the user details")
    try{
        const user = axiosInstance.get('/user/getDetails');
        console.log(user);
        toast.promise(user, {
            loading: 'Loading user details',
            error: 'Failed to load user details',
            success: 'User details loaded successfully',
        });
        const apiUser = await user;
        console.log(apiUser);
        return apiUser;
    }catch(error){
        toast.error("user not loaded")
        console.log(error);
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserDatails.fulfilled, (state, action) => {
            console.log(action.payload);
            state.userData = action?.payload?.data?.data
            console.log(state.userData)
        })
    }
})

export default userSlice.reducer;