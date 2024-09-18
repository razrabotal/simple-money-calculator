import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@picocss/pico';

createRoot(document.body).render(
  <StrictMode>
    <App />
  </StrictMode>
);
