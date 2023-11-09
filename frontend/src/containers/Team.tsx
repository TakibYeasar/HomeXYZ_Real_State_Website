import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import team01 from "../../../assets/img/team-1.jpg";
import team02 from "../../../assets/img/team-2.jpg";
import team03 from "../../../assets/img/team-3.jpg";
import team04 from "../../../assets/img/team-4.jpg";

const teamdata = [
    {
        image: team01,
    },
    {
        image: team02,
    },
    {
        image: team03,
    },
    {
        image: team04,
    },
]

const Team = () => {
    return (
        <div className="container pt-20 pb-20">
            <div className="text-center mx-auto mb-5">
                <h1 className="mb-3 text-6xl font-bold">Property Agents</h1>
                <p className='text-xl font-medium'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd <br/> vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="grid grid-flow-col gap-4 p-6">

                {teamdata.map((item, i) => (
                    <div className="col-span-4" key={i}>
                        <div className="rounded overflow-hidden shadow">
                            <div className="relative items-center">
                                <img className="" src={item?.image} alt="" />
                                <div className="absolute transform -translate-y-[50%] flex items-center">
                                    <a className="m-2" href=""><FaFacebook className="text-4xl text-primary-color bg-bg-color shadow-lg rounded-full p-2" /></a>
                                    <a className="m-2" href=""><FaTwitter className="text-4xl text-primary-color bg-bg-color shadow-lg rounded-full p-2" /></a>
                                    <a className="m-2" href=""><FaInstagram className="text-4xl text-primary-color bg-bg-color shadow-lg rounded-full p-2" /></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0 text-2xl font-medium text-secondary-color">Full Name</h5>
                                <small className='text-base font-medium'>Designation</small>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Team