import React, { useState } from 'react'
import AddProduct from './addProduct'

function AddProductFunction() {

    const [produtDetailsState, setProductDetailsState] = useState({
        productName : '',
        productPrice : '',
        productDescription : '',
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

        if(produtDetailsState.productName.length < 12 || produtDetailsState.productName.length > 20){
            toast.error("Product Name should be between 12 to 20 characters");
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

    function handleUserSubmit(e){
        e.preventDefault()
        console.log(produtDetailsState)
    }
  return (
    <AddProduct 
        handleUserInput= {handleUserInput}
        handleUserSubmit={handleUserSubmit}
    />
  )
}

export default AddProductFunction
