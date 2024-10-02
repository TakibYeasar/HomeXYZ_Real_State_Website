import React from 'react';

const FeatureListings = () => {
    const listings = [
        { id: 1, title: 'Luxury Villa', featured: false },
        { id: 2, title: 'Modern Apartment', featured: false },
        { id: 3, title: 'Cozy Cottage', featured: false },
        { id: 4, title: 'Spacious Townhouse', featured: false },
    ];

    const handleFeatureToggle = (id) => {
        // Logic to toggle feature status in the actual implementation
        console.log(`Toggle feature for listing with ID: ${id}`);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Feature Your Listings</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Manage Featured Listings</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="text-left">Property Title</th>
                                <th className="text-left">Featured</th>
                                <th className="text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listings.map((listing) => (
                                <tr key={listing.id} className="hover:bg-gray-100">
                                    <td>{listing.title}</td>
                                    <td>
                                        {listing.featured ? (
                                            <span className="badge badge-success">Featured</span>
                                        ) : (
                                            <span className="badge badge-error">Not Featured</span>
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            className={`btn ${listing.featured ? 'btn-error' : 'btn-primary'}`}
                                            onClick={() => handleFeatureToggle(listing.id)}
                                        >
                                            {listing.featured ? 'Unfeature' : 'Feature'}
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

export default FeatureListings;
