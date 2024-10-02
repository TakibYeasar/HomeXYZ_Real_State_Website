import React from 'react';
import { FaMapMarker, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="container bg-bg-color">
            <div className="text-center mx-auto mb-5 wow">
                <h1 className="mb-3 text-6xl font-bold">Contact Us</h1>
                <p className='text-xl font-normal'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="grid">
                <div className="col-span-12">
                    <div className="grid grid-flow-col gap-4 p-6">
                        <div className="col-span-4 bg-tertiary-color rounded p-4">
                            <div className="flex items-center bg-bg-color rounded p-8 text-xl font-normal" >
                                <FaMapMarker className="text-primary-color mr-2 border-dotted rounded-full border-r-primary-color" /><span>123 Street, New York, USA</span>
                            </div>
                        </div>
                        <div className="col-span-4 bg-tertiary-color rounded p-4">
                            <div className="flex items-center bg-bg-color rounded p-8 text-xl font-normal" >
                                <FaEnvelope className="text-primary-color mr-2 border-dotted rounded-full border-r-primary-color" /><span>info@example.com</span>
                            </div>
                        </div>
                        <div className="col-span-4 bg-tertiary-color rounded p-4">
                            <div className="flex items-center bg-bg-color rounded p-8 text-xl font-normal" >
                                <FaPhone className="text-primary-color mr-2 border-dotted rounded-full border-r-primary-color" /><span>+012 345 6789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className="m-4">
                    <iframe className="relative rounded w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!278.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"></iframe>
                </div>
                <div className="shadow m-4 p-8 rounded-lg">
                    <h1 className="m-4 main-title text-font-color">Have Any Query? Please Contact Us!</h1>
                    <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                    <form className="" role="form">
                        <div className="grid grid-flow-col">
                            <div className="mr-8 col-span-6">
                                <input type="text" className="p-4 mt-4 mb-4 w-full border" placeholder='Your Name' />
                            </div>
                            <div className="mr-8 col-span-6">
                                <input type="email" className="p-4 mt-4 mb-4 w-full border" placeholder='Your Email' />
                            </div>
                        </div>
                        <div className="mr-8">
                            <input type="text" className="p-4 mt-4 mb-4 w-full border" placeholder='Your Subject' />
                        </div>
                        <div className="mr-8">
                            <input type="text" className="p-4 mt-4 mb-4 w-full h-[20vh] border" placeholder='Your Message' />
                        </div>
                        <button type="submit" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact