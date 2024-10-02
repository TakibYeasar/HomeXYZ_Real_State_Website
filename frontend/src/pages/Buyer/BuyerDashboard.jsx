import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed for routing

const BuyerDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('Browse');

  // Define your components here
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Browse':
        return <BrowseProperties />;
      case 'Favorites':
        return <Favorites />;
      case 'Viewings':
        return <ScheduleViewings />;
      case 'SearchHistory':
        return <SearchHistory />;
      case 'FinancialTools':
        return <FinancialTools />;
      case 'Offers':
        return <Offers />;
      default:
        return <BrowseProperties />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold">Buyer Dashboard</h2>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('Browse')}
                className={`block py-2 px-4 rounded hover:bg-green-100 ${activeComponent === 'Browse' ? 'bg-green-200' : ''
                  }`}
              >
                Browse Properties
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('Favorites')}
                className={`block py-2 px-4 rounded hover:bg-green-100 ${activeComponent === 'Favorites' ? 'bg-green-200' : ''
                  }`}
              >
                Favorites
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('Viewings')}
                className={`block py-2 px-4 rounded hover:bg-green-100 ${activeComponent === 'Viewings' ? 'bg-green-200' : ''
                  }`}
              >
                Schedule Viewings
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('SearchHistory')}
                className={`block py-2 px-4 rounded hover:bg-green-100 ${activeComponent === 'SearchHistory' ? 'bg-green-200' : ''
                  }`}
              >
                Search History
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('FinancialTools')}
                className={`block py-2 px-4 rounded hover:bg-green-100 ${activeComponent === 'FinancialTools' ? 'bg-green-200' : ''
                  }`}
              >
                Financial Tools
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('Offers')}
                className={`block py-2 px-4 rounded hover:bg-green-100 ${activeComponent === 'Offers' ? 'bg-green-200' : ''
                  }`}
              >
                Track Offers
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
const BrowseProperties = () => (
  <div>
    <h3 className="text-lg font-bold">Browse Properties</h3>
    <p>Here you can browse and filter property listings.</p>
  </div>
);

const Favorites = () => (
  <div>
    <h3 className="text-lg font-bold">Favorites</h3>
    <p>Your saved favorite properties will appear here.</p>
  </div>
);

const ScheduleViewings = () => (
  <div>
    <h3 className="text-lg font-bold">Schedule Viewings</h3>
    <p>Manage your scheduled viewings here.</p>
  </div>
);

const SearchHistory = () => (
  <div>
    <h3 className="text-lg font-bold">Search History</h3>
    <p>Your past searches will be listed here.</p>
  </div>
);

const FinancialTools = () => (
  <div>
    <h3 className="text-lg font-bold">Financial Tools</h3>
    <p>Access mortgage and affordability calculators.</p>
  </div>
);

const Offers = () => (
  <div>
    <h3 className="text-lg font-bold">Track Offers</h3>
    <p>Keep track of your offers and negotiations.</p>
  </div>
);

export default BuyerDashboard;
