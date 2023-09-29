import React, { Component } from 'react';

class about extends Component {
    render() {
        return (
            <div className='max-w-[1440px] mx-auto mb-20'>
                <section className='w-full'>
                    <img src="/images/about.jpg" alt="images" className='w-full h-[600px]' />
                </section>
                <section>
                    <div className='border-b-2 border-[#555555] mb-12'>
                        <h2 className='text-center text-4xl my-10 py-4'>ABOUT FUNIRO</h2>
                        <div className='w-[95%] mx-auto'>
                            <h3 className='text-center font-semibold text-3xl pb-5 mb-4'>
                                Funiro Furniture was established over 60 years ago and is now one of Australia's largest importers of quality furniture with a proud Australian history.
                            </h3>
                            <p className='text-center text-sm font-light pb-7 mb-3'>Funiro sources its products from around the world and
                                imports directly from some of the largest and most respected manufacturers globally. In 2017 Funiro expanded internationally to New Zealand,
                                Auckland, opening its first store Boxing Day in Mount Wellington.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 w-[95%] mx-auto text-center'>
                        <div className='flex flex-col items-center w-1/3'>
                            <h3 className='text-4xl font-semibold mb-5'>60 years</h3>
                            <p className='text-base font-light mb-5'>Funiro has been trading in Australia for over 60 years.</p>
                        </div>
                        <div className='flex flex-col items-center w-1/3'>
                            <h3 className='text-4xl font-semibold mb-5'>12,000 containers</h3>
                            <p className='text-base font-light mb-5'>Funiro Furniture imports 12,000 containers of furniture per year.</p>
                        </div>
                        <div className='flex flex-col items-center w-1/3'>
                            <h3 className='text-4xl font-semibold mb-5'>Quality</h3>
                            <p className='text-base font-light mb-5'>Funiro has a proud success story of bringing quality furniture to the Australian market.</p>
                        </div>
                    </div>
                    <div className='w-[95%] mx-auto mt-[50px]'>
                        <img src="/images/why-buy-middle-banner.jpg" alt="banner" className='w-full' />
                        <h3 className='text-center text-[40px] font-semibold my-8'>Our Values</h3>
                        <div className='flex gap-7'>
                            <div className="w-1/2">
                                <h3 className='pt-5 font-semibold text-3xl'>Design & Manufacture</h3>
                                <div>
                                    <p className='my-4'>
                                        It's What's Inside That Counts! All of our lounges are protected by a Lifetime Frame Warranty, covering structure and framework. Please refer to our Warranty Information for full details.
                                    </p>
                                    <p className='my-4'>
                                        All lounge frames are constructed from a combination of structural components, engineered to give
                                        the frame strength durability for many years.
                                    </p>
                                    <p className='my-4'>
                                        Each lounge design has a slightly different manufacturing method and you can see various examples
                                        of the method our frames may be constructed with below. The common characteristics to all of these
                                        methods are:
                                    </p>
                                    <ul className='pl-5'>
                                        <li className='list-[square] text-base mb-2'>Kiln dried hardwood timber acting as the main structural support</li>
                                        <li className='list-[square] text-base mb-2'>Resilient high density foam core in all cushions</li>
                                        <li className='list-[square] text-base mb-2'>Robust polyester fibre fill and dacron filling for support and shape</li>
                                        <li className='list-[square] text-base mb-2'>Zig-Zag springs or highly tensioned elastic webbing seating support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <h3 className='pt-5 font-semibold text-3xl'>Design & Manufacture</h3>
                                <div>
                                    <p className='my-4'>Purchasing furniture for your home is an investment in your future. Whether you are just starting
                                        out in your first home or already comfortably established, perhaps upsizing to accommodate a growing
                                        family, maybe
                                        even wanting to furnish your holiday house, whatever your motivation and means at Funiro you
                                        can be confident that you will find quality furniture at the right price.
                                    </p>
                                    <p className='my-4'>
                                        At Funiro we are constantly updating our range with all types of consumers in mind which is
                                        why we can offer uniquely beautiful furniture at unbelievably affordable prices. Once you see what we have
                                        to offer you too will agree Funiro furniture and furnishings are by far the best value furniture around.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[95%] mx-auto mt-[50px]'>
                        <img src="/images/about-2.jpg" alt="banner" className='w-full' />
                    </div>
                </section>
            </div>
        );
    }
}

export default about;