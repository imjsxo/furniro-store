import Productcard from '@/component/Productcard';
import React, { Component } from 'react';
import Link from 'next/link';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
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
            productSubCategory: null,
            id_category: props.router.query.id_category,
        };
        this.sortAz = this.sortAz.bind(this)
        this.sortZa = this.sortZa.bind(this)
        this.priceHightoLow = this.priceHightoLow.bind(this)
    this.priceLowtoHigh = this.priceLowtoHigh.bind(this)
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

        axios.get('http://localhost:3001/subcategory')
            .then(data => {
                this.setState({ productSubCategory: data.data })
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

    sortZa() {
        const listZa = this.state.productData
        listZa.sort(function (a, b) {
            var textA = a.product_name.toUpperCase();
            var textB = b.product_name.toUpperCase();
            return (textB < textA) ? -1 : (textB > textA) ? 1 : 0;
        });
        this.setState({ productData: listZa })
    }

    priceHightoLow() {
        const listHighLow = this.state.productData
        listHighLow.sort(function (a, b) {
            return b.price - a.price;
        });
        this.setState({ productData: listHighLow })
    }

    priceLowtoHigh() {
        const listLowHigh = this.state.productData
        listLowHigh.sort(function (a, b) {
            return a.price - b.price;
        });
        this.setState({ productData: listLowHigh })
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
                        <div className='flex flex-wrap gap-6 justify-center' >
                            {
                                this.state.productSubCategory && this.state.productSubCategory.map((subcategory) => {
                                    return (
                                        // <Link
                                        //     className='flex justify-center flex-col'
                                        //     href={{
                                        //         pathname: `categories/${category.id_category}`,
                                        //         query: {
                                        //             id_category: category.id_category
                                        //         }
                                        //     }}>
                                        //     <img src={category.image} alt="image" className='mb-8' />
                                        //     <span className='text-xl font-semibold text-center capitalize'>{category.category_name}</span>
                                        // </Link>
                                        <Link href='#' className='w-[23%]'>
                                            <img src={subcategory.image} alt="images" />
                                            <p className='text-base text-center mt-5'>{subcategory.subcategory_name}</p>
                                        </Link>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between items-center bg-[#FAF3EA] py-5 px-10'>
                            <p className='text-base font-medium'>150 Items found</p>

                            <Dropdown>
                                <DropdownTrigger>
                                    <Button>
                                        Sort By
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem onClick={this.sortAz}>Product Name A-Z</DropdownItem>
                                    <DropdownItem onClick={this.sortZa}>Product Name Z-A</DropdownItem>
                                    <DropdownItem onClick={this.sortZa}>By Price Low-High</DropdownItem>
                                    <DropdownItem onClick={this.sortZa}>By Price High-Low</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

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