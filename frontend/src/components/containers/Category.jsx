import React from 'react';
import apartment from "/assets/img/icon-apartment.png";
import villa from "/assets/img/icon-villa.png";
import house from "/assets/img/icon-house.png";
import housing from "/assets/img/icon-housing.png";
import building from "/assets/img/icon-building.png";
import neighborhood from "/assets/img/icon-neighborhood.png";
import condominium from "/assets/img/icon-condominium.png";
import luxury from "/assets/img/icon-luxury.png";

const data = [
    {
        image: apartment,
        title: "Apartment",
        property: "123 Properties",
    },
    {
        image: villa,
        title: "Villa",
        property: "123 Properties",
    },
    {
        image: house,
        title: "Home",
        property: "123 Properties",
    },
    {
        image: housing,
        title: "Office",
        property: "123 Properties",
    },
    {
        image: building,
        title: "Building",
        property: "123 Properties",
    },
    {
        image: neighborhood,
        title: "Townhouse",
        property: "123 Properties",
    },
    {
        image: condominium,
        title: "Shop",
        property: "123 Properties",
    },
    {
        image: luxury,
        title: "Garage",
        property: "123 Properties",
    },
]


const Category = () => {
    return (
        <div className="container bg-bg-color pt-20">
            <div className="text-center mx-auto mb-5">
                <h1 className="p-4 text-6xl font-bold">Property Types</h1>
                <p className='text-xl font-medium m-4 p-4'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="p-6">
                <div className="grid grid-cols-4 gap-4">

                    {data.map((item, i) => (
                        <div className="shadow m-2 p-4 group hover:bg-primary-color" key={i}>
                            <a className="items-center rounded-md overflow-hidden" href="">
                                <div className="rounded p-4 items-center">
                                    <div className="mb-3 border-dotted border-primary-color p-2 rounded-full  group-hover:border-font-light">
                                        <img className="group-hover:text-font-light" src={item?.image} alt="Icon" />
                                    </div>
                                    <h6 className='text-xl font-bold group-hover:text-font-light'>{item?.title}</h6>
                                    <span className='text-xl font-normal text-primary-color group-hover:text-font-light'>{item?.property}</span>
                                </div>
                            </a>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

export default Category