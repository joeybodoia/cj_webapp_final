import React from 'react';
import type { RouteObject } from 'react-router';
import App from './App';
import HomePage from './pages/HomePage';
import SpasPage from './pages/SpasPage';
import SwimSpasPage from './pages/SwimSpasPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PhoenixPage from './pages/PhoenixPage';
import SurprisePage from './pages/SurprisePage';
import ContrastTherapySpasPage from './pages/ContrastTherapySpasPage';
import PhoenixHotTubsPage from './pages/PhoenixHotTubsPage';
import PhoenixSwimSpasPage from './pages/PhoenixSwimSpasPage';
import PhoenixContrastTherapySpasPage from './pages/PhoenixContrastTherapySpasPage';
import SurpriseHotTubsPage from './pages/SurpriseHotTubsPage';
import SurpriseSwimSpasPage from './pages/SurpriseSwimSpasPage';
import SurpriseContrastTherapySpasPage from './pages/SurpriseContrastTherapySpasPage';
import MesaPage from './pages/MesaPage';
import MesaHotTubsPage from './pages/MesaHotTubsPage';
import MesaSwimSpasPage from './pages/MesaSwimSpasPage';
import MesaContrastTherapySpasPage from './pages/MesaContrastTherapySpasPage';

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/hot-tubs', element: <SpasPage /> },
      { path: '/swim-spas', element: <SwimSpasPage /> },
      { path: '/contrast-therapy-spas', element: <ContrastTherapySpasPage /> },
      { path: '/phoenix', element: <PhoenixPage /> },
      { path: '/phoenix/hot-tubs', element: <PhoenixHotTubsPage /> },
      { path: '/phoenix/swim-spas', element: <PhoenixSwimSpasPage /> },
      { path: '/phoenix/contrast-therapy-spas', element: <PhoenixContrastTherapySpasPage /> },
      { path: '/surprise', element: <SurprisePage /> },
      { path: '/surprise/hot-tubs', element: <SurpriseHotTubsPage /> },
      { path: '/surprise/swim-spas', element: <SurpriseSwimSpasPage /> },
      { path: '/surprise/contrast-therapy-spas', element: <SurpriseContrastTherapySpasPage /> },
      { path: '/mesa', element: <MesaPage /> },
      { path: '/mesa/hot-tubs', element: <MesaHotTubsPage /> },
      { path: '/mesa/swim-spas', element: <MesaSwimSpasPage /> },
      { path: '/mesa/contrast-therapy-spas', element: <MesaContrastTherapySpasPage /> },
      { path: '/product/:slug', element: <ProductDetailPage /> }
    ]
  }
];

export default routes;
