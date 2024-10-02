import React, { useState } from 'react';

const PastSearchesAndAlerts = () => {
    // Sample data for past searches
    const [pastSearches, setPastSearches] = useState([
        {
            id: 1,
            location: "San Francisco, CA",
            propertyType: "Apartment",
            priceRange: "$800,000 - $1,200,000",
            date: "2023-09-15",
        },
        {
            id: 2,
            location: "Austin, TX",
            propertyType: "Single Family Home",
            priceRange: "$400,000 - $600,000",
            date: "2023-08-25",
        },
    ]);

    // Function to simulate receiving alerts
    const handleAlert = () => {
        alert("You have new properties matching your saved criteria!");
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Past Searches & Alerts</h1>

            {/* Past Searches Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Your Past Searches</h2>
                {pastSearches.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600">
                                    <th className="py-3 px-4 border-b">Location</th>
                                    <th className="py-3 px-4 border-b">Property Type</th>
                                    <th className="py-3 px-4 border-b">Price Range</th>
                                    <th className="py-3 px-4 border-b">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pastSearches.map((search) => (
                                    <tr key={search.id} className="hover:bg-gray-100">
                                        <td className="py-3 px-4 border-b">{search.location}</td>
                                        <td className="py-3 px-4 border-b">{search.propertyType}</td>
                                        <td className="py-3 px-4 border-b">{search.priceRange}</td>
                                        <td className="py-3 px-4 border-b">{search.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-gray-500">No past searches found.</p>
                )}
            </div>

            {/* Alerts Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Alerts for New Properties</h2>
                <p className="mb-4">You can receive alerts for new properties matching your saved criteria.</p>
                <button
                    onClick={handleAlert}
                    className="btn btn-primary">
                    Check for New Alerts
                </button>
            </div>
        </div>
    );
};

export default PastSearchesAndAlerts;
