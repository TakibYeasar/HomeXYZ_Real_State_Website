import React, { useState } from 'react';
import { ManageInquiries, ManageProperties, ManageUsers, SiteAnalytics } from '../../components';

const AdminDashboard = () => {
  // State to manage which component/content to show
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  // Define your components here
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <DashboardContent />;
      case 'Users':
        return <ManageUsers />;
      case 'Properties':
        return <ManageProperties />;
      case 'Analytics':
        return <ManageInquiries />;
      case 'Settings':
        return <SiteAnalytics />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary-color text-white">
        <div className="p-6 text-xl font-semibold text-center">
          Admin Dashboard
        </div>
        <nav className="mt-10">
          <ul>
            <li
              onClick={() => setActiveComponent('Dashboard')}
              className={`p-4 cursor-pointer ${activeComponent === 'Dashboard' ? 'bg-primary-color' : ''} hover:bg-primary-color`}
            >
              Dashboard
            </li>
            <li
              onClick={() => setActiveComponent('Users')}
              className={`p-4 cursor-pointer ${activeComponent === 'Users' ? 'bg-primary-color' : ''} hover:bg-primary-color`}
            >
              Users
            </li>
            <li
              onClick={() => setActiveComponent('Properties')}
              className={`p-4 cursor-pointer ${activeComponent === 'Properties' ? 'bg-primary-color' : ''} hover:bg-primary-color`}
            >
              Properties
            </li>
            <li
              onClick={() => setActiveComponent('Analytics')}
              className={`p-4 cursor-pointer ${activeComponent === 'Analytics' ? 'bg-primary-color' : ''} hover:bg-primary-color`}
            >
              Analytics
            </li>
            <li
              onClick={() => setActiveComponent('Settings')}
              className={`p-4 cursor-pointer ${activeComponent === 'Settings' ? 'bg-primary-color' : ''} hover:bg-primary-color`}
            >
              Settings
            </li>
          </ul>
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-10">
        {renderComponent()}
      </main>
    </div>
  );
};

// Example component for Dashboard content
const DashboardContent = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Overview Cards */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Total Properties</h2>
          <p className="mt-2 text-primary-color">124</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Users Registered</h2>
          <p className="mt-2 text-primary-color">320</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Pending Approvals</h2>
          <p className="mt-2 text-primary-color">10</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
