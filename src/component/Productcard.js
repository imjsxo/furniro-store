import Link from 'next/link';
import React from 'react';


const Productcard = (productData) => {

    const ListProduct = productData.productData
    let filteredProduct = []
    if(ListProduct != null) {
        filteredProduct = ListProduct 
    }
    if (productData.count != null) {
        filteredProduct = ListProduct.slice(0, productData.count)
    }

    return (
        <>
            {
                filteredProduct.map(product => {
                    console.log(product)
                    return (
                        <Link 
                        href={{
                            pathname: `product/${product.id_product}`,
                            query: {
                                id: product.id_product
                            }
                        }}
                        className='flex flex-col w-[48%] max-h-[500px] bg-[#F4F5F7]'>
                            <img src={product.image} alt="image" className='h-[301px] object-cover' />
                            <div className='px-2 py-4'>
                                <p className='text-2xl md:text-lg font-semibold '>{product.product_name}</p>
                                <p className='text-base md:text-sm font-medium text-gray-300 py-2 md:py-1'>{product.product_subname}</p>
                                <p className='text-xl md:text-base font-semibold' id='product_price'>Rp. {product.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    );
};

export default Productcard;