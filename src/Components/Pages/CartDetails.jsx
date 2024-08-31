import React, { useEffect } from 'react'
import Layout from '../../Layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getTheCart } from '../../Redux/Slices/cartSlice'

function CartDetails() {
    const dispatch = useDispatch()
    const { cartData } = useSelector( (state) => state.cart)
    const { userData } = useSelector( (state) => state.user)
    useEffect( ()=> {
        dispatch(getTheCart())
    }, [])
  return (
    <Layout>
        <div className='h-full w-full'>
           <div className='bg-green-100'>
            <h1>Cart Details</h1>
             {/* this is the product in your cart */}
                 <div>
                    <h1>product todo</h1>
                </div>

                {/* this is the calculat the amount */}
                <div>
                <h1>total</h1>
                </div>
           </div>
        </div>
    </Layout>
  )
}

export default CartDetails
