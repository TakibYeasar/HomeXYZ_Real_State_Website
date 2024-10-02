import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed for routing

const SellerDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('ManageListings');

  // Define your components here
  const renderComponent = () => {
    switch (activeComponent) {
      case 'ManageListings':
        return <ManageListings />;
      case 'ViewInquiries':
        return <ViewInquiries />;
      case 'ManageOffers':
        return <ManageOffers />;
      case 'Analytics':
        return <Analytics />;
      case 'FeaturedListings':
        return <FeaturedListings />;
      default:
        return <ManageListings />;
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
                onClick={() => setActiveComponent('ManageListings')}
                className={`block py-2 px-4 rounded hover:bg-blue-100 ${activeComponent === 'ManageListings' ? 'bg-blue-200' : ''
                  }`}
              >
                Manage Listings
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('ViewInquiries')}
                className={`block py-2 px-4 rounded hover:bg-blue-100 ${activeComponent === 'ViewInquiries' ? 'bg-blue-200' : ''
                  }`}
              >
                View Inquiries
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('ManageOffers')}
                className={`block py-2 px-4 rounded hover:bg-blue-100 ${activeComponent === 'ManageOffers' ? 'bg-blue-200' : ''
                  }`}
              >
                Manage Offers
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('Analytics')}
                className={`block py-2 px-4 rounded hover:bg-blue-100 ${activeComponent === 'Analytics' ? 'bg-blue-200' : ''
                  }`}
              >
                Analytics Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('FeaturedListings')}
                className={`block py-2 px-4 rounded hover:bg-blue-100 ${activeComponent === 'FeaturedListings' ? 'bg-blue-200' : ''
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

// Example component definitions (you can replace these with your actual components)
const ManageListings = () => (
  <div>
    <h3 className="text-lg font-bold">Manage Listings</h3>
    <p>Submit and manage your property listings here.</p>
    {/* Include form for submitting/updating listings */}
  </div>
);

const ViewInquiries = () => (
  <div>
    <h3 className="text-lg font-bold">View Inquiries</h3>
    <p>See all inquiries about your properties here.</p>
    {/* Display inquiries list */}
  </div>
);

const ManageOffers = () => (
  <div>
    <h3 className="text-lg font-bold">Manage Offers</h3>
    <p>Track and manage offers made on your properties.</p>
    {/* Display offers list and management options */}
  </div>
);

const Analytics = () => (
  <div>
    <h3 className="text-lg font-bold">Analytics Dashboard</h3>
    <p>Monitor views, inquiries, and interest levels in your properties.</p>
    {/* Include analytics data visualizations */}
  </div>
);

const FeaturedListings = () => (
  <div>
    <h3 className="text-lg font-bold">Featured Listings</h3>
    <p>Manage your featured or highlighted listings for better visibility.</p>
    {/* Provide options to feature listings */}
  </div>
);

export default SellerDashboard;
