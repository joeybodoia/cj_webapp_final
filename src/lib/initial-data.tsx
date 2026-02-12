import React, { createContext, useContext } from 'react';
import type { InitialData } from '../types/initial-data';

const InitialDataContext = createContext<InitialData | null>(null);

export const InitialDataProvider = ({
  initialData,
  children
}: {
  initialData?: InitialData | null;
  children: React.ReactNode;
}) => {
  return (
    <InitialDataContext.Provider value={initialData ?? null}>
      {children}
    </InitialDataContext.Provider>
  );
};

export const useInitialData = () => useContext(InitialDataContext);
