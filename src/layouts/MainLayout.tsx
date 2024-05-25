import HeaderComponent from '@/components/HeaderComponent';
import LoadingComponent from '@/components/LoadingComponent';
import { Content } from 'antd/es/layout/layout';
import React, { lazy, Suspense } from 'react';
const AnimatedOutlet = lazy(() => import('@/components/AnimatedOutlet'));
const FooterComponent = lazy(() => import('@/components/FooterComponent'));

const MainLayout: React.FC = () => {
  return (
    <div className="lg:w-[960px] xl:w-[1180px] lg:mx-auto px-4">
      <HeaderComponent />
      <Suspense fallback={<LoadingComponent fullscreen />}>
        <Content>
          <AnimatedOutlet />
        </Content>
        <FooterComponent />
      </Suspense>
    </div>
  );
};

export default MainLayout;
