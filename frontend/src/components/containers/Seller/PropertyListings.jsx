import React, { useState } from 'react';

const PropertyListings = () => {
    const [property, setProperty] = useState({
        title: '',
        description: '',
        price: '',
        contact: '',
        images: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProperty({ ...property, [name]: value });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setProperty({ ...property, images: files });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to submit the property listing goes here
        console.log(property);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Your Property Listings</h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                {/* Property Title */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Property Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={property.title}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full"
                        placeholder="Enter the property title"
                    />
                </div>

                {/* Property Description */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        value={property.description}
                        onChange={handleChange}
                        required
                        className="textarea textarea-bordered w-full"
                        rows="4"
                        placeholder="Enter a description of the property"
                    />
                </div>

                {/* Property Price */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        value={property.price}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full"
                        placeholder="Enter the property price"
                    />
                </div>

                {/* Contact Details */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                        Contact Details
                    </label>
                    <input
                        type="text"
                        name="contact"
                        id="contact"
                        value={property.contact}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full"
                        placeholder="Enter your contact details"
                    />
                </div>

                {/* Property Images */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
                        Upload Images
                    </label>
                    <input
                        type="file"
                        name="images"
                        id="images"
                        onChange={handleImageChange}
                        accept="image/*"
                        multiple
                        className="file-input file-input-bordered w-full"
                    />
                </div>

                {/* Submit Button */}
                <div className="mb-4">
                    <button
                        type="submit"
                        className="btn btn-primary w-full"
                    >
                        Submit Listing
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PropertyListings;
