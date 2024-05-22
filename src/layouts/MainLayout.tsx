import HeaderComponent from '@/components/HeaderComponent';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="lg:max-w-[960px] xl:max-w-[1180px] lg:mx-auto px-4">
      <HeaderComponent />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};

export default MainLayout;
