import React from 'react';
import page_heading from "/assets/img/page-heading-bg.jpg";
import property from "/assets/img/property-1.jpg";
import icon01 from "/assets/img/info-icon-01.png";
import icon02 from "/assets/img/info-icon-02.png";
import icon03 from "/assets/img/info-icon-03.png";
import icon04 from "/assets/img/info-icon-04.png";

const PropertyDetails = () => {
    return (
        <div className="">
            <div className="relative text-center">
                <img src={page_heading} alt='' className='w-screen' />
                <div className="absolute top-[40%] left-[40%] text-center">
                    <span className="text-4xl font-semibold text-font-light"><a href="#">Home</a>  /  Single Property</span>
                </div>
            </div>

            <div className="container">
                <div className="py-20 px-0 grid grid-cols-2 grid-flow-col">
                    <div className="col-span-8">
                        <div className="float-none my-6">
                            <img src={property} alt="" className='h-[60vh] w-full' />
                        </div>
                        <div className="">
                            <span className="btn-primary">Apparment</span>
                            <h4 className='my-6 text-3xl font-semibold'>24 New Street Miami, OR 24560</h4>
                            <p className='text-base font-normal'>Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template for your company website. TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates" target="_blank">best free CSS templates</a> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.<br />When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.</p>
                        </div>
                        <div className="bg-bg-color my-20 p-12 rounded-md">
                            <div className="my-4">
                                <h2 className="text-xl font-semibold text-font-color hover:text-primary-color">
                                    Best useful links ?</h2>
                                <div className=''>
                                    <div className="">
                                        Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                </div>
                            </div>
                            <div className="my-4">
                                <h2 className="text-xl font-semibold text-font-color hover:text-primary-color">
                                    How does this work ?
                                </h2>
                                <div className="" >
                                    <div className="">
                                        Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                </div>
                            </div>
                            <div className="my-4">
                                <h2 className="text-xl font-semibold text-font-color hover:text-primary-color">
                                    Why is Villa the best ?
                                </h2>
                                <div className="" >
                                    <div className="">
                                        Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 bg-bg-color h-[50vh] rounded-md py-35 px-30 ml-60">
                        <ul>
                            <li className='flex mx-4 my-8'>
                                <img src={icon01} alt="" className='mx-6' />
                                <h4 className='text-2xl font-semibold'>450 m2<br /><span className='text-base font-normal'>Total Flat Space</span></h4>
                            </li>
                            <li className='flex mx-4 my-8'>
                                <img src={icon02} alt="" className='mx-6' />
                                <h4 className='text-2xl font-semibold'>Contract<br /><span className='text-base font-normal'>Contract Ready</span></h4>
                            </li>
                            <li className='flex mx-4 my-8'>
                                <img src={icon03} alt="" className='mx-6' />
                                <h4 className='text-2xl font-semibold'>Payment<br /><span className='text-base font-normal'>Payment Process</span></h4>
                            </li>
                            <li className='flex mx-4 my-8'>
                                <img src={icon04} alt="" className='mx-6' />
                                <h4 className='text-2xl font-semibold'>Safety<br /><span className='text-base font-normal'>24/7 Under Control</span></h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetails