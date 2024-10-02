import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed for routing
import { AgentAnalyticsDashboard, InquiriesAndAppointments, ManageListings, PersonalProfile } from '../../components';

const AgentDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('ManageListings');

  // Define your components here
  const renderComponent = () => {
    switch (activeComponent) {
      case 'ManageListings':
        return <ManageListings />;
      case 'InquiriesAndAppointments':
        return <InquiriesAndAppointments />;
      case 'PersonalProfile':
        return <PersonalProfile />;
      case 'AgentAnalyticsDashboard':
        return <AgentAnalyticsDashboard />;
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
                onClick={() => setActiveComponent('InquiriesAndAppointments')}
                className={`block py-2 px-4 rounded hover:bg-blue-100 ${activeComponent === 'InquiriesAndAppointments' ? 'bg-blue-200' : ''
                  }`}
              >
                Client Inquiries
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
                onClick={() => setActiveComponent('AgentAnalyticsDashboard')}
                className={`block py-2 px-4 rounded hover:bg-blue-100 ${activeComponent === 'AgentAnalyticsDashboard' ? 'bg-blue-200' : ''
                  }`}
              >
                AgentAnalyticsDashboard Dashboard
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


export default AgentDashboard;
