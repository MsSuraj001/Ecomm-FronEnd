import React, { useState } from 'react'
import LogIn from './LogIn';

function LogInFunction() {
    const [logInData, setLogInData] = useState({
        email: "",
        password: "",
    })

    function handleUserInput(e){
        const {name, value} = e.target;
        setLogInData({
            ...logInData,
            [name]: value
        })
    }

    function handleUserSubmit(e){
        e.preventDetaul(),
        console.log(logInData)   

        if(!logInData.email || !logInData.password){
            toast.error("Please fill the all feilds")
            return;
        }
          if(logInData.email.includes('@') || logInData.email.includes('.')){
            toast.error("Invalid Email")
            return;
          }
          if(logInData.password > 6 || logInData.password < 8){
            toast.error("Password must be between 8 to 12 characters")
            return;
          }
    }
  return (
    <LogIn
            handleUserInput={handleUserInput}
            handleUserSubmit={handleUserSubmit}
    />
  )
}

export default LogInFunction
