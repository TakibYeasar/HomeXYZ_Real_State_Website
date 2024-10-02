import React from 'react';
import { Bar } from 'react-chartjs-2';

const AnalyticsDashboard = () => {
    // Sample data for analytics
    const viewsData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Property Views',
                data: [120, 150, 180, 200],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const inquiriesData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Inquiries',
                data: [30, 50, 70, 90],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Analytics Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Property Views Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Property Views</h2>
                    <Bar data={viewsData} options={{ maintainAspectRatio: false }} />
                </div>

                {/* Inquiries Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Inquiries</h2>
                    <Bar data={inquiriesData} options={{ maintainAspectRatio: false }} />
                </div>
            </div>

            {/* Interest Levels Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Interest Levels</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="text-left">Property Title</th>
                                <th className="text-left">Views</th>
                                <th className="text-left">Inquiries</th>
                                <th className="text-left">Interest Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Sample data for properties */}
                            {[
                                { title: 'Luxury Villa', views: 200, inquiries: 30, interestLevel: 'High' },
                                { title: 'Modern Apartment', views: 180, inquiries: 25, interestLevel: 'Medium' },
                                { title: 'Cozy Cottage', views: 150, inquiries: 20, interestLevel: 'Low' },
                            ].map((property, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td>{property.title}</td>
                                    <td>{property.views}</td>
                                    <td>{property.inquiries}</td>
                                    <td>
                                        <span className={`badge ${property.interestLevel === 'High' ? 'badge-success' : property.interestLevel === 'Medium' ? 'badge-warning' : 'badge-error'}`}>
                                            {property.interestLevel}
                                        </span>
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

export default AnalyticsDashboard;
