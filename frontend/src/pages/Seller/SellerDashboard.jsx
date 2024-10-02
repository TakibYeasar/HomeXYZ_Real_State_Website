import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed for routing
import { AnalyticsDashboard, FeatureListings, InquiriesOffers, PropertyListings } from '../../components';

const SellerDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('PropertyListings');

  // Define your components here
  const renderComponent = () => {
    switch (activeComponent) {
      case 'PropertyListings':
        return <PropertyListings />;
      case 'InquiriesOffers':
        return <InquiriesOffers />;
      case 'AnalyticsDashboard':
        return <AnalyticsDashboard />;
      case 'FeatureListings':
        return <FeatureListings />;
      default:
        return <PropertyListings />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold">Seller Dashboard</h2>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('PropertyListings')}
                className={`block py-2 px-4 rounded hover:bg-blue-100 ${activeComponent === 'PropertyListings' ? 'bg-blue-200' : ''
                  }`}
              >
                Manage Listings
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('InquiriesOffers')}
                className={`block py-2 px-4 rounded hover:bg-blue-100 ${activeComponent === 'InquiriesOffers' ? 'bg-blue-200' : ''
                  }`}
              >
                View Inquiries
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('AnalyticsDashboard')}
                className={`block py-2 px-4 rounded hover:bg-blue-100 ${activeComponent === 'AnalyticsDashboard' ? 'bg-blue-200' : ''
                  }`}
              >
                AnalyticsDashboard Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('FeatureListings')}
                className={`block py-2 px-4 rounded hover:bg-blue-100 ${activeComponent === 'FeatureListings' ? 'bg-blue-200' : ''
                  }`}
              >
                Featured Listings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          {renderComponent()}
        </div>
      </main>
    </div>
  );
};

export default SellerDashboard;
