import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import toast from 'react-hot-toast'

function AddProduct({handleUserInput, handleUserSubmit}) {

    const [produtDetailsState, setProductDetailsState] = useState({
        productName : '',
        productPrice : '',
        productD : '',
        productImage : '',
        productCotegary: '',
        productType : '',
        productQuantity: '',
    })

    function handleUserInput(e){
        const {name, value} = e.target
        setProductDetailsState({
            ...produtDetailsState,
            [name] : value
        })
    }

    function handleUserSubmit(e){
        e.preventDefault()
        console.log(produtDetailsState)

        if( !produtDetailsState.productName ||
            !produtDetailsState.productPrice ||
            !produtDetailsState.productD ||
            !produtDetailsState.productImage ||
            !produtDetailsState.productCotegary ||
            !produtDetailsState.productType ||
            !produtDetailsState.productQuantity)
        {
            toast.error("Please fill the All Product Details");
            return;
        }

        if(produtDetailsState.productName.length < 8 || produtDetailsState.productName.length > 20){
            toast.error("Product Name should be between 8 to 20 characters");
            return;
        }
        if(produtDetailsState.productPrice < 0){
            toast.error("Product Price should be greater than 0");
            return;
        }
        if(produtDetailsState.productD.length < 30 || produtDetailsState.productD.length > 100){
            toast.error("Product Description should be between 30 to 100 characters");
            return;
        }
        if(produtDetailsState.productImage.file == 'true'){
            toast.error("Please select a product image");
            return;
        }
        if(produtDetailsState.productCotegary == 'veg' || 'non-get'){
            toast.error("Please select a product category");
            return;
        }
        if(produtDetailsState.productQuantity < 20){
            toast.error("Product Quantity should be greater than 20");
            return;
        }
    }

  return (
    <Layout>
      <div className='flex flex-row justify-center'>
        <div className='flex flex-col w-full md:w-1/2 lg:w-2/6 bg-blue-100 p-8 my-8'>
            <h1 className='text-center font-bold text-2xl'>Add Product</h1>
            <form className='flex flex-col w-full'>

                <label className='py-1'>Product Name: <span className='text-red-700'>*</span></label>
                <input 
                    type="text" 
                    onChange={handleUserInput}
                    name="productName" 
                    placeholder='Enter the Product Name' 
                    className='border rounded-sm p-2 mb-3'
                />

                <label className='py-1'>Product Price: <span className='text-red-700'>*</span></label>
                <input 
                    type="text" 
                    onChange={handleUserInput}
                    name="productPrice" 
                    placeholder='Enter the Product Price' 
                    className='border rounded-sm p-2 mb-3'
                />

                <label className='py-1'>Product Description: <span className='text-red-700'>*</span></label>
                <input 
                    type="text" 
                    onChange={handleUserInput}
                    name="productD" 
                    placeholder='Enter the Product Description' 
                    className='border rounded-sm p-2 mb-3'
                />

                <label className='py-1'>Product Cotegary: <span className='text-red-700'>*</span></label>
                <input 
                    type="text" 
                    onChange={handleUserInput}
                    name="productCotegary" 
                    placeholder='Enter the Product Cotegary' 
                    className='border rounded-sm p-2 mb-3'
                />

                <label className='py-1'>Product Image: <span className='text-red-700'>*</span></label>
                <input 
                    type="file" 
                    onChange={handleUserInput}
                    name="productImage" 
                    className='border rounded-sm p-2 mb-3 inline'
                />

                <label className='py-1'>Product Type: <span className='text-red-700'>*</span></label>
                <input 
                    type="text" 
                    onChange={handleUserInput}
                    name="productType" 
                    placeholder='Enter the Product Type (Pizza Drink SideItems CarryBag)' 
                    className='border rounded-sm p-2 mb-3'
                />

                <label className='py-1'>Product Quantity: <span className='text-red-700'>*</span></label>
                <input 
                    type="text" 
                    onChange={handleUserInput}
                    name="productQuantity" 
                    placeholder='Enter the Product Quantity' 
                    className='border rounded-sm p-2 mb-3'
                />

                <button 
                    className='bg-blue-600 py-3 px-11 rounded-md mb-0 mt-4 text-white hover:bg-blue-500'
                    onClick={handleUserSubmit}
                >Add Product</button>
            </form>
        </div>
      </div>
    </Layout>
  )
}

export default AddProduct
