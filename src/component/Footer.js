import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className='max-w-[1286px] mx-auto'>
                <div className='py-12 flex border-bottom'>
                    <div className='w-1/4 mr-36'>
                        <h1 className='text-2xl font-bold mb-12'>Funiro.</h1>
                        <p className='text-base font-normal text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables,
                            FL 33134 USA</p>
                    </div>
                    <div className='flex w-full'>
                        <div className='w-1/2 flex gap-36'>
                            <div className='flex flex-col text-base gap-y-14'>
                                <p className='text-[#9F9F9F]'>Links</p>
                                <Link href='/' className='font-medium'>Home</Link>
                                <Link href='/' className='font-medium'>Shop</Link>
                                <Link href='/' className='font-medium'>About</Link>
                                <Link href='/' className='font-medium'>Contact</Link>
                            </div>
                            <div className='flex flex-col text-base gap-y-14'>
                                <p className='text-[#9F9F9F]'>Help</p>
                                <Link href='/' className='font-medium'>Payment Options</Link>
                                <Link href='/' className='font-medium'>Returns</Link>
                                <Link href='/' className='font-medium'>Privacy Policies</Link>
                            </div>
                        </div>
                        <div className='w-1/2 newsletter'>
                            <p className='text-[#9F9F9F] mb-14'>Newsletter</p>
                            <form>
                                <input type="text" placeholder='Enter Your Email Address' />
                                <button className='font-medium button ml-3'>SUBSCRIBE</button>
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