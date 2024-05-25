import { HeartOutlined, PlayCircleFilled, ShareAltOutlined } from '@ant-design/icons';
import { Button, Card, Image } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import BannerCarouselComponent from '@/components/BannerCarouselComponent';
import VideoCarouselComponent from '@/components/VideoCarouselComponent';

interface Poster {
  href: string;
  srcImg: string;
  title: string;
  category: string;
}

const landscapePoster: Poster[] = [
  {
    href: '/watch/0',
    srcImg: '/doraemon_landscape.jpg',
    title: "Doraemon the Movie: Nobita's Little Star Wars (2022)",
    category: 'Movie',
  },
  {
    href: '/watch/0',
    srcImg: '/tear-of-steels_landscape.png',
    title: 'Tear of Steel',
    category: 'Movie',
  },
  {
    href: '/watch/0',
    srcImg: '/tinoaa-landscape.jpg',
    title: "There's No One At All",
    category: 'Music',
  },
  {
    href: '/watch/0',
    srcImg: '/worlds-23_landscape.jpg',
    title: 'Final: T1 vs Weibo Gaming',
    category: 'League of Legends Worlds Championship 2023',
  },
];

const portraitPoster: Poster[] = [
  {
    href: '/watch/0',
    srcImg: '/doraemon.jpg',
    title: "Doraemon the Movie: Nobita's Little Star Wars (2022)",
    category: 'Movie',
  },
  {
    href: '/watch/0',
    srcImg: '/doraemonvn.jpg',
    title: "Doraemon the Movie: Nobita's Little Star Wars (2022)",
    category: 'Movie',
  },
  {
    href: '/watch/0',
    srcImg: '/tear-of-steels.png',
    title: 'Tear of Steel',
    category: 'Movie',
  },
  {
    href: '/watch/0',
    srcImg: '/tinoaa.jpg',
    title: "There's No One At All",
    category: 'Music',
  },
  {
    href: '/watch/0',
    srcImg: '/worlds-23.jpg',
    title: 'Final: T1 vs Weibo Gaming',
    category: 'League of Legends Worlds Championship 2023',
  },
];

const HomePage: React.FC = () => {
  const getImgTitleKey = (title: string) => {
    return `${title
      .toLowerCase()
      .replace(/[\W]/g, ' ')
      .trim()
      .replace(/\s{1,}/g, '-')}`;
  };

  return (
    <>
      <BannerCarouselComponent>
        {landscapePoster.concat(landscapePoster.slice()).map((item, index) => (
          <div key={`banner-${index}_${getImgTitleKey(item.title)}`}>
            <Card
              cover={<Image preview={false} src={item.srcImg} alt={`${getImgTitleKey(item.title)}_alt`} />}
              className="rounded-xl overflow-hidden relative h-fit [&>.ant-card-body]:p-0"
            >
              <div className="text-white absolute left-0 bottom-0 p-8 pt-20 w-full bg-gradient-to-b from-transparent from-0% to-black to-[150%]">
                <Link to={item.href}>
                  <span className="font-bold text-3xl text-white hover:text-blue-custom transition-colors">
                    {item.title}
                  </span>
                </Link>
                <p className="my-4">{item.category}</p>
                <div>
                  <Link to={item.href}>
                    <Button type="primary" size="large" className="font-semibold" icon={<PlayCircleFilled />}>
                      Xem ngay
                    </Button>
                  </Link>

                  <Button shape="circle" size="large" className="ml-4">
                    <HeartOutlined className="-translate-y-[3px]" />
                  </Button>

                  <Button shape="circle" size="large" className="ml-4">
                    <ShareAltOutlined className="-translate-y-[3px]" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </BannerCarouselComponent>
      <VideoCarouselComponent title="Latest Released" slideToShow={landscapePoster.length}>
        {landscapePoster.concat(landscapePoster.slice()).map((item, index) => (
          <div key={`latest-${index}_${getImgTitleKey(item.title)}`}>
            <Image
              preview={false}
              className="rounded-xl overflow-hidden scale-[98%] shadow-custom"
              src={item.srcImg}
              alt={`${getImgTitleKey(item.title)}_alt`}
            />
            <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">{item.title}</p>
          </div>
        ))}
      </VideoCarouselComponent>

      <VideoCarouselComponent title="Trending">
        {portraitPoster.concat(portraitPoster.slice()).map((item, index) => (
          <div key={`latest-${index}_${getImgTitleKey(item.title)}`}>
            <Image
              preview={false}
              className="object-cover h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
              src={item.srcImg}
              alt={`${getImgTitleKey(item.title)}_alt`}
            />
            <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">{item.title}</p>
          </div>
        ))}
      </VideoCarouselComponent>

      <VideoCarouselComponent title="Top 10 Movie" slideToShow={5}>
        {landscapePoster.concat(landscapePoster.slice()).map((item, index) => (
          <div key={`latest-${index}_${getImgTitleKey(item.title)}`}>
            <Image
              preview={false}
              className="rounded-xl overflow-hidden scale-[98%] shadow-custom"
              src={item.srcImg}
              alt={`${getImgTitleKey(item.title)}_alt`}
            />
            <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">{item.title}</p>
          </div>
        ))}
      </VideoCarouselComponent>
    </>
  );
};

export default HomePage;
