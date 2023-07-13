import Productcard from '@/component/Productcard';
import React, { Component } from 'react';
import Link from 'next/link';
import { Dropdown } from "@nextui-org/react";
import SubCategoryDining from '@/component/SubCategoryDining';
import SubCategoryBedroom from '@/component/SubCategoryBedroom';
class productlist extends Component {
    render() {
        return (
            <div>
                <img src="/images/plp-banner.png" alt="" />
                <div className='max-w-[1286px] mx-auto'>
                    {/* <div className='my-12'>
                        <h1 className='text-2xl font-semibold text-center mb-10'>LIVING ROOM</h1>
                        <div className='flex flex-wrap gap-6 justify-center' >
                            <Link href='#' className='w-[23%]'>
                                <img src="/images/category-sofa.jpg" alt="images" />
                                <p className='text-base text-center mt-5'>Sofas</p>
                            </Link>
                            <Link href='#' className='w-[23%]'>
                                <img src="/images/category-coffe-table.jpg" alt="images" />
                                <p className='text-base text-center mt-5'>Coffe Tables</p>
                            </Link>
                            <Link href='#' className='w-[23%]'>
                                <img src="/images/category-entertain.jpg" alt="images" />
                                <p className='text-base text-center mt-5'>Entertainment Units</p>
                            </Link>
                            <Link href='#' className='w-[23%]'>
                                <img src="/images/category-console-table.jpg" alt="images" />
                                <p className='text-base text-center mt-5'>Console Tables</p>
                            </Link>
                            <Link href='#' className='w-[23%]'>
                                <img src="/images/category-armchair.jpg" alt="images" />
                                <p className='text-base text-center mt-5'>Armchairs</p>
                            </Link>
                            <Link href='#' className='w-[23%]'>
                                <img src="/images/category-side-table.jpg" alt="images" />
                                <p className='text-base text-center mt-5'>Side Tables</p>
                            </Link>
                            <Link href='#' className='w-[23%]'>
                                <img src="/images/category-rugs.jpg" alt="images" />
                                <p className='text-base text-center mt-5'>Rugs</p>
                            </Link>
                            <Link href='#' className='w-[23%]'>
                                <img src="/images/category-mirror.jpg" alt="images" />
                                <p className='text-base text-center mt-5'>Mirrors</p>
                            </Link>
                        </div>
                    </div> */}
                    {/* <SubCategoryDining /> */}
                    <SubCategoryBedroom />
                    <div>
                        <div className='flex justify-between items-center bg-[#FAF3EA] py-5 px-10'>
                            <p className='text-base font-medium'>150 Items found</p>
                            <Dropdown>
                                <Dropdown.Button light style={{fontSize: '20px'}}> Sort By</Dropdown.Button>
                                <Dropdown.Menu aria-label="Static Actions">
                                    <Dropdown.Item>Product Name A-Z</Dropdown.Item>
                                    <Dropdown.Item>Product Name Z-A</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='flex flex-wrap gap-7 mt-12 justify-center'>
                            <Productcard />
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

export default productlist;