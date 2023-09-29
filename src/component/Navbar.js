import React from 'react';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='max-w-[1286px] mx-auto md:px-4 py-8 flex flex-row justify-between items-center'>
            <Link href="/">
                <img src="/images/logo.png" alt="logo" />
            </Link>
            <div className='flex gap-16 text-base font-medium outline-0'>
                <Link href="/">Home</Link>
                <Link href="/">Shop</Link>
                <Link href="/about">About</Link>
                <Link href="/">Contact</Link>
            </div>
            {/* <form className='flex items-center border border-gray-400 rounded-xl px-2 py-2 '>
                <input type="text" placeholder='Search the product name' className='outline-0 w-[300px] text-base' />
                <button>
                    <AiOutlineSearch className='ml-2 h-[28px] w-[28px] text-gray-400' />
                </button>
            </form> */}
        </div>
    );
};

export default Navbar;