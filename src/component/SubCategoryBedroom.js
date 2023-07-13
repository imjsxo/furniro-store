import React, { Component } from 'react';
import Link from 'next/link';

class SubCategoryBedroom extends Component {
    render() {
        return (
            <div className='my-12'>
                <h1 className='text-2xl font-semibold text-center mb-10'>BEDROOM</h1>
                <div className='flex flex-wrap gap-6 justify-center' >
                    <Link href='#' className='w-[23%]'>
                        <img src="/images/category-Mattresses.jpg" alt="images" />
                        <p className='text-base text-center mt-5'>Mattresses</p>
                    </Link>
                    <Link href='#' className='w-[23%]'>
                        <img src="/images/category-bed-frames.jpg" alt="images" />
                        <p className='text-base text-center mt-5'>Bed Frames</p>
                    </Link>
                    <Link href='#' className='w-[23%]'>
                        <img src="/images/category-bedside.jpg" alt="images" />
                        <p className='text-base text-center mt-5'>Bedside Tables</p>
                    </Link>
                    <Link href='#' className='w-[23%]'>
                        <img src="/images/category-tallboys.jpg" alt="images" />
                        <p className='text-base text-center mt-5'>Tallboys</p>
                    </Link>
                    <Link href='#' className='w-[23%]'>
                        <img src="/images/category-dresser.jpg" alt="images" />
                        <p className='text-base text-center mt-5'>Dressers</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SubCategoryBedroom;