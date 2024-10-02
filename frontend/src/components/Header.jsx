import React from 'react';
import c1 from "/assets/img/carousel-1.jpg";
import c2 from "/assets/img/carousel-2.jpg";
import deal from "/assets/img/icon-deal.png";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='container'>
            <div className="relative bg-bg-color">
                <nav className="absolute w-full bg-bg-color grid grid-flow-col items-center px-8 mx-12 shadow transform translate-y-20">
                    <a href="/" className="col-span-4 flex items-center text-center">
                        <div className="p-2 me-2">
                            <img className="" src={deal} alt="Icon" />
                        </div>
                        <h1 className="">Makaan</h1>
                    </a>

                    <div className="col-span-8 ms-auto flex items-center justify-between">
                        <a href="/" className="nav-link">Home</a>
                        <a href="/about" className="nav-link">About</a>
                        <a href="/properties" className="nav-link">Property</a>
                        <a href="/contact" className="nav-link">Contact</a>
                        <button type="button" className="btn-primary"><span className=""> Add Property</span></button>
                    </div>
                </nav>

                <div className="p-0 grid grid-cols-2 items-center">
                    <div className="p-5">
                        <h1 className="mb-4 text-8xl font-bold">Find A <span className="text-primary-color">Perfect Home</span> To Live With Your Family</h1>
                        <p className="m-4 pb-2 text-xl font-medium">Vero elitr justo clita lorem. Ipsum dolor at sed stet
                            sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                        <a href="" className="btn-primary m-4">Get Started</a>
                    </div> 
                    <div className="flex items-center"> 
                        <div className="grid transform translate-x-[50%]">
                            <a href=""><FaArrowLeft className="text-5xl font-normal bg-primary-color text-font-light p-2 rounded-full m-2" /></a>
                            <a href=""><FaArrowRight className="text-5xl font-normal bg-primary-color text-font-light p-2 rounded-full m-2" /></a>
                        </div>
                        <div className="">
                            <img className="h-[80vh]" src={c1} alt="" />
                        </div>
                        {/* <div className="">
                        <img className="" src={c2} alt="" />
                    </div> */}
                    </div>
                </div>
            </div>

            <div className="grid grid-flow-col bg-primary-color p-8">
                <div className="col-span-10">
                    <div className="grid grid-flow-col items-center">
                        <div className="col-span-4 ml-2 mr-2">
                            <input type="text" className="border-0 p-6 rounded-md w-full h-full" placeholder="Search Keyword" />
                        </div>
                        <div className="col-span-4 ml-2 mr-2">
                            <select className="border-0 p-6 rounded-md w-full h-full">
                                <option selected>Property Type</option>
                                <option value="1">Property Type 1</option>
                                <option value="2">Property Type 2</option>
                                <option value="3">Property Type 3</option>
                            </select>
                        </div>
                        <div className="col-span-4 ml-2 mr-2">
                            <select className="border-0 p-6 rounded-md w-full h-full">
                                <option selected>Location</option>
                                <option value="1">Location 1</option>
                                <option value="2">Location 2</option>
                                <option value="3">Location 3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <button className="btn-secondary hover:bg-blue-950 w-full h-full">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Header