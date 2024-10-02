import React from 'react';
import { FaChartLine, FaEye, FaUsers, FaDollarSign } from 'react-icons/fa'; // Icons for analytics

const SiteAnalytics = () => {
    // Sample data for analytics
    const analyticsData = {
        totalUsers: 250,
        totalPropertyViews: 1200,
        totalTransactions: 300,
        userActivity: [
            { id: 1, user: "John Doe", activity: "Viewed property: Luxury Apartment", time: "2 hours ago" },
            { id: 2, user: "Jane Smith", activity: "Inquired about: Family House", time: "1 hour ago" },
            { id: 3, user: "Mark Johnson", activity: "Viewed property: Modern Villa", time: "30 minutes ago" },
            // ...more dummy data
        ],
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Site Analytics</h1>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="card bg-white shadow-lg p-4 rounded-lg">
                    <div className="flex items-center">
                        <FaUsers className="text-3xl text-blue-500 mr-3" />
                        <div>
                            <h2 className="text-lg font-semibold">Total Users</h2>
                            <p className="text-2xl font-bold">{analyticsData.totalUsers}</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-white shadow-lg p-4 rounded-lg">
                    <div className="flex items-center">
                        <FaEye className="text-3xl text-green-500 mr-3" />
                        <div>
                            <h2 className="text-lg font-semibold">Property Views</h2>
                            <p className="text-2xl font-bold">{analyticsData.totalPropertyViews}</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-white shadow-lg p-4 rounded-lg">
                    <div className="flex items-center">
                        <FaDollarSign className="text-3xl text-purple-500 mr-3" />
                        <div>
                            <h2 className="text-lg font-semibold">Total Transactions</h2>
                            <p className="text-2xl font-bold">{analyticsData.totalTransactions}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* User Activity Table */}
            <h2 className="text-2xl font-semibold mb-4">Recent User Activity</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Activity</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {analyticsData.userActivity.length > 0 ? (
                            analyticsData.userActivity.map(activity => (
                                <tr key={activity.id} className="hover:bg-gray-100">
                                    <td>{activity.user}</td>
                                    <td>{activity.activity}</td>
                                    <td>{activity.time}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center">
                                    No recent activity.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SiteAnalytics;
