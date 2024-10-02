import React, { useState } from 'react';

const InquiriesOffers = () => {
    const [inquiries, setInquiries] = useState([
        {
            id: 1,
            propertyTitle: 'Luxury Villa',
            buyer: 'John Doe',
            inquiryDate: '2024-09-15',
            status: 'Pending',
        },
        {
            id: 2,
            propertyTitle: 'Modern Apartment',
            buyer: 'Jane Smith',
            inquiryDate: '2024-09-16',
            status: 'Responded',
        },
    ]);

    const [offers, setOffers] = useState([
        {
            id: 1,
            propertyTitle: 'Luxury Villa',
            offerAmount: 500000,
            offerDate: '2024-09-17',
            status: 'Accepted',
        },
        {
            id: 2,
            propertyTitle: 'Modern Apartment',
            offerAmount: 450000,
            offerDate: '2024-09-18',
            status: 'Pending',
        },
    ]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Inquiries and Offers</h1>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Inquiries</h2>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-left">Property Title</th>
                            <th className="text-left">Buyer</th>
                            <th className="text-left">Inquiry Date</th>
                            <th className="text-left">Status</th>
                            <th className="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inquiries.map((inquiry) => (
                            <tr key={inquiry.id} className="hover:bg-gray-100">
                                <td>{inquiry.propertyTitle}</td>
                                <td>{inquiry.buyer}</td>
                                <td>{inquiry.inquiryDate}</td>
                                <td>
                                    <span className={`badge ${inquiry.status === 'Pending' ? 'badge-warning' : 'badge-success'}`}>
                                        {inquiry.status}
                                    </span>
                                </td>
                                <td className="text-right">
                                    <button className="btn btn-primary btn-sm">Respond</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Offers</h2>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-left">Property Title</th>
                            <th className="text-left">Offer Amount</th>
                            <th className="text-left">Offer Date</th>
                            <th className="text-left">Status</th>
                            <th className="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {offers.map((offer) => (
                            <tr key={offer.id} className="hover:bg-gray-100">
                                <td>{offer.propertyTitle}</td>
                                <td>${offer.offerAmount.toLocaleString()}</td>
                                <td>{offer.offerDate}</td>
                                <td>
                                    <span className={`badge ${offer.status === 'Pending' ? 'badge-warning' : 'badge-success'}`}>
                                        {offer.status}
                                    </span>
                                </td>
                                <td className="text-right">
                                    <button className="btn btn-secondary btn-sm">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InquiriesOffers;
