import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import UserAddress from './Pages/UserAddress'
import AllProductSection from './Pages/AllProductSection'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../Redux/Slices/productSlice'
import AllProduct from '../AllProductsCart/AllProduct'

function Home() { 
//   const dispatch = useDispatch()

//  const { productData } = useSelector( (state) => state.product)
//   console.log(productData)

//   useEffect( () => {
//     dispatch(getAllProducts());
//   }, [])
  return (
    <Layout>
      <AllProductSection/>
      {/* <h1>this is the home page</h1> */}
      {/* <UserAddress/> */}
      {/* {productData.map( (product) => <div key={product}>{product.productName}</div>)} */}
      {/* this is the main landing page  */}
      {/* <div className='w-full h-[70vh] bg-slate-100'>
          <h1>Home section</h1>
      </div> */}
      {/* <AllProduct/> */}
    </Layout>
  )
}

export default Home
