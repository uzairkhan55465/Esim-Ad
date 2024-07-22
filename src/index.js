import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MaintenanceModeProvider } from './context/MaintenanceModeContext';

ReactDOM.render(
  <React.StrictMode>
    <MaintenanceModeProvider>
      <App />
    </MaintenanceModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
