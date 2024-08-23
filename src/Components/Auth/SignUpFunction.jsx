import React from 'react'
import LogIn from './LogIn';
import SignUp from './SignUp';

function SignUpFunction() {
    const [signUpState, setSignUpState] = useState({
        username: '',
        email: '',
        password: '',
        mobileNumber: '',
        age : '',
        gender : '',
    });

    function handleUserInput(e){
        const [name, value] = e.target;
        setSignUpState({
            ...signUpState,
            [name]: value
        }) 
    }

    function handleUserSubmit(e){
        e.preventDefault();
        console.log(signUpState);

        if(!signUpState.username || !signUpState.email || !signUpState.mobileNumber || !signUpState.password){
            toast.error("Please fill the all feilds")
            return;
        }

        if(signUpState.username < 5 || signUpState.username > 20){
            toast.error("Username must be between 5 to 20 characters")
            return;
        }

        if(signUpState.email.includes('@') || signUpState.email.includes('.')){
            toast.error("Invalid Email")
            return;
        }

        if(signUpState.mobileNumber <10 || signUpState.mobileNumber > 12){
            toast.error("Invalid Mobile Number")
            return;
        }

        if(signUpState.password > 6 || signUpState.password < 8){
            toast.error("Password must be between 8 to 12 characters")
            return;
        }
    }
  return (
    <SignUp
        handleUserInput = {handleUserInput}
        handleUserSubmit = {handleUserSubmit}
    />
  )
}

export default SignUpFunction