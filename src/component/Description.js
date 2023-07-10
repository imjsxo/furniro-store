import React, { Component } from 'react';

class Description extends Component {
    render() {
        return (
            <div className='flex flex-col items-center'>
                <p className='text-base text-[#9F9F9F] text-justify mx-28'>
                    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.<br /><br />
                    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage
                    styled engineering. Setting the bar as one of the loudest speakers in its class,
                    the Kilburn is a compact, stout-hearted hero with
                    a well-balanced audio which boasts a clear midrange and extended highs for a
                    sound that is both articulate and pronounced.
                    The analogue knobs allow you to fine tune the controls to your personal
                    preferences while the guitar-influenced leather strap enables easy and stylish
                    travel.
                </p>
                <div className='flex mt-9'>
                    <img src="/images/desc-img.png" alt="image" />
                    <img src="/images/desc-img2.png" alt="image" />
                </div>
            </div>
        );
    }
}

export default Description;