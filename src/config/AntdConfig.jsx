import React from 'react';
import { ConfigProvider } from 'antd';

const AntdConfig = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#000000',
          colorPrimaryHover: '#2d2d2d',
          borderRadius: 0,
          colorBgContainer: '#ffffff',
          colorLink: '#ffffff',
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdConfig;