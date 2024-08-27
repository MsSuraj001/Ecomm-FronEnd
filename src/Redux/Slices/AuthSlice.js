import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn : localStorage.getItem('isLoggedIn') === 'true' || 'false',
    role : localStorage.getItem('role') || '',
    data : JSON.parse(localStorage.getItem('data')) || {},
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

const AuthSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {}
})

export default AuthSlice.reducer;