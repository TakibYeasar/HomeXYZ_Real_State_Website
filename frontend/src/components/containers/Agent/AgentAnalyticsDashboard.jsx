import React from 'react';

const AgentAnalyticsDashboard = () => {
    // Sample data for analytics
    const analyticsData = {
        leads: 120,
        engagementRate: 85, // percentage
        propertiesListed: 30,
        propertiesSold: 25,
        averagePrice: 350000,
        topProperty: {
            name: 'Luxury Villa in Downtown',
            views: 1500,
            inquiries: 30,
        },
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Analytics Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Leads Generated</h2>
                    <p className="text-4xl font-bold text-blue-600">{analyticsData.leads}</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Engagement Rate</h2>
                    <p className="text-4xl font-bold text-green-600">{analyticsData.engagementRate}%</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Properties Listed</h2>
                    <p className="text-4xl font-bold text-purple-600">{analyticsData.propertiesListed}</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Properties Sold</h2>
                    <p className="text-4xl font-bold text-red-600">{analyticsData.propertiesSold}</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Average Property Price</h2>
                    <p className="text-4xl font-bold text-orange-600">${analyticsData.averagePrice.toLocaleString()}</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Property</h2>
                    <p className="text-lg font-semibold">{analyticsData.topProperty.name}</p>
                    <p className="text-gray-600">Views: {analyticsData.topProperty.views}</p>
                    <p className="text-gray-600">Inquiries: {analyticsData.topProperty.inquiries}</p>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lead Sources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold text-gray-700">Website</h3>
                        <p className="text-gray-500">50 leads</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold text-gray-700">Social Media</h3>
                        <p className="text-gray-500">30 leads</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold text-gray-700">Referrals</h3>
                        <p className="text-gray-500">40 leads</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentAnalyticsDashboard;
