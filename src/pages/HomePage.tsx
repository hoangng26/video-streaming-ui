import BannerCarouselComponent from '@/components/BannerCarouselComponent';
import LinkWrapper from '@/components/LinkWrapper';
import VideoCarouselComponent from '@/components/VideoCarouselComponent';
import { landscapePoster, portraitPoster } from '@/constants/TestVideoInfo';
import { getImgTitleKey } from '@/utils';
import { HeartOutlined, PlayCircleFilled, ShareAltOutlined } from '@ant-design/icons';
import { Button, Card, Image } from 'antd';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <>
      <BannerCarouselComponent>
        {landscapePoster.concat(landscapePoster.slice()).map((item, index) => (
          <LinkWrapper to={item.href} key={`banner-${index}_${getImgTitleKey(item.title)}`}>
            <Card
              cover={<Image preview={false} src={item.srcImg} alt={`${getImgTitleKey(item.title)}_alt`} />}
              className="rounded-xl overflow-hidden relative h-fit [&>.ant-card-body]:p-0"
            >
              <div className="text-white absolute left-0 bottom-0 p-8 pt-20 w-full bg-gradient-to-b from-transparent from-0% to-black to-[150%]">
                <p className="font-bold text-3xl text-white hover:text-blue-custom transition-colors w-fit">
                  {item.title}
                </p>
                <p className="my-4">{item.category}</p>
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
            </Card>
          </LinkWrapper>
        ))}
      </BannerCarouselComponent>

      <VideoCarouselComponent title="Latest Released" slideToShow={landscapePoster.length}>
        {landscapePoster.concat(landscapePoster.slice()).map((item, index) => (
          <LinkWrapper to={item.href} key={`latest-${index}_${getImgTitleKey(item.title)}`}>
            <Image
              preview={false}
              className="rounded-xl overflow-hidden scale-[98%] shadow-custom"
              src={item.srcImg}
              alt={`${getImgTitleKey(item.title)}_alt`}
            />
            <span className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">{item.title}</span>
          </LinkWrapper>
        ))}
      </VideoCarouselComponent>

      <VideoCarouselComponent title="Trending">
        {portraitPoster.concat(portraitPoster.slice()).map((item, index) => (
          <LinkWrapper to={item.href} key={`latest-${index}_${getImgTitleKey(item.title)}`}>
            <Image
              preview={false}
              className="object-cover h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
              src={item.srcImg}
              alt={`${getImgTitleKey(item.title)}_alt`}
            />
            <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">{item.title}</p>
          </LinkWrapper>
        ))}
      </VideoCarouselComponent>

      <VideoCarouselComponent title="Top 10 Movie" slideToShow={5}>
        {landscapePoster.concat(landscapePoster.slice()).map((item, index) => (
          <LinkWrapper to={item.href} key={`latest-${index}_${getImgTitleKey(item.title)}`}>
            <Image
              preview={false}
              className="rounded-xl overflow-hidden scale-[98%] shadow-custom"
              src={item.srcImg}
              alt={`${getImgTitleKey(item.title)}_alt`}
            />
            <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">{item.title}</p>
          </LinkWrapper>
        ))}
      </VideoCarouselComponent>
    </>
  );
};

export default HomePage;
