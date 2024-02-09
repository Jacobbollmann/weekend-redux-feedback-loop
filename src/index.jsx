import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { storeInstance } from './store';
import App from './components/App/App';
import './index.css';

const feedbackStore = storeInstance();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={feedbackStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
