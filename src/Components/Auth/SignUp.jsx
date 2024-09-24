import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { createAccount } from '../../Redux/Slices/AuthSlice';
import uploadFile from '../../Helpers/uploadFile';

function SignUp({handleUserInput, handleUserSubmit}) {    //

    const dispatch = useDispatch();
    const navigate = useNavigate()

    // const [uploadPhotos, setUploadPhoto] = useState("");
    // const [uploadPic, setUploadPic] = useState('');
    const [image, setImage] = useState('');
    
    function handleUpload(e) {
        const file = e.target.files[0];
        console.log(file);
        setImage(file);
    }



    const [signUpState, setSignUpState] = useState({
        firstName: '',
        email: '',
        password: '',
        mobileNumber: '',
        image : '',
        age:'',
        gender: '',
    })

    function handleUserInput(e){
        const {name, value} = e.target; 
        // setSignUpState({
        //     ...signUpState,
        //     [name]: value
        // })
        setSignUpState( (prev)=>{
            return{
                ...prev,
                [name]: value
            }
        })
    }

    // const handleUploadPhoto = async (e)=>{
    //     const file = e.target.files[0];

    //     const uploadPic = await uploadFile(file);   // here it's work
    //     console.log(uploadPic.url);
       
        
        
    //     setUploadPic(file);
    //     console.log(setUploadPic(file));     // undifined
        
    //     setSignUpState((prev)=>{
    //         return{
    //             ...prev,
    //             image : uploadPic.url
    //         }
    //     })
    //     console.log('setsigupstate data',setSignUpState);
    // }
    async function handleUserSubmit(e){
        e.preventDefault();
        console.log(signUpState);

       


        // console.log("sfdjk")

        if(!signUpState.firstName || !signUpState.email || !signUpState.mobileNumber || !signUpState.password){
            toast.error("Please fill the all feilds")
            return;
        }

        if(signUpState.firstName.length < 5 || signUpState.firstName.length > 20){
            toast.error("firstName must be between 5 to 20 characters")
            return;
        }

        if(!signUpState.email.includes('@') || !signUpState.email.includes('.')){
            toast.error("Invalid Email")
            return;
        }

        if(signUpState.mobileNumber.length < 10 || signUpState.mobileNumber.length > 12){
            toast.error("Invalid Mobile Number")
            return;
        }

        if(signUpState.password > 6 || signUpState.password < 8){
            toast.error("Password must be between 8 to 12 characters")
            return;
        }

        const formData = new FormData();
        formData.append('image', signUpState.image);
        formData.append('firstName', signUpState.firstName);
        formData.append('email', signUpState.email);
        formData.append('password', signUpState.password);
        formData.append('mobileNumber', signUpState.mobileNumber);
        formData.append('age', signUpState.age);
        formData.append('gender', signUpState.gender);

        const apiResponse = await dispatch(createAccount(signUpState));
        console.log("api response is ", apiResponse);
        if(apiResponse.payload.data.success){
            navigate('/auth/login');
        }

    }

   
  return (
    <Layout>
        <div className='my-8'>
            <div className='flex flex-row justify-center'>
                <form action="/user" className='w-full px-12 md:w-1/2 lg:w-2/6 flex flex-col justify-center' >
                <h1 className='text-2xl font-bold text-center py-6'>Sign Up</h1>
                    <label className='py-1 text-xl'>FirstName <span className='text-red-800'>*</span></label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        placeholder='Please enter the user name'
                        className='px-4 py-2 mb-2 border' 
                        required
                        onChange={handleUserInput}
                    />

                    <label className='py-1 text-xl'>Email <span className='text-red-800'>*</span></label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className='px-4 py-2 mb-2 border' 
                        placeholder='Please enter your email Id' 
                        required
                        onChange={handleUserInput}
                    />

                    <label className='py-1 text-xl'>Password <span className='text-red-800'>*</span></label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        className='px-4 py-2 mb-2 border' 
                        placeholder='Please enter the password' 
                        required
                        onChange={handleUserInput}
                    />

                    <label className='py-2 text-xl'>Mobile Number <span className='text-red-800'>*</span></label>
                    <input 
                        type="tel" 
                        id="mobileNumber" 
                        name="mobileNumber" 
                        className='px-4 py-2 mb-2 border' 
                        placeholder='Please enter your Mobile Number' 
                        required
                        onChange={handleUserInput}
                    />

                    <label className='py-2 text-xl'>Age</label>
                    <input 
                        type="string" 
                        id="age" 
                        name="age" 
                        className='px-4 py-2 mb-2 border' 
                        placeholder='Please enter your Age' 
                        required
                        onChange={handleUserInput}
                    />
                    
                    <label className='py-2 text-xl'>User Image</label>
                    <input 
                        type="file" 
                        id="image" 
                        name="image" 
                        className='px-4 py-2 mb-2 border' 
                        required
                        onChange={handleUpload}
                    />

                    <label >Gender</label>
                    <select id="gender" name="gender" required onChange={handleUserInput}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <button className='bg-blue-600 py-3 px-11 rounded-md mb-0 mt-4' onClick={handleUserSubmit}>Register Now</button>
                    <p>Already have an account ? <Link to='/auth/logIn' className='text-blue-500'>Log In</Link></p>
                </form>
            </div>
        </div>
    </Layout>
  )
}

export default SignUp
