import { useRouter } from "next/router"
import React, { Component, useState } from 'react';
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import Productcard from '@/component/Productcard';
import axios from 'axios';

const productpagerouter = (props) => {
    const router = useRouter()
    return <ProductPage {...props} router={router} />
}

export class ProductPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descriptionShow: true,
            additionalInformationShow: false,
            id: props.router.query.id,
            productData: null,
            productCategory: null
        }
        this.convertPrice = this.convertPrice.bind(this)
        this.colorLabel = this.colorLabel.bind(this)
        console.log('idnya lur', props.router.query.id)
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/product/${this.state.id}`)
            .then(data => {
                this.setState({ productData: data.data })
                console.log('hasil', data.data)
            }),
        axios.get('http://localhost:3001/category')
            .then(data => {
              this.setState({ productCategory: data.data })
            })
    }

    clickDescription = () => {
        this.setState({
            descriptionShow: true,
            additionalInformationShow: false
        })
    }

    clickAdditionalInformation = () => {
        this.setState({
            descriptionShow: false,
            additionalInformationShow: true
        })
    }

    convertPrice(price) {
        return "Rp " + price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    }


    colorLabel(color) {
        console.log("HASIL WARNA "+color)
        switch (color) {
            case 'coklat':
                return "bg-orange-950"
                break;
            case 'merah':
                return "bg-red-800"
                break;
            case 'inactive':
                return "bg-red-800"
                break;
            default:
                return "bg-red-800"
                break;
        }
       
    }

    render() {
        const { productData } = this.state
        const { productCategory } = this.state
        return (
            productData && <div>
                <section className='mt-8 flex max-w-[1286px] mx-auto'>
                    <div className='w-1/2 flex justify-center mr-[105px]'>
                        <img src={productData.image} alt="" className="object-contain"/>
                    </div>
                    <div className='w-1/2'>
                        <h3 className='text-[42px] font-normal'>{productData.product_name}</h3>
                        <p className='text-[#9F9F9F] text-2xl font-medium'>{this.convertPrice(productData.price)}</p>
                        <span className='text-xs mt-4'>
                            Setting the bar as one of the loudest speakers in its class,
                            the Kilburn is a compact,
                            stout-hearted hero with a well-balanced audio which boasts
                            a clear midrange and extended highs for a sound.
                        </span>
                        <div className='mt-5'>
                            <span className='text-sm text-[#9F9F9F]'>Size</span>
                            <ul className='flex gap-4 mt-3'>
                                <li className='flex justify-center items-center bg-[#F9F1E7] w-[30px] h-[30px]  text-xs font-medium'>{productData.size}</li>
                            </ul>
                        </div>
                        <div className='mt-4 pb-14 border-bottom'>
                            <p className="text-sm text-[#9F9F9F]">Color</p>
                            

                            <ul className='flex gap-4 mt-3'>
                            {
                                (productData.color).split(',').map(colors => {
                                    return (
                                        <li className="flex flex-col items-center">
                                            <span className={`text-transparent rounded-full ${this.colorLabel(colors)} w-[30px] h-[30px] mb-1`}>{colors}</span>
                                            <span className="text-base capitalize text-gray-600">{colors}</span>
                                        </li>
                                        
                                    )
                                })
                            }
                            </ul>
                        </div>
                        <div className='pt-10'>
                            <table>
                                <tbody className='text-[#9F9F9F] text-base'>
                                    <tr className='pb-3'>
                                        <td>SKU</td>
                                        <td className='px-4'>:</td>
                                        <td>SS001</td>
                                    </tr>
                                    <tr className='pb-3'>
                                        <td>Category</td>
                                        <td className='px-4'>:</td>
                                        {productCategory && <td>{productCategory[0].category_name}</td>}
                                        
                                    </tr>
                                    <tr className='pb-3'>
                                        <td>Share</td>
                                        <td className='px-4'>:</td>
                                        <td className='flex gap-6'>
                                            <FaFacebook className='w-5 h-5 text-black' />
                                            <AiFillInstagram className='w-5 h-5 text-black' />
                                            <AiFillTwitterCircle className='w-5 h-5 text-black' />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section className='mt-16 pdp-section'>
                    <div className='max-w-[1286px] mx-auto'>
                        <div className='flex items-center justify-center  gap-12'>
                            <h1 className={`${this.state.descriptionShow ? 'font-bold' : 'font-normal'} my-12 text-2xl`}
                                onClick={this.clickDescription} >
                                Description
                            </h1>
                            <h1 className={`${this.state.additionalInformationShow ? 'font-bold' : 'font-normal'} my-12 text-2xl`}
                                onClick={this.clickAdditionalInformation}>
                                Additional Information
                            </h1>
                        </div>
                        <div>
                            {
                                this.state.descriptionShow &&
                                <div className='flex flex-col items-center'>
                                    {productData.product_desc}
                                </div>
                            }
                            {
                                this.state.additionalInformationShow &&
                                <div className='additional-info'>
                                    {productData.additional_information}
                                </div>
                            }
                        </div>
                    </div>
                </section>
                <section className='mt-16 pdp-section'>
                    <div className='flex flex-col items-center max-w-[1286px] mx-auto'>
                        <h1 className='my-12 text-4xl font-bold'>Related Products</h1>
                        <div className='flex flex-wrap gap-8 justify-center'>
                            {/* <Productcard count={4} /> */}
                            <button className='border border-[#B88E2F] py-3 px-20 mb-24'>Show More</button>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}

export default productpagerouter;