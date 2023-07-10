import React from 'react';

const Productcard = (props) => {
    const ListProduct = [{
        image: '/images/agoura_dt.jpg',
        name: 'Agoura Extendable Dining Table',
        desc: 'Acacia with Sand-Blasted Finish',
        price: 'Rp 10.000.000'
    },
    {
        image: '/images/azurro_corner_terminal_electric_notalent.jpg',
        name: 'Azurro Corner',
        desc: '100% Leather',
        price: 'Rp 15.500.000'
    },
    {
        image: '/images/tanami-timber-tv-entertainment-unit.jpg',
        name: 'Tanami TV Entertainment Unit',
        desc: 'Australian Oak with Geometric Legs',
        price: 'Rp 8.000.000'
    },
    {
        image: '/images/noida-table-lamp.jpg',
        name: 'Noida Table Lamp',
        desc: 'Good table Lamp',
        price: 'Rp 2.000.000'
    }, {
        image: '/images/agoura_dt.jpg',
        name: 'Agoura Extendable Dining Table',
        desc: 'Acacia with Sand-Blasted Finish',
        price: 'Rp 10.000.000'
    },
    {
        image: '/images/azurro_corner_terminal_electric_notalent.jpg',
        name: 'Azurro Corner',
        desc: '100% Leather',
        price: 'Rp 15.500.000'
    },
    {
        image: '/images/tanami-timber-tv-entertainment-unit.jpg',
        name: 'Tanami TV Entertainment Unit',
        desc: 'Australian Oak with Geometric Legs',
        price: 'Rp 8.000.000'
    },
    {
        image: '/images/noida-table-lamp.jpg',
        name: 'Noida Table Lamp',
        desc: 'Good table Lamp',
        price: 'Rp 2.000.000'
    }]
    let filteredProduct = ListProduct
    if(props.count != null) {
        filteredProduct = ListProduct.slice(0,props.count)
    }
    return (
        <>
            {
                filteredProduct.map(product => {
                    return (
                        <div className='flex flex-col w-[285px] max-h-[500px] bg-[#F4F5F7]'>
                            <img src={product.image} alt="image" className='h-[301px] w-[285px] object-cover' />
                            <div className='px-2 py-4'>
                                <p className='text-2xl font-semibold '>{product.name}</p>
                                <p className='text-base font-medium text-gray-300 py-2'>{product.desc}</p>
                                <p className='text-xl font-semibold'>{product.price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Productcard;