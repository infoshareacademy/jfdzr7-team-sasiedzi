import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { ThemeProvider } from './helpers/apiCommunication';
import './style/reset.css';
import './style/helpers.css';
import './style/style.css';
import './style/grid.css';
import { App } from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
);
