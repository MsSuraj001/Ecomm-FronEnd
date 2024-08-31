import React, { useEffect } from 'react'
import Layout from '../../Layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { createAccount, login } from '../../Redux/Slices/AuthSlice';
import { getUserDatails } from '../../Redux/Slices/userSlice';

function UserAccount() {
  const dispatch = useDispatch();

  const { userData } = useSelector( (state) => state.user);

  useEffect( () => {
    dispatch(getUserDatails());
  }, [])
  return (
    <Layout>
      <h1>this is the  user account page</h1>
      <h1>{userData.email}</h1>
    </Layout>
  )
}

export default UserAccount
