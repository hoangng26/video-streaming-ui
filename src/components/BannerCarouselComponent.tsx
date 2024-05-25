import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CustomArrowProps } from '@ant-design/react-slick';
import { Carousel, CarouselProps } from 'antd';
import React, { PropsWithChildren } from 'react';

const BannerCarouselComponent: React.FC<PropsWithChildren> = ({ children }) => {
  const setting: CarouselProps = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    fade: true,
    waitForAnimate: false,
    lazyLoad: 'progressive',
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    prevArrow: <CarouselArrowLeft />,
    nextArrow: <CarouselArrowRight />,
  };

  return <Carousel {...setting}>{children}</Carousel>;
};

export default BannerCarouselComponent;

const CarouselArrowLeft: React.FC<CustomArrowProps> = ({ currentSlide, slideCount, ...props }) => {
  if (!slideCount) {
    return;
  }

  return (
    <button
      {...props}
      className={`slick-prev slick-arrow${
        currentSlide === 0 ? ' slick-disabled ' : ' '
      }after:content-none w-fit h-fit text-3xl`}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <span className="hover:bg-gradient-to-l hover:from-transparent hover:from-0% hover:to-sky-500 hover:to-[300%] rounded-md p-2 py-8">
        <LeftOutlined />
      </span>
    </button>
  );
};

const CarouselArrowRight: React.FC<CustomArrowProps> = ({ currentSlide, slideCount, ...props }) => {
  if (!slideCount) {
    return;
  }

  return (
    <button
      {...props}
      className={`slick-next slick-arrow${
        currentSlide === slideCount - 1 ? ' slick-disabled ' : ' '
      }after:content-none w-fit h-fit text-3xl`}
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <span className="hover:bg-gradient-to-r hover:from-transparent hover:from-0% hover:to-sky-500 hover:to-[300%] rounded-md p-2 py-8">
        <RightOutlined />
      </span>
    </button>
  );
};
