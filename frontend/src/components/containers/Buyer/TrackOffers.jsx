import React, { useState } from 'react';

const TrackOffers = () => {
    // Sample data for offers and inquiries
    const [offers, setOffers] = useState([
        {
            id: 1,
            property: "Modern Apartment in San Francisco",
            offerAmount: "$1,100,000",
            status: "Negotiating",
            inquiryDate: "2023-09-10",
        },
        {
            id: 2,
            property: "Charming Cottage in Austin",
            offerAmount: "$500,000",
            status: "Accepted",
            inquiryDate: "2023-08-25",
        },
        {
            id: 3,
            property: "Luxury Villa in Miami",
            offerAmount: "$2,300,000",
            status: "Rejected",
            inquiryDate: "2023-07-15",
        },
    ]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Track Your Offers & Inquiries</h1>

            {/* Offers Table */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Your Offers</h2>
                {offers.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600">
                                    <th className="py-3 px-4 border-b">Property</th>
                                    <th className="py-3 px-4 border-b">Offer Amount</th>
                                    <th className="py-3 px-4 border-b">Status</th>
                                    <th className="py-3 px-4 border-b">Inquiry Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {offers.map((offer) => (
                                    <tr key={offer.id} className="hover:bg-gray-100">
                                        <td className="py-3 px-4 border-b">{offer.property}</td>
                                        <td className="py-3 px-4 border-b">{offer.offerAmount}</td>
                                        <td className="py-3 px-4 border-b">{offer.status}</td>
                                        <td className="py-3 px-4 border-b">{offer.inquiryDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-gray-500">No offers found.</p>
                )}
            </div>

            {/* Inquiry Details Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Recent Inquiries</h2>
                <p className="mb-4">
                    Keep track of your inquiries and their statuses to stay updated.
                </p>
                <ul className="list-disc list-inside space-y-2">
                    {offers.map((offer) => (
                        <li key={offer.id} className="bg-white p-4 rounded-md shadow-md">
                            <strong>{offer.property}</strong>: {offer.status} (Inquiry Date: {offer.inquiryDate})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TrackOffers;
