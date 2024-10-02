import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaCheck, FaTimes, FaHome, FaBuilding } from 'react-icons/fa'; // Icons for actions
import 'daisyui/dist/full.css'; // Ensure you have daisyUI

// Sample properties data
const propertiesData = [
    { id: 1, name: "Luxury Apartment", type: "Apartment", price: "$500,000", status: "Available" },
    { id: 2, name: "Family House", type: "House", price: "$300,000", status: "Pending" },
    { id: 3, name: "Modern Villa", type: "Villa", price: "$1,200,000", status: "Sold" },
    // ...more dummy data
];

const ManageProperties = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [properties, setProperties] = useState(propertiesData);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleEdit = (propertyId) => {
        console.log("Edit property:", propertyId);
    };

    const handleDelete = (propertyId) => {
        const updatedProperties = properties.filter(property => property.id !== propertyId);
        setProperties(updatedProperties);
        console.log("Property deleted:", propertyId);
    };

    const handleApprove = (propertyId) => {
        const updatedProperties = properties.map(property =>
            property.id === propertyId ? { ...property, status: 'Available' } : property
        );
        setProperties(updatedProperties);
        console.log("Property approved:", propertyId);
    };

    const handleReject = (propertyId) => {
        console.log("Property rejected:", propertyId);
    };

    const filteredProperties = properties.filter(property =>
        property.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Properties</h1>

            {/* Search Bar */}
            <div className="flex justify-between mb-4">
                <div className="flex items-center w-full max-w-sm">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search properties..."
                        className="input input-bordered input-primary w-full"
                    />
                    <FaSearch className="ml-2 text-gray-500" />
                </div>
            </div>

            {/* Properties Table */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProperties.length > 0 ? (
                            filteredProperties.map(property => (
                                <tr key={property.id} className="hover:bg-gray-100">
                                    <td>{property.name}</td>
                                    <td>
                                        {property.type === 'House' ? <FaHome /> : <FaBuilding />} {property.type}
                                    </td>
                                    <td>{property.price}</td>
                                    <td>
                                        {property.status === 'Pending' ? (
                                            <span className="badge badge-warning">Pending</span>
                                        ) : property.status === 'Available' ? (
                                            <span className="badge badge-success">Available</span>
                                        ) : (
                                            <span className="badge badge-error">Sold</span>
                                        )}
                                    </td>
                                    <td className="flex space-x-3">
                                        <button
                                            className="btn btn-sm btn-info"
                                            onClick={() => handleEdit(property.id)}
                                        >
                                            <FaEdit className="mr-1" /> Edit
                                        </button>
                                        <button
                                            className="btn btn-sm btn-error"
                                            onClick={() => handleDelete(property.id)}
                                        >
                                            <FaTrash className="mr-1" /> Delete
                                        </button>
                                        {property.status === 'Pending' && (
                                            <>
                                                <button
                                                    className="btn btn-sm btn-success"
                                                    onClick={() => handleApprove(property.id)}
                                                >
                                                    <FaCheck className="mr-1" /> Approve
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-error"
                                                    onClick={() => handleReject(property.id)}
                                                >
                                                    <FaTimes className="mr-1" /> Reject
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No properties found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProperties;
