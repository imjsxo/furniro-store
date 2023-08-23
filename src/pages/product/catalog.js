import React, { Component } from 'react';
import axios from 'axios';
import { Dropdown } from '@nextui-org/react';
import Productcard from '@/component/Productcard';

class catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: null
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/product')
            .then(data => {
                this.setState({ productData: data.data })
            })
    }
    render() {
        const { productData } = this.state
        return (
            productData && <div>
                <img src="/images/plp-banner.png" alt="" />
                <div className='max-w-[1286px] mx-auto'>
                    <div className='my-12'>
                        <h1 className='text-2xl font-semibold text-center mb-10'>All Items</h1>
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

export default catalog;