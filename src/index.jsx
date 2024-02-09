import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { storeInstance } from './store';

const feedbackStore = storeInstance();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={feedbackStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
