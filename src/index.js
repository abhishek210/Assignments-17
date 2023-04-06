import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import { CustomProvider } from './Component/validationcontextapi/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomProvider>
    <App />
    </CustomProvider>
  </React.StrictMode>
);
