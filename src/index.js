import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 🚨 [필독] 아래 이 줄이 반드시 있어야 합니다!
import { HashRouter } from 'react-router-dom'; 
import { Provider } from "react-redux"; 
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    {/* 🚨 HashRouter로 App을 정확히 감싸야 합니다 */}
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);