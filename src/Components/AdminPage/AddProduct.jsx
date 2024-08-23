import React from 'react'
import Layout from '../../Layout/Layout'

function AddProduct() {
  return (
    <Layout>
      <div className='flex flex-row justify-center'>
        <div className='flex flex-col w-full md:w-1/2 lg:w-2/6 bg-blue-100 p-8 my-8'>
            <h1 className='text-center font-bold text-2xl'>Add Product</h1>
            <form className='flex flex-col w-full'>

                <label className='py-1'>Product Name: <span className='text-red-700'>*</span></label>
                <input 
                    type="text" 
                    name="product_name" 
                    placeholder='Enter the Product Name' 
                    className='border rounded-sm p-2 mb-3'
                />

                <label className='py-1'>Product Price: <span className='text-red-700'>*</span></label>
                <input 
                    type="text" 
                    name="product_price" 
                    placeholder='Enter the Product Price' 
                    className='border rounded-sm p-2 mb-3'
                />

                <label className='py-1'>Product Description: <span className='text-red-700'>*</span></label>
                <input 
                    type="text" 
                    ame="product_description" 
                    placeholder='Enter the Product Description' 
                    className='border rounded-sm p-2 mb-3'
                />

                <label className='py-1'>Product Cotegary: <span className='text-red-700'>*</span></label>
                <input 
                    type="text" 
                    name="product_cotegary" 
                    placeholder='Enter the Product Cotegary' 
                    className='border rounded-sm p-2 mb-3'
                />

                <label className='py-1'>Product Image: <span className='text-red-700'>*</span></label>
                <input 
                    type="file" 
                    name="product_image" 
                    className='border rounded-sm p-2 mb-3 inline'
                />

                <label className='py-1'>Product Type: <span className='text-red-700'>*</span></label>
                <input 
                    type="text" 
                    name="product_type" 
                    placeholder='Enter the Product Type (Pizza Drink SideItems CarryBag)' 
                    className='border rounded-sm p-2 mb-3'
                />

                <label className='py-1'>Product Quantity: <span className='text-red-700'>*</span></label>
                <input 
                    type="text" 
                    name="product_" 
                    placeholder='Enter the Product Quantity' 
                    className='border rounded-sm p-2 mb-3'
                />

                <button className='bg-blue-600 py-3 px-11 rounded-md mb-0 mt-4 text-white hover:bg-blue-500'>Add Product</button>
            </form>
        </div>
      </div>
    </Layout>
  )
}

export default AddProduct
