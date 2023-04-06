import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlovalContext from './Components/GlovalContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <GlovalContext>
      <App />
   </GlovalContext>
  </React.StrictMode>
);
