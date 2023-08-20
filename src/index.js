// Importing necessary dependencies and styles
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Importing Bootstrap styles and JavaScript bundle
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// Importing FontAwesome styles
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// Creating a root element to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the app component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
