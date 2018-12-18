import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Hande from './Hande';

import { Provider } from 'react-redux'
import store from './store';

// 绑定store
ReactDOM.render(
  <Provider store={store}>
    <Hande />
  </Provider>, 
  document.getElementById('root')
);