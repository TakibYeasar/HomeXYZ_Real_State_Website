import React, { useState } from 'react';

const InquiriesAndAppointments = () => {
    const [inquiries] = useState([
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            property: 'Luxury Villa',
            inquiryDate: '2024-09-30',
            message: 'Interested in scheduling a viewing.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            property: 'Modern Apartment',
            inquiryDate: '2024-09-28',
            message: 'Would like to know more about the amenities.',
        },
        {
            id: 3,
            name: 'Mike Johnson',
            email: 'mike@example.com',
            property: 'Cozy Cottage',
            inquiryDate: '2024-09-27',
            message: 'When is the next open house?',
        },
    ]);

    const handleScheduleAppointment = (id) => {
        // Logic to schedule an appointment (e.g., open a modal)
        console.log(`Schedule appointment for inquiry ID: ${id}`);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Inquiries & Appointments</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Inquiries</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="text-left">Name</th>
                                <th className="text-left">Email</th>
                                <th className="text-left">Property</th>
                                <th className="text-left">Inquiry Date</th>
                                <th className="text-left">Message</th>
                                <th className="text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inquiries.map((inquiry) => (
                                <tr key={inquiry.id} className="hover:bg-gray-100">
                                    <td>{inquiry.name}</td>
                                    <td>{inquiry.email}</td>
                                    <td>{inquiry.property}</td>
                                    <td>{inquiry.inquiryDate}</td>
                                    <td>{inquiry.message}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleScheduleAppointment(inquiry.id)}
                                        >
                                            Schedule Appointment
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

export default InquiriesAndAppointments;
