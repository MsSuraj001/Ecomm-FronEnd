import React from 'react'
import Layout from '../Layout/Layout'
import UserAddress from './Pages/UserAddress'

function Home() {
  return (
    <Layout>
      <h1>this is the home page</h1>
      <UserAddress/>
    </Layout>
  )
}

export default Home
