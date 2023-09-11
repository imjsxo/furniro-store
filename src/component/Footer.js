import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className='max-w-[1286px] mx-auto lg:px-4 md:px-3'>
                <div className='py-12 flex border-bottom'>
                    <div className='w-1/4 mr-36 lg:mr-24 md:mr-12'>
                        <h1 className='text-2xl font-bold mb-12 lg:mb-8 md:mb-7'>Funiro.</h1>
                        <p className='text-base md:text-sm font-normal text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables,
                            FL 33134 USA</p>
                    </div>
                    <div className='flex w-full'>
                        <div className='w-1/2 flex gap-36 lg:gap-24 md:gap-12'>
                            <div className='flex flex-col text-base gap-y-14 lg:gap-y-6 md:gap-y-6'>
                                <p className='text-[#9F9F9F]'>Links</p>
                                <Link href='/' className='font-medium'>Home</Link>
                                <Link href='/' className='font-medium'>Shop</Link>
                                <Link href='/' className='font-medium'>About</Link>
                                <Link href='/' className='font-medium'>Contact</Link>
                            </div> 
                            <div className='flex flex-col text-base gap-y-14 lg:gap-y-6 md:gap-y-6'>
                                <p className='text-[#9F9F9F]'>Help</p>
                                <Link href='/' className='font-medium'>Payment Options</Link>
                                <Link href='/' className='font-medium'>Returns</Link>
                                <Link href='/' className='font-medium'>Privacy Policies</Link>
                            </div>
                        </div>
                        <div className='w-1/2 newsletter'>
                            <p className='text-[#9F9F9F] mb-14 lg:mb-6 md:mb-5'>Newsletter</p>
                            <form>
                                <input type="text" placeholder='Enter Your Email Address' className='md:text-sm' />
                                <button className='font-medium button ml-3 md:text-sm'>SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='py-9'>
                    <p className='text-base font-normal'>&copy; {new Date().getFullYear()} Furino. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;