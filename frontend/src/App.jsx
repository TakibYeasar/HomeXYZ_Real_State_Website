import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header } from './components';
import { Aboutus, AdminDashboard, AgentDashboard, BuyerDashboard, Contact, Homepage, Properties, Propertydetails, SellerDashboard } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/propertydetails" element={<Propertydetails />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dashboard Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/buyer" element={<BuyerDashboard />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/agent" element={<AgentDashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
