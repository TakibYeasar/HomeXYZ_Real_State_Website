import React from 'react';
import test01 from "../../../assets/img/testimonial-1.jpg";
import test02 from "../../../assets/img/testimonial-2.jpg";
import test03 from "../../../assets/img/testimonial-3.jpg";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testdata = [
    {
        image: test01,
    },
    {
        image: test02,
    },
    {
        image: test03,
    },
]

const Testimonial = () => {
    return (
        <div className="container pt-20 pb-20">
            <div className="text-center mx-auto mb-5">
                <h1 className="mb-3 text-6xl font-bold">Our Clients Say!</h1>
                <p className='text-xl font-medium p-6'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd <br/> vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="grid grid-flow-col overflow-hidden items-center">

                <a href=""><FaArrowLeft className="text-5xl font-normal bg-primary-color text-font-light p-2 rounded-full m-2" /></a>

                {testdata.map((item, i) => (
                    <div className="col-span-6 bg-tertiary-color rounded p-5 ml-2 mr-2" key={i}>
                        <div className="bg-bg-color border rounded p-5">
                            <p className='text-xl font-normal'>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                            <div className="flex items-center">
                                <img className="rounded h-16 w-16 m-2" src={item?.image} />
                                <div className="ps-3">
                                    <h6 className="text-xl font-semibold">Client Name</h6>
                                    <small className='text-xl font-normal'>Profession</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <a href=""><FaArrowRight className="text-5xl font-normal bg-primary-color text-font-light p-2 rounded-full m-2" /></a>
                
            </div>
        </div>
    )
}

export default Testimonial