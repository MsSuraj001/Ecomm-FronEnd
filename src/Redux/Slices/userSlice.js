import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast";


const initialState = {
    userData : {}
}

export const createAccount = createAsyncThunk('/auth/createAccount', async (data) => {
    console.log('Incoming data to the user', data);

    try{
        const response = axiosInstance.post('/user', data)
        toast.promise(response, {
            success : (resolvePromise) => {
                return resolvePromise?.data?.message
            },
            loading : 'Hold back right to .......',
            error : 'Ho No Some thing went wrong'
        })
        const apiResponse = await response;
        return apiResponse
    }catch(error){
        console.log('Error while creating account', error);
    }
})

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