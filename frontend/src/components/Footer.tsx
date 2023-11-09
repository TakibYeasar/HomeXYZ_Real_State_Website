import React from 'react';
import { FaMapMarker, FaPhone, FaEnvelope, FaTwitter, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import p1 from "../../../assets/img/property-1.jpg";
import p2 from "../../../assets/img/property-2.jpg";
import p3 from "../../../assets/img/property-3.jpg";
import p4 from "../../../assets/img/property-4.jpg";
import p5 from "../../../assets/img/property-5.jpg";
import p6 from "../../../assets/img/property-6.jpg";

const Footer = () => {
    return (
        <div className='container'>
            <div className="bg-blue-950 text-font-light p-12">
                <div className="grid grid-cols-4">
                    <div className="">
                        <h5 className="main-title mb-4">Get In Touch</h5>
                        <p className="mb-2 mr-4 flex nav-item text-font-light items-center"><FaMapMarker />123 Street, New York, USA</p>
                        <p className="mb-2 mr-4 flex nav-item text-font-light items-center"><FaPhone />+012 345 67890</p>
                        <p className="mb-2 mr-4 flex nav-item text-font-light items-center"><FaEnvelope />info@example.com</p>
                        <div className="flex pt-2">
                            <a className="btn-social" href=""><FaTwitter /></a>
                            <a className="btn-social" href=""><FaFacebook /></a>
                            <a className="btn-social" href=""><FaYoutube /></a>
                            <a className="btn-social" href=""><FaLinkedin /></a>
                        </div>
                    </div>
                    <div className=" grid">
                        <h5 className="main-title mb-4">Quick Links</h5>
                        <a className="nav-item text-font-light" href="">About Us</a>
                        <a className="nav-item text-font-light" href="">Contact Us</a>
                        <a className="nav-item text-font-light" href="">Our Services</a>
                        <a className="nav-item text-font-light" href="">Privacy Policy</a>
                        <a className="nav-item text-font-light" href="">Terms & Condition</a>
                    </div>
                    <div className="">
                        <h5 className="main-title mb-4">Photo Gallery</h5>
                        <div className="grid grid-cols-3 gap-2 pt-2">
                            <div className="">
                                <img className="rounded bg-bg-color p-1 h-20 w-30" src={p1} alt="" />
                            </div>
                            <div className="">
                                <img className="rounded bg-bg-color p-1 h-20 w-30" src={p2} alt="" />
                            </div>
                            <div className="">
                                <img className="rounded bg-bg-color p-1 h-20 w-30" src={p3} alt="" />
                            </div>
                            <div className="">
                                <img className="rounded bg-bg-color p-1 h-20 w-30" src={p4} alt="" />
                            </div>
                            <div className="">
                                <img className="rounded bg-bg-color p-1 h-20 w-30" src={p5} alt="" />
                            </div>
                            <div className="">
                                <img className="rounded bg-bg-color p-1 h-20 w-30" src={p6} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h5 className="main-title mb-4">Newsletter</h5>
                        <p className='text-font-light'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="relative mx-auto">
                            <input className="transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn-primary" >SignUp</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-flow-col justify-between mt-12">
                    <div className="mb-3">
                        &copy; <a className="" href="#">Your Site Name</a>, All Right Reserved. Designed By <a className="" href="https://htmlcodex.com">HTML Codex</a>
                    </div>
                    <div className="flex">
                        <a className='nav-item text-font-light' href="">Home</a>
                        <a className='nav-item text-font-light' href="">Cookies</a>
                        <a className='nav-item text-font-light' href="">Help</a>
                        <a className='nav-item text-font-light' href="">FQAs</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer