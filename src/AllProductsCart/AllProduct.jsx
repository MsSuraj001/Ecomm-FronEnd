import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../Redux/Slices/productSlice';

function AllProduct() {
    const dispatch = useDispatch();
    const { productData } = useSelector( (state) => state.product)
    console.log(productData);
    

    useEffect( (state) => {
        dispatch( getAllProducts());     //
    }, [])
  return (
    <div className='h-auto w-auto'>
        <div className='h-auto w-auto flex gap-4'>
                {productData.map( (items) => {
                    return (
                        <div key={items._id} className='h-auto w-2/6 rounded-sm my-6 shadow-md flex flex-col '>
                            {/* this is the image content */}
                            <div className='relative'>
                                    <img src={items.productImage} alt="" className='object-cover object-center w-full lg:h-48 md:h-36 '/>

                                    <div>
                                        {items.productCotegary === 'veg' ? (
                                            <div className='bg-green-500 text-white p-2 rounded-sm absolute top-1 left-1'></div>
                                        ) : (
                                            <div className='bg-red-500 text-white p-2 rounded-sm absolute top-0'></div>
                                        )}
                                    </div>

                                    <div  className=' text-white '>
                                        <p className='absolute bottom-1 left-2  text-xl font-semibold'>₹{items.productPrice}</p>
                                        <p className='absolute bottom-1 right-2 font-extralight'>CUSTOMISE</p>
                                    </div>
                            </div>
                        
                        {/* this is the after image content */}
                            <div className='px-3 py-3'>
                                <h1>{items.productName}</h1>

                                <div className=' border-y my-2 py-2 items-start'>
                                    <p>{items.productDescription}</p>
                                </div>

                                <div className='flex flex-row justify-between px-8 my-4'>
                                    <p>size</p>
                                    <p>Crust</p>
                                </div>

                                <div className=' flex flex-row justify-between'>
                                    <div>
                                        {''}
                                    </div>
                                    <button className='border-2 text-green-600 p-2 rounded-md'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default AllProduct
