import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import user from "info/user.json"
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App user={user} />
  </React.StrictMode>
);
