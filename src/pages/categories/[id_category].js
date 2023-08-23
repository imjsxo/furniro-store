import Productcard from '@/component/Productcard';
import React, { Component } from 'react';
import Link from 'next/link';
import { Dropdown } from "@nextui-org/react";
import SubCategoryDining from '@/component/SubCategoryDining';
import SubCategoryBedroom from '@/component/SubCategoryBedroom';
import axios from 'axios';
import { useRouter } from "next/router"

const productlistrouter = (props) => {
    const router = useRouter()
    console.log('apalag?')
    return <ProductList {...props} router={router}/>
}

export class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: null,
            productCategory: null,
            id_category: props.router.query.id_category
        };
    }
    componentDidMount() {
        axios.get('http://localhost:3001/productbyquery?category_id='+this.state.id_category)
            .then(data => {
                this.setState({ productData: data.data })
            })

        axios.get('http://localhost:3001/category/'+this.state.id_category)
                .then(data => {
                    this.setState({ productCategory: data.data })
                })

    }
    render() {
        const { productCategory } = this.state
        return (
            productCategory && <div>
                <img src="/images/plp-banner.png" alt="" />
                <div className='max-w-[1286px] mx-auto'>
                    <div className='my-12'>
                        <h1 className='text-2xl font-semibold text-center mb-10'>{productCategory.category_name}</h1>
                    </div>
                    <div>
                        <div className='flex justify-between items-center bg-[#FAF3EA] py-5 px-10'>
                            <p className='text-base font-medium'>150 Items found</p>
                            <Dropdown>
                                <Dropdown.Button light style={{ fontSize: '20px' }}> Sort By</Dropdown.Button>
                                <Dropdown.Menu aria-label="Static Actions">
                                    <Dropdown.Item>Product Name A-Z</Dropdown.Item>
                                    <Dropdown.Item>Product Name Z-A</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='flex flex-wrap gap-7 mt-12 justify-center'>
                            {
                                this.state.productData && <Productcard productData={this.state.productData} />
                            }
                        </div>
                    </div>
                </div>

                <div className='mt-20 flex bg-[#FAF3EA] py-24 gap-12 justify-center'>
                    <div className='flex items-center'>
                        <img src="images/quality.png" alt="logo" />
                        <div className='ml-3'>
                            <p className='text-2xl font-semibold'>High Quality</p>
                            <span className='text-[#898989] text-xl font-medium'>crafted from top materials</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src="images/guarantee.png" alt="logo" />
                        <div className='ml-3'>
                            <p className='text-2xl font-semibold'>Warranty Protection</p>
                            <span className='text-[#898989] text-xl font-medium'>Over 2 years</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src="images/shipping.png" alt="logo" />
                        <div className='ml-3'>
                            <p className='text-2xl font-semibold'>Free Shipping</p>
                            <span className='text-[#898989] text-xl font-medium'>Order over Rp 1.000.000</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src="images/customer-support.png" alt="logo" />
                        <div className='ml-3'>
                            <p className='text-2xl font-semibold'>24 / 7 Support</p>
                            <span className='text-[#898989] text-xl font-medium'>Dedicated support</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default productlistrouter;