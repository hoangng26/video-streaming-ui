import BannerCarouselComponent from '@/components/BannerCarouselComponent';
import VideoCarouselComponent from '@/components/VideoCarouselComponent';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <>
      <BannerCarouselComponent />
      <VideoCarouselComponent />
    </>
  );
};

export default HomePage;
