import React from 'react';

const ManageListings = () => {
    const listings = [
        { id: 1, title: 'Luxury Villa', status: 'Available' },
        { id: 2, title: 'Modern Apartment', status: 'Under Offer' },
        { id: 3, title: 'Cozy Cottage', status: 'Available' },
        { id: 4, title: 'Spacious Townhouse', status: 'Sold' },
    ];

    const handleScheduleViewing = (id) => {
        // Logic to schedule a viewing in the actual implementation
        console.log(`Schedule viewing for listing with ID: ${id}`);
    };

    const handleContactAgent = (id) => {
        // Logic to facilitate contact with the seller in the actual implementation
        console.log(`Contact agent for listing with ID: ${id}`);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Client Listings</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Client Listings</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="text-left">Property Title</th>
                                <th className="text-left">Status</th>
                                <th className="text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listings.map((listing) => (
                                <tr key={listing.id} className="hover:bg-gray-100">
                                    <td>{listing.title}</td>
                                    <td>
                                        {listing.status === 'Available' && (
                                            <span className="badge badge-success">Available</span>
                                        )}
                                        {listing.status === 'Under Offer' && (
                                            <span className="badge badge-warning">Under Offer</span>
                                        )}
                                        {listing.status === 'Sold' && (
                                            <span className="badge badge-error">Sold</span>
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-primary mr-2"
                                            onClick={() => handleScheduleViewing(listing.id)}
                                        >
                                            Schedule Viewing
                                        </button>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => handleContactAgent(listing.id)}
                                        >
                                            Contact Agent
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageListings;
