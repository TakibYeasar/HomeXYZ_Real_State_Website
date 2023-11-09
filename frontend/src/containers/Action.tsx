import React from 'react';
import { FaPhone, FaCalendar } from "react-icons/fa";
import call from "../../../assets/img/call-to-action.jpg";

const Action = () => {
    return (
        <div className="container bg-tertiary-color rounded p-5 mx-2">
            <div className="bg-bg-color border rounded p-5">
                <div className="grid grid-cols-2 items-center p-6">
                        <div className="">
                            <img className="rounded w-100" src={call} alt="" />
                        </div>
                        <div className="p-6">
                            <div className="mb-4">
                            <h1 className="mb-3 text-6xl font-bold">Contact With Our Certified Agent</h1>
                                <p className='text-xl font-normal'>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                            </div>
                        <div className="flex p-6">
                            <a href="" className="flex items-center btn-primary py-3 px-4 me-2"><FaPhone className="m-2" />Make A Call</a>
                            <a href="" className="flex items-center btn-secondary py-3 px-4"><FaCalendar className="m-2" />Get Appoinment</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Action