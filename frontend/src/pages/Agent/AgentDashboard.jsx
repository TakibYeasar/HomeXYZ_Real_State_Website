import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed for routing

const AgentDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('ManageListings');

  // Define your components here
  const renderComponent = () => {
    switch (activeComponent) {
      case 'ManageListings':
        return <ManageListings />;
      case 'ClientInquiries':
        return <ClientInquiries />;
      case 'ScheduleViewings':
        return <ScheduleViewings />;
      case 'PersonalProfile':
        return <PersonalProfile />;
      case 'Analytics':
        return <Analytics />;
      default:
        return <ManageListings />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold">Agent Dashboard</h2>
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
                Manage Client Listings
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('ClientInquiries')}
                className={`block py-2 px-4 rounded hover:bg-blue-100 ${activeComponent === 'ClientInquiries' ? 'bg-blue-200' : ''
                  }`}
              >
                Client Inquiries
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('ScheduleViewings')}
                className={`block py-2 px-4 rounded hover:bg-blue-100 ${activeComponent === 'ScheduleViewings' ? 'bg-blue-200' : ''
                  }`}
              >
                Schedule Viewings
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('PersonalProfile')}
                className={`block py-2 px-4 rounded hover:bg-blue-100 ${activeComponent === 'PersonalProfile' ? 'bg-blue-200' : ''
                  }`}
              >
                Personal Profile
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
    <h3 className="text-lg font-bold">Manage Client Listings</h3>
    <p>View and manage all your client property listings here.</p>
    {/* Include functionality for managing listings */}
  </div>
);

const ClientInquiries = () => (
  <div>
    <h3 className="text-lg font-bold">Client Inquiries</h3>
    <p>Access buyer and seller inquiries and messages.</p>
    {/* Display inquiries and messages here */}
  </div>
);

const ScheduleViewings = () => (
  <div>
    <h3 className="text-lg font-bold">Schedule Viewings</h3>
    <p>Manage your scheduled viewings and appointments.</p>
    {/* Include scheduling functionality */}
  </div>
);

const PersonalProfile = () => (
  <div>
    <h3 className="text-lg font-bold">Personal Profile</h3>
    <p>Showcase your experience, properties sold, and client reviews.</p>
    {/* Include profile management features */}
  </div>
);

const Analytics = () => (
  <div>
    <h3 className="text-lg font-bold">Analytics Dashboard</h3>
    <p>Monitor leads, client engagement, and property performance.</p>
    {/* Include analytics data visualizations */}
  </div>
);

export default AgentDashboard;
