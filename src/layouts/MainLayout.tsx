import AnimatedOutlet from '@/components/AnimatedOutlet';
import FooterComponent from '@/components/FooterComponent';
import HeaderComponent from '@/components/HeaderComponent';
import { Content } from 'antd/es/layout/layout';
import React from 'react';

const MainLayout: React.FC = () => {
  return (
    <div className="lg:w-[960px] xl:w-[1180px] lg:mx-auto px-4">
      <HeaderComponent />
      <Content>
        <AnimatedOutlet />
      </Content>
      <FooterComponent />
    </div>
  );
};

export default MainLayout;
