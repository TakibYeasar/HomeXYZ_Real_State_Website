import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header } from './components';
import { Aboutus, Contact, Homepage, Properties, Propertydetails } from './pages';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/propertydetails" element={<Propertydetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
