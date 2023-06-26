import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='xl:container mx-auto flex flex-row justify-between'>
            <img src="/images/logo.png" alt="logo" />
            <div className='flex gap-16'>
                <Link href="/">Home</Link>
                <Link href="/">Shop</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;