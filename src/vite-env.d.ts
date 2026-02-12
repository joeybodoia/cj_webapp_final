/// <reference types="vite/client" />
import type { InitialData } from './types/initial-data';

declare global {
  interface Window {
    __INITIAL_DATA__?: InitialData;
  }
}

export {};
