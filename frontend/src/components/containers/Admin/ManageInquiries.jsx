import React, { useState } from 'react';
import { FaSearch, FaUserCheck, FaTrash, FaEye, FaRegEnvelope } from 'react-icons/fa'; // Icons for actions
import 'daisyui/dist/full.css'; // Ensure you have daisyUI

// Sample inquiries data
const inquiriesData = [
    { id: 1, user: "John Doe", property: "Luxury Apartment", message: "Is this property still available?", status: "New" },
    { id: 2, user: "Jane Smith", property: "Family House", message: "Can I schedule a viewing?", status: "Responded" },
    { id: 3, user: "Mark Johnson", property: "Modern Villa", message: "I am interested in this property.", status: "New" },
    // ...more dummy data
];

// Sample transactions data
const transactionsData = [
    { id: 1, user: "John Doe", property: "Luxury Apartment", amount: "$500,000", date: "2024-10-01", status: "Completed" },
    { id: 2, user: "Jane Smith", property: "Family House", amount: "$300,000", date: "2024-09-15", status: "Pending" },
    // ...more dummy data
];

const ManageInquiries = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [inquiries, setInquiries] = useState(inquiriesData);
    const [transactions, setTransactions] = useState(transactionsData);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleDeleteInquiry = (inquiryId) => {
        const updatedInquiries = inquiries.filter(inquiry => inquiry.id !== inquiryId);
        setInquiries(updatedInquiries);
        console.log("Inquiry deleted:", inquiryId);
    };

    const filteredInquiries = inquiries.filter(inquiry =>
        inquiry.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.property.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Inquiries & Transactions</h1>

            {/* Search Bar for Inquiries */}
            <div className="flex justify-between mb-4">
                <div className="flex items-center w-full max-w-sm">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search inquiries..."
                        className="input input-bordered input-primary w-full"
                    />
                    <FaSearch className="ml-2 text-gray-500" />
                </div>
            </div>

            {/* Inquiries Table */}
            <div className="overflow-x-auto mb-8">
                <h2 className="text-2xl font-semibold mb-4">Inquiries</h2>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Property</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredInquiries.length > 0 ? (
                            filteredInquiries.map(inquiry => (
                                <tr key={inquiry.id} className="hover:bg-gray-100">
                                    <td>{inquiry.user}</td>
                                    <td>{inquiry.property}</td>
                                    <td>{inquiry.message}</td>
                                    <td>
                                        {inquiry.status === 'New' ? (
                                            <span className="badge badge-warning">New</span>
                                        ) : (
                                            <span className="badge badge-success">Responded</span>
                                        )}
                                    </td>
                                    <td className="flex space-x-3">
                                        <button
                                            className="btn btn-sm btn-info"
                                            onClick={() => console.log("View inquiry details:", inquiry.id)}
                                        >
                                            <FaEye className="mr-1" /> View
                                        </button>
                                        <button
                                            className="btn btn-sm btn-error"
                                            onClick={() => handleDeleteInquiry(inquiry.id)}
                                        >
                                            <FaTrash className="mr-1" /> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No inquiries found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Transactions Table */}
            <div className="overflow-x-auto">
                <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Property</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.length > 0 ? (
                            transactions.map(transaction => (
                                <tr key={transaction.id} className="hover:bg-gray-100">
                                    <td>{transaction.user}</td>
                                    <td>{transaction.property}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.date}</td>
                                    <td>
                                        {transaction.status === 'Completed' ? (
                                            <span className="badge badge-success">Completed</span>
                                        ) : (
                                            <span className="badge badge-warning">Pending</span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No transactions found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageInquiries;
