import React, { Children, Fragment, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
/* import user from './user.json'
import { Profile } from 'components/Profile'; */


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
 </React.StrictMode>
);
