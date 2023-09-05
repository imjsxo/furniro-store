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
    return <ProductList {...props} router={router} />
}

export class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: null,
            productCategory: null,
            id_category: props.router.query.id_category,
        };
        this.sortAz = this.sortAz.bind(this)
    }
    componentDidMount() {
        axios.get('http://localhost:3001/productbyquery?category_id=' + this.state.id_category)
            .then(data => {
                this.setState({ productData: data.data })
            })

        axios.get('http://localhost:3001/category/' + this.state.id_category)
            .then(data => {
                this.setState({ productCategory: data.data })
            })

    }

    sortAz() {
        const list = this.state.productData
        list.sort(function (a, b) {
            var textA = a.product_name.toUpperCase();
            var textB = b.product_name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        this.setState({ productData: list })
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
                    <div className='my-12'>
                        <h1 className='text-2xl font-semibold text-center mb-10'>BEDROOM</h1>
                        <div className='flex flex-wrap gap-6 justify-center' >
                            <Link href='#' className='w-[23%]'>
                                <img src="/images/category-Mattresses.jpg" alt="images" />
                                <p className='text-base text-center mt-5'>Mattresses</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between items-center bg-[#FAF3EA] py-5 px-10'>
                            <p className='text-base font-medium'>150 Items found</p>
                            {/* <Dropdown>
                                <Dropdown.Button light style={{ fontSize: '20px' }}> Sort By</Dropdown.Button>
                                <Dropdown.Menu aria-label="Static Actions">
                                    <Dropdown.Item  onAction={this.sortAz}>Product Name A-Z</Dropdown.Item>
                                    <Dropdown.Item>Product Name Z-A</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}
                            <div className="relative" data-te-dropdown-ref>
                                <button
                                    className="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
                                    type="button"
                                    id="dropdownMenuButton3"
                                    data-te-dropdown-toggle-ref
                                    aria-expanded="false"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Primary
                                    <span className="ml-2 w-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </button>
                                <ul
                                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                    aria-labelledby="dropdownMenuButton3"
                                    data-te-dropdown-menu-ref>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="#"
                                            data-te-dropdown-item-ref
                                        >Action</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="#"
                                            data-te-dropdown-item-ref
                                        >Another action</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="#"
                                            data-te-dropdown-item-ref
                                        >Something else here</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-7 mt-12'>
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