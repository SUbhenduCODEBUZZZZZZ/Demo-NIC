import React from 'react';
import ReactDOM from 'react-dom/client';
import DashboardIndex from './Index';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import RTIPortal from './NewRecord';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      < DashboardIndex />
      < RTIPortal />
    </BrowserRouter>
  </React.StrictMode>
);
