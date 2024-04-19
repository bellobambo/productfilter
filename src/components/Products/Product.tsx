
import React from 'react'

const Product = ({ product }: any) => {
    return (
        <div className='group relative'>
            <div className='my-4 aspect-w-1 w-full h-fit rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                <img src={product.imageId} alt='product image' className='h-full w-full object-center' />
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className='text-sm text-gray-700'>
                            {product.name}
                        </h3>
                        <p className='mt-1 text-sm text-gray-500'>
                            Size {product.size.toUpperCase()}, {product.color}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product