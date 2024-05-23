import { HeartOutlined, LeftOutlined, PlayCircleFilled, RightOutlined, ShareAltOutlined } from '@ant-design/icons';
import { CustomArrowProps } from '@ant-design/react-slick';
import { Button, Carousel, CarouselProps } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const BannerCarouselComponent: React.FC = () => {
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

  return (
    <Carousel {...setting}>
      <div className="rounded-xl overflow-hidden relative">
        <img src="/doraemon_landscape.jpg" alt="doraemon_alt" />
        <div className="text-white absolute left-0 bottom-0 p-8 pt-20 w-full bg-gradient-to-b from-transparent from-0% to-black to-[150%]">
          <Link to="#!">
            <p className="font-bold text-3xl text-white hover:text-blue-custom transition-colors">
              Final: T1 vs Weibo Gaming
            </p>
          </Link>
          <p className="my-4">League of Legends Worlds Championship 2023</p>
          <div>
            <Button type="primary" size="large" className="font-semibold" icon={<PlayCircleFilled />}>
              Xem ngay
            </Button>

            <Button shape="circle" size="large" className="ml-4">
              <HeartOutlined className="-translate-y-[3px]" />
            </Button>

            <Button shape="circle" size="large" className="ml-4">
              <ShareAltOutlined className="-translate-y-[3px]" />
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden relative">
        <img src="/tear-of-steels_landscape.png" alt="tear-of-steels_alt" />
        <div className="text-white absolute left-0 bottom-0 p-8 pt-20 w-full bg-gradient-to-b from-transparent from-0% to-black to-[150%]">
          <Link to="#!">
            <p className="font-bold text-3xl text-white hover:text-blue-custom transition-colors">
              Final: T1 vs Weibo Gaming
            </p>
          </Link>
          <p className="my-4">League of Legends Worlds Championship 2023</p>
          <div>
            <Button type="primary" size="large" className="font-semibold" icon={<PlayCircleFilled />}>
              Xem ngay
            </Button>

            <Button shape="circle" size="large" className="ml-4">
              <HeartOutlined className="-translate-y-[3px]" />
            </Button>

            <Button shape="circle" size="large" className="ml-4">
              <ShareAltOutlined className="-translate-y-[3px]" />
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden relative">
        <img src="/tinoaa-landscape.jpg" alt="tinoaa_alt" />
        <div className="text-white absolute left-0 bottom-0 p-8 pt-20 w-full bg-gradient-to-b from-transparent from-0% to-black to-[150%]">
          <Link to="#!">
            <p className="font-bold text-3xl text-white hover:text-blue-custom transition-colors">
              Final: T1 vs Weibo Gaming
            </p>
          </Link>
          <p className="my-4">League of Legends Worlds Championship 2023</p>
          <div>
            <Button type="primary" size="large" className="font-semibold" icon={<PlayCircleFilled />}>
              Xem ngay
            </Button>

            <Button shape="circle" size="large" className="ml-4">
              <HeartOutlined className="-translate-y-[3px]" />
            </Button>

            <Button shape="circle" size="large" className="ml-4">
              <ShareAltOutlined className="-translate-y-[3px]" />
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden relative">
        <img src="/worlds-23_landscape.jpg" alt="worlds-23_alt" />
        <div className="text-white absolute left-0 bottom-0 p-8 pt-20 w-full bg-gradient-to-b from-transparent from-0% to-black to-[150%]">
          <Link to="#!">
            <p className="font-bold text-3xl text-white hover:text-blue-custom transition-colors">
              Final: T1 vs Weibo Gaming
            </p>
          </Link>
          <p className="my-4">League of Legends Worlds Championship 2023</p>
          <div>
            <Button type="primary" size="large" className="font-semibold" icon={<PlayCircleFilled />}>
              Xem ngay
            </Button>

            <Button shape="circle" size="large" className="ml-4">
              <HeartOutlined className="-translate-y-[3px]" />
            </Button>

            <Button shape="circle" size="large" className="ml-4">
              <ShareAltOutlined className="-translate-y-[3px]" />
            </Button>
          </div>
        </div>
      </div>
    </Carousel>
  );
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
