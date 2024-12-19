import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 usa este módulo
import App from './App';

// Crear la raíz con React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
