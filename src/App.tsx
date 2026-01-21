import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SpasPage from './pages/SpasPage';
import SwimSpasPage from './pages/SwimSpasPage';
import GazebosPage from './pages/GazebosPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LocationsPage from './pages/LocationsPage';

function App() {
  useEffect(() => {
    // Check if we need to redirect to the new domain
    const currentHost = window.location.host;
    const currentProtocol = window.location.protocol;
    const currentPath = window.location.pathname + window.location.search + window.location.hash;
    
    if (currentHost === 'ds-outdoorliving.com') {
      // Redirect to dsoutdoorliving.com (without www)
      window.location.replace(`${currentProtocol}//dsoutdoorliving.com${currentPath}`);
    } else if (currentHost === 'www.ds-outdoorliving.com') {
      // Redirect to www.dsoutdoorliving.com (with www)
      window.location.replace(`${currentProtocol}//www.dsoutdoorliving.com${currentPath}`);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hot-tubs" element={<SpasPage />} />
        <Route path="/swim-spas" element={<SwimSpasPage />} />
        <Route path="/contrast-therapy-spas" element={<GazebosPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
