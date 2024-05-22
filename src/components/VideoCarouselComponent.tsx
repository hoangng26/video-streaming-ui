import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CustomArrowProps } from '@ant-design/react-slick';
import { Carousel, CarouselProps } from 'antd';
import React, { PropsWithChildren } from 'react';

interface VideoCarouselProps {
  title: string;
  slideToShow?: number;
}

const VideoCarouselComponent: React.FC<PropsWithChildren<VideoCarouselProps>> = ({ children, title, slideToShow }) => {
  const settings: CarouselProps = {
    slidesToShow: slideToShow || 3,
    slidesToScroll: 3,
    arrows: true,
    dots: false,
    infinite: false,
    lazyLoad: 'progressive',
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    prevArrow: <CarouselArrowLeft />,
    nextArrow: <CarouselArrowRight />,
  };

  return (
    <div className="py-8">
      <h2 className="font-bold text-2xl mb-4">{title}</h2>
      <Carousel {...settings}>{children}</Carousel>
    </div>
  );
};

export default VideoCarouselComponent;

const CarouselArrowLeft: React.FC<CustomArrowProps> = ({ currentSlide, slideCount, ...props }) => {
  if (!slideCount) {
    return;
  }

  return (
    <button
      {...props}
      className={`slick-prev slick-arrow${
        currentSlide === 0 ? ' slick-disabled ' : ' '
      }after:content-none w-fit h-fit text-3xl -translate-y-full`}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <span className="hover:bg-gradient-to-l hover:from-transparent hover:from-0% hover:to-sky-500 hover:to-[300%] rounded-md p-2 py-4">
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
      }after:content-none w-fit h-fit text-3xl -translate-y-full`}
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <span className="hover:bg-gradient-to-r hover:from-transparent hover:from-0% hover:to-sky-500 hover:to-[300%] rounded-md p-2 py-4">
        <RightOutlined />
      </span>
    </button>
  );
};
