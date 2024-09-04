import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";
import { json } from "react-router-dom";

const initialState = {
    isLoggedIn : localStorage.getItem('isLoggedIn') === 'true' || false,
    role : localStorage.getItem('role') || '',
    data : JSON.parse(localStorage.getItem('data')) || {},
    // data : {}
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

export const login = createAsyncThunk('/auth/login', async (data) => {
    console.log('Incoming data to the lonin user', data);

    try{
        const response = axiosInstance.post('/auth/login', data)
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
        console.log('Error while login account', error);
    }
})

export const logout = createAsyncThunk('/auth/logOut', async ()=> {
    console.log('Incoming data to the logout user');
    try{
        const response = axiosInstance.post('/auth/logOut')
        toast.promise(response, {
            success : (resolvePromise) => {
                return resolvePromise?.data?.message
            },
            loading : "Hold back to right now",
            error : 'Ho No Some thing went wrong'
        })
    }catch(error){
        console.log('Error while logout account', error);
        toast.error("Please try agian")
    }
})

const AuthSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(login.fulfilled, (state, action) =>{
            console.log("this is the action payload",action.payload)
           state.isLoggedIn = true
           state.data = action?.payload?.data?.data?.userData
           state.role = action?.payload?.data?.data?.userRole

           localStorage.setItem('isLoggedIn', true)
           localStorage.setItem('data', JSON.stringify(action?.payload?.data?.data?.userData))
           localStorage.setItem('role', action?.payload?.data?.data?.userRole)
        })
        .addCase(logout.fulfilled, (state, action)=>{
            console.log("this is the action payload",action.payload)
            state.isLoggedIn = false
            state.data = {},
            state.role = ''

            localStorage.setItem('isLoggedIn', 'false');
            localStorage.setItem('data', JSON.stringify({}));
            localStorage.setItem('role', '');
        })
    }
})

export default AuthSlice.reducer;