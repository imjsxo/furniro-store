import Productcard from '@/component/Productcard';
import React, { Component } from 'react';

class productlist extends Component {
    render() {
        return (
            <div className='pb-12'>
                <img src="/images/plp-banner.png" alt="" />
                <div className='flex flex-wrap gap-7 max-w-[1286px] mx-auto mt-12'>
                    <Productcard />
                </div>
            </div>
        );
    }
}

export default productlist;