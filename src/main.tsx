import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import { InitialDataProvider } from './lib/initial-data';
import './index.css';

const router = createBrowserRouter(routes);
const initialData = window.__INITIAL_DATA__ ?? null;

hydrateRoot(document.getElementById('root')!,
  <StrictMode>
    <InitialDataProvider initialData={initialData}>
      <RouterProvider router={router} />
    </InitialDataProvider>
  </StrictMode>
);
