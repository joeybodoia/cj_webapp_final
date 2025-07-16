import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SpasPage from './pages/SpasPage';
import SwimSpasPage from './pages/SwimSpasPage';
import GazebosPage from './pages/GazebosPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spas" element={<SpasPage />} />
        <Route path="/swim-spas" element={<SwimSpasPage />} />
        <Route path="/gazebos" element={<GazebosPage />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;