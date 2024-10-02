import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed for routing
import { FavoritesAndViewings, FinancialTools, PastSearchesAndAlerts, TrackOffers } from '../../components';

const BuyerDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('FavoritesAndViewings');

  // Define your components here
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Browse':
        return <BrowseProperties />;
      case 'FavoritesAndViewings':
        return <FavoritesAndViewings />;
      case 'PastSearchesAndAlerts':
        return <PastSearchesAndAlerts />;
      case 'FinancialTools':
        return <FinancialTools />;
      case 'TrackOffers':
        return <TrackOffers />;
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
                onClick={() => setActiveComponent('FavoritesAndViewings')}
                className={`block py-2 px-4 rounded hover:bg-green-100 ${activeComponent === 'FavoritesAndViewings' ? 'bg-green-200' : ''
                  }`}
              >
                FavoritesAndViewings
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => setActiveComponent('PastSearchesAndAlerts')}
                className={`block py-2 px-4 rounded hover:bg-green-100 ${activeComponent === 'PastSearchesAndAlerts' ? 'bg-green-200' : ''
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
                onClick={() => setActiveComponent('TrackOffers')}
                className={`block py-2 px-4 rounded hover:bg-green-100 ${activeComponent === 'TrackOffers' ? 'bg-green-200' : ''
                  }`}
              >
                Track TrackOffers
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


export default BuyerDashboard;
