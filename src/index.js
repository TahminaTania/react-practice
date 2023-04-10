import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlovalContext from './Components/GlovalContext';
import { Provider } from 'react-redux';
import store from './reduxStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <GlovalContext>
    <Provider store={store}>
          <App />
          </Provider>
    </GlovalContext>
  </React.StrictMode>

);
