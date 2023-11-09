import React from 'react';
import { FaCheck } from "react-icons/fa";
import about from "../../../assets/img/about.jpg";

const About = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-2 items-center">
                <div className="">
                    <div className="relative overflow-hidden p-5 pe-0">
                        <img className="w-100 h-[60vh]" src={about} />
                    </div>
                </div>
                <div className="px-12">
                    <h1 className="mb-4 text-6xl font-bold">#1 Place To Find The Perfect Property</h1>
                    <p className="text-xl font-normal my-8">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p className='flex items-center text-xl font-normal my-2'><FaCheck className="text-primary-color mr-2" />Tempor erat elitr rebum at clita</p>
                    <p className='flex items-center text-xl font-normal my-2'><FaCheck className="text-primary-color mr-2" />Aliqu diam amet diam et eos</p>
                    <p className='flex items-center text-xl font-normal my-2'><FaCheck className="text-primary-color mr-2" />Clita duo justo magna dolore erat amet</p>
                    <a className="btn-primary" href="">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default About