import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './site.css';

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
