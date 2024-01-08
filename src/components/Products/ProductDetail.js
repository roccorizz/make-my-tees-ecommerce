import React from 'react'

const ProductDetail = ({ product }) => {
    return (
        <div className="max-w-[278px] mb-8 mx-4">
            <img
                src={product.image}
                alt={`Sneaker - ${product.title}`}
                className="w-[266px] md:w-[278px] lg:w-[278px] h-[186px] object-cover object-center rounded-md mb-4 transform scale-x-[-1]"
            />
            <div className="text-center items-center">
                <p className="text-[14px] md:text-[20px] lg:text-[20px] max-w-[229px] px-8 md:px-0 lg:px-0 font-roboto ">
                    {product.title}
                </p>
            </div>
        </div>
    );
}

export default ProductDetail