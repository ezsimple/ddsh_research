import { ConfigProvider } from 'antd';
import ko_KR from 'antd/es/locale-provider/ko_KR';
import React from 'react';
import App from './App';

const Root = () => {
  return (
    <ConfigProvider locale={ko_KR}>
      <App />
    </ConfigProvider>
  );
};

export default Root;
