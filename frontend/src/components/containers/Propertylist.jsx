import React, { useState } from 'react';
import { FaRulerCombined, FaBed, FaBath, FaMapMarker } from "react-icons/fa";
import prp01 from "/assets/img/property-1.jpg";
import prp02 from "/assets/img/property-2.jpg";
import prp03 from "/assets/img/property-3.jpg";
import prp04 from "/assets/img/property-4.jpg";
import prp05 from "/assets/img/property-5.jpg";
import prp06 from "/assets/img/property-6.jpg";

const property = [
    {
        image: prp01,
        for: "For Sell",
        category: "Appartment",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp02,
        for: "For Rent",
        category: "Villa",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp03,
        for: "For Sell",
        category: "Office",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp04,
        for: "For Rent",
        category: "Home",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp05,
        for: "For Sell",
        category: "Building",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp06,
        for: "For Rent",
        category: "Shop",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp01,
        for: "For Sell",
        category: "Appartment",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp02,
        for: "For Rent",
        category: "Villa",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp03,
        for: "For Sell",
        category: "Office",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp04,
        for: "For Rent",
        category: "Home",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp05,
        for: "For Sell",
        category: "Building",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp06,
        for: "For Rent",
        category: "Shop",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp01,
        for: "For Sell",
        category: "Appartment",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp02,
        for: "For Rent",
        category: "Villa",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp03,
        for: "For Sell",
        category: "Office",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp04,
        for: "For Rent",
        category: "Home",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp05,
        for: "For Sell",
        category: "Building",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
    {
        image: prp06,
        for: "For Rent",
        category: "Shop",
        price: "134652",
        title: "Golden Urban House For Sell",
        address: "123 Street, New York, USA",
        sqft: "1000",
        bed: "3",
        bath: "2",
    },
]

const Propertylist = () => {

    const [items, setItems] = useState(property);
    const filterItem = (forItem) => {
        const updatedItems = property.filter((curElement) => {
            return curElement.for == forItem;
        });
        setItems(updatedItems);
    }


    return (
        <div className="container pt-20 pb-20">
            <div className="grid grid-flow-col p-6 items-center">
                <div className="col-span-6">
                    <div className="mx-auto mb-5">
                        <h1 className="mb-3 text-6xl font-bold">Property Listing</h1>
                        <p className='text-xl font-medium'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd <br /> vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                </div>
                <div className="col-span-6 text-start">
                    <div className="flex justify-end mb-5">
                        <a className="btn-primary" onClick={() => filterItem("Featured")}>Featured</a>
                        <a className="btn-secondary" onClick={() => filterItem("For Sell")}>For Sell</a>
                        <a className="btn-secondary" onClick={() => filterItem("For Rent")}>For Rent</a>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <div className="grid gap-4">


                    {property.map((item, i) => (
                        <div className="col-span-4 shadow m-2 p-4" key={i}>
                            <div className="rounded overflow-hidden">
                                <div className="relative overflow-hidden">
                                    <a href=""><img className="" src={item?.image} alt="" /></a>
                                    <div className="bg-primary-color rounded text-font-light absolute start-0 top-0 m-4 py-1 px-3">{item?.for}</div>
                                    <div className="bg-bg-color rounded-sm text-xl text-primary-color absolute start-0 bottom-0 mx-4 pt-1 px-3">{item?.category}</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="mb-3 text-primary-color text-xl font-medium">${item?.price}</h5>
                                    <a className="block mb-2 text-secondary-color text-3xl font-medium" href="">{item?.title}</a>
                                    <p className='flex items-center text-base font-normal'><FaMapMarker className="text-primary-color mr-2" />{item?.address}</p>
                                </div>
                                <div className="p-4 pb-0 flex justify-between">
                                    <small className="flex items-center text-base font-medium text-center py-2"><FaRulerCombined className="text-primary-color mr-2" />{item?.sqft} Sqft</small>
                                    <small className="flex items-center text-base font-medium text-center py-2"><FaBed className="text-primary-color mr-2" />{item?.bed} Bed</small>
                                    <small className="flex items-center text-base font-medium text-center py-2"><FaBath className="text-primary-color mr-2" />{item?.bath} Bath</small>
                                </div>
                            </div>
                        </div>
                    ))}


                    <div className="col-span-12 text-center">
                        <a className="btn-primary py-3 px-5" href="">Browse More Property</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Propertylist