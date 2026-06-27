import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@/lib/i18n/i18n'; // Inicializa i18next cuando carga la app.
import App from './App/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
