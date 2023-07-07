import React, { Component } from 'react';
import ReactStars from 'react-stars';
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'

class productpage extends Component {
    render() {
        return (
            <div className='max-w-[1286px] mx-auto'>
                <section className='mt-8 flex'>
                    <div className='w-1/2 flex justify-center mr-[105px]'>
                        <img src="/images/sofa.jpg" alt="" />
                    </div>
                    <div className='w-1/2'>
                        <h3 className='text-[42px] font-normal'>Asgaard sofa</h3>
                        <p className='text-[#9F9F9F] text-2xl font-medium'>Rs. 250,000.00</p>
                        <ReactStars
                            count={5}
                            size={28}
                            color2={'#FFC700'} 
                            className='mt-4'/>
                        <span className='text-xs mt-4'>
                            Setting the bar as one of the loudest speakers in its class,
                            the Kilburn is a compact,
                            stout-hearted hero with a well-balanced audio which boasts
                            a clear midrange and extended highs for a sound.
                        </span>
                        <div className='mt-5'>
                            <span className='text-sm text-[#9F9F9F]'>Size</span>
                            <ul className='flex gap-4 mt-3'>
                                <li className='flex justify-center items-center bg-[#F9F1E7] w-[30px] h-[30px]  text-xs font-medium'>L</li>
                                <li className='flex justify-center items-center bg-[#F9F1E7] w-[30px] h-[30px]  text-xs font-medium'>XL</li>
                                <li className='flex justify-center items-center bg-[#F9F1E7] w-[30px] h-[30px]  text-xs font-medium'>XS</li>
                            </ul>
                        </div>
                        <div className='mt-4 pb-14 border-bottom'>
                            <span className='text-sm text-[#9F9F9F]'>Color</span>
                            <ul className='flex gap-4 mt-3'>
                                <li className='text-transparent rounded-full bg-[#816DFA] w-[30px] h-[30px]'>Violet</li>
                                <li className='text-transparent rounded-full bg-black w-[30px] h-[30px]'>Black</li>
                                <li className='text-transparent rounded-full bg-[#B88E2F] w-[30px] h-[30px]'>Mocca</li>
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
                                        <td>Sofas</td>
                                    </tr>
                                    <tr className='pb-3'>
                                        <td>Tags</td>
                                        <td className='px-4'>:</td>
                                        <td>Sofa, Chair, Home, Shop</td>
                                    </tr>
                                    <tr className='pb-3'>
                                        <td>Share</td>
                                        <td className='px-4'>:</td>
                                        <td className='flex gap-6'>
                                            <FaFacebook className='w-5 h-5 text-black'/>
                                            <AiFillInstagram className='w-5 h-5 text-black'/>
                                            <AiFillTwitterCircle className='w-5 h-5 text-black'/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default productpage;