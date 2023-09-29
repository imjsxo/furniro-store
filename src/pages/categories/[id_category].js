import Productcard from '@/component/Productcard';
import React, { Component } from 'react';
import axios from 'axios';
import { useRouter } from "next/router"

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: null,
            productCategory: null,
            productSubCategory: null,
            productbySubCategory: null,
            id_category: null,

        };
        this.sortAz = this.sortAz.bind(this)
        this.sortZa = this.sortZa.bind(this)
        this.priceHightoLow = this.priceHightoLow.bind(this)
        this.priceLowtoHigh = this.priceLowtoHigh.bind(this)
        this.getProductbySubcategory = this.getProductbySubcategory.bind(this)
    }
    componentDidMount() {
        const searchParams = new URLSearchParams(window.location.search);
        const idCategory = searchParams.get('id_category');
        this.setState({id_category : idCategory})
        axios.get('http://localhost:3001/productbyquery?category_id=' + idCategory)
            .then(data => {
                this.setState({ productData: data.data })
            })

        axios.get('http://localhost:3001/category/' + idCategory)
            .then(data => {
                this.setState({ productCategory: data.data })
            })

        axios.get('http://localhost:3001/subcategory/' + idCategory)
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

    getProductbySubcategory = (id_subcategory) => {
        console.log("id subcategory", id_subcategory)
        axios.get('http://localhost:3001/productbysubcategory?subcategory_id=' + id_subcategory)
            .then(data => {
                this.setState({ productData: data.data })
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
                    <div className='my-12'>
                        <div className='flex flex-wrap gap-6 justify-center' >
                            {
                                this.state.productSubCategory && this.state.productSubCategory.map((subcategory) => {
                                    return (
                                        <div className='w-[23%]' onClick={() => this.getProductbySubcategory(subcategory.id_subcategory)}>
                                            <img src={subcategory.image} alt="images" />
                                            <p className='text-base text-center mt-5'>{subcategory.subcategory_name}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between items-center bg-[#FAF3EA] py-5 px-10'>
                            <p className='text-base font-medium'>
                                {this.state.productData.length}
                                <span className='ml-1'>Items found</span>
                            </p>
                            <div className='gap-2 flex'>
                                <button onClick={this.sortAz} className='border rounded-lg border-[#B88E2F] text-[#B88E2F] p-2 text-base'>Product Name A-Z</button>
                                <button onClick={this.sortZa} className='border rounded-lg border-[#B88E2F] text-[#B88E2F] p-2 text-base'>Product Name Z-A</button>
                                <button onClick={this.priceHightoLow} className='border rounded-lg border-[#B88E2F] text-[#B88E2F] p-2 text-base'>By Price Low-High</button>
                                <button onClick={this.priceLowtoHigh} className='border rounded-lg border-[#B88E2F] text-[#B88E2F] p-2 text-base'>By Price High-Low</button>
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