import React, { Component } from 'react';
import Link from 'next/link';

class SubCategoryDining extends Component {
    render() {
        return (
            <div className='my-12'>
                <h1 className='text-2xl font-semibold text-center mb-10'>DINING ROOM</h1>
                <div className='flex flex-wrap gap-6 justify-center' >
                    <Link href='#' className='w-[23%]'>
                        <img src="/images/category-dining-table.jpg" alt="images" />
                        <p className='text-base text-center mt-5'>Dining Tables</p>
                    </Link>
                    <Link href='#' className='w-[23%]'>
                        <img src="/images/category-dining-chairs.jpg" alt="images" />
                        <p className='text-base text-center mt-5'>Dining Chairs</p>
                    </Link>
                    <Link href='#' className='w-[23%]'>
                        <img src="/images/category-buffet.jpg" alt="images" />
                        <p className='text-base text-center mt-5'>Buffets & Sideboards</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SubCategoryDining;