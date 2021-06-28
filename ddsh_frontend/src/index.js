import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import koKR from 'antd/lib/locale/ko_KR';
import moment from 'moment';
import 'moment/locale/ko';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons/css/tachyons.min.css';
import 'antd/dist/antd.css';

// locale을 가장 먼저 초기화 시켜준다
moment.locale('ko');

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ConfigProvider locale={koKR}>
        <App />
      </ConfigProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
