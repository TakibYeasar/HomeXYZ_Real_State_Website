import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa'; // Icons for actions
import 'daisyui/dist/full.css'; // Ensure you have daisyUI

const usersData = [
    { id: 1, name: "John Doe", role: "Buyer", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Seller", email: "jane@example.com", status: "Pending" },
    { id: 3, name: "Michael Brown", role: "Agent", email: "michael@example.com", status: "Active" },
    // ... Add more dummy data
];

const ManageUsers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState(usersData);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleEdit = (userId) => {
        console.log("Edit user:", userId);
    };

    const handleDelete = (userId) => {
        const updatedUsers = users.filter(user => user.id !== userId);
        setUsers(updatedUsers);
        console.log("User deleted:", userId);
    };

    const handleApprove = (userId) => {
        const updatedUsers = users.map(user =>
            user.id === userId ? { ...user, status: 'Active' } : user
        );
        setUsers(updatedUsers);
        console.log("User approved:", userId);
    };

    const handleReject = (userId) => {
        console.log("User rejected:", userId);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Users</h1>

            {/* Search and Filters */}
            <div className="flex justify-between mb-4">
                <div className="flex items-center w-full max-w-sm">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search users..."
                        className="input input-bordered input-primary w-full"
                    />
                    <FaSearch className="ml-2 text-gray-500" />
                </div>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map(user => (
                                <tr key={user.id} className="hover:bg-gray-100">
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.status === 'Pending' ? (
                                            <span className="badge badge-warning">Pending</span>
                                        ) : (
                                            <span className="badge badge-success">Active</span>
                                        )}
                                    </td>
                                    <td className="flex space-x-3">
                                        <button
                                            className="btn btn-sm btn-info"
                                            onClick={() => handleEdit(user.id)}
                                        >
                                            <FaEdit className="mr-1" /> Edit
                                        </button>
                                        <button
                                            className="btn btn-sm btn-error"
                                            onClick={() => handleDelete(user.id)}
                                        >
                                            <FaTrash className="mr-1" /> Delete
                                        </button>
                                        {user.status === 'Pending' && (
                                            <>
                                                <button
                                                    className="btn btn-sm btn-success"
                                                    onClick={() => handleApprove(user.id)}
                                                >
                                                    <FaCheck className="mr-1" /> Approve
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-error"
                                                    onClick={() => handleReject(user.id)}
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
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
