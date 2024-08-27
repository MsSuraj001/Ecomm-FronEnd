import React from 'react'
import Layout from '../Layout/Layout'
import UserAddress from './Pages/UserAddress'
import AllProductSection from './Pages/AllProductSection'

function Home() { 
  return (
    <Layout>
      <AllProductSection/>
      <h1>this is the home page</h1>
      {/* <UserAddress/> */}
    </Layout>
  )
}

export default Home
