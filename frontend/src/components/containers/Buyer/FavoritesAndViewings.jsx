import React, { useState } from 'react';

const FavoritesAndViewings = () => {
    // Sample data for favorite properties
    const [favoriteProperties, setFavoriteProperties] = useState([
        {
            id: 1,
            name: "Luxury Apartment",
            location: "New York, NY",
            price: "$1,200,000",
            image: "/images/property1.jpg",
        },
        {
            id: 2,
            name: "Modern Villa",
            location: "Los Angeles, CA",
            price: "$2,500,000",
            image: "/images/property2.jpg",
        },
    ]);

    const handleInquire = (property) => {
        // Logic for inquiry, e.g., opening a modal or sending a message
        alert(`Inquiring about ${property.name}`);
    };

    const handleScheduleViewing = (property) => {
        // Logic for scheduling a viewing, e.g., opening a calendar or form
        alert(`Scheduling a viewing for ${property.name}`);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">My Favorites & Viewings</h1>

            {/* Favorite Properties Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Favorite Properties</h2>
                {favoriteProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {favoriteProperties.map((property) => (
                            <div key={property.id} className="card bg-white shadow-lg rounded-lg overflow-hidden">
                                <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{property.name}</h3>
                                    <p className="text-gray-600">{property.location}</p>
                                    <p className="text-gray-800 font-bold">{property.price}</p>
                                    <div className="mt-4 flex space-x-4">
                                        <button
                                            onClick={() => handleInquire(property)}
                                            className="btn btn-primary">
                                            Inquire
                                        </button>
                                        <button
                                            onClick={() => handleScheduleViewing(property)}
                                            className="btn btn-secondary">
                                            Schedule Viewing
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No favorite properties added yet.</p>
                )}
            </div>
        </div>
    );
};

export default FavoritesAndViewings;
