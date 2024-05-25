import BannerCarouselComponent from '@/components/BannerCarouselComponent';
import VideoCarouselComponent from '@/components/VideoCarouselComponent';
import { Image } from 'antd';
import React from 'react';

interface Poster {
  src: string;
  title: string;
}

const landscapePoster: Poster[] = [
  {
    src: '/doraemon_landscape.jpg',
    title: "Doraemon the Movie: Nobita's Little Star Wars (2022)",
  },
  {
    src: '/tear-of-steels_landscape.png',
    title: 'Tear of Steel',
  },
  {
    src: '/tinoaa-landscape.jpg',
    title: "There's No One At All",
  },
  {
    src: '/worlds-23_landscape.jpg',
    title: 'Final: T1 vs Weibo Gaming',
  },
];

const portraitPoster: Poster[] = [
  {
    src: '/doraemon.jpg',
    title: "Doraemon the Movie: Nobita's Little Star Wars (2022)",
  },
  {
    src: '/doraemonvn.jpg',
    title: "Doraemon the Movie: Nobita's Little Star Wars (2022)",
  },
  {
    src: '/tear-of-steels.png',
    title: 'Tear of Steel',
  },
  {
    src: '/tinoaa.jpg',
    title: "There's No One At All",
  },
  {
    src: '/worlds-23.jpg',
    title: 'Final: T1 vs Weibo Gaming',
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
      <BannerCarouselComponent />
      <VideoCarouselComponent title="Latest Released">
        {landscapePoster.map((item, index) => (
          <div key={`latest-${index}_${getImgTitleKey(item.title)}`}>
            <Image
              preview={false}
              className="rounded-xl overflow-hidden scale-[98%] shadow-custom"
              src={item.src}
              alt={`${getImgTitleKey(item.title)}_alt`}
            />
            <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">{item.title}</p>
          </div>
        ))}
      </VideoCarouselComponent>

      <VideoCarouselComponent title="Trending" slideToShow={5}>
        {portraitPoster.concat(portraitPoster.slice()).map((item, index) => (
          <div key={`latest-${index}_${getImgTitleKey(item.title)}`}>
            <Image
              preview={false}
              className="object-cover h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
              src={item.src}
              alt={`${getImgTitleKey(item.title)}_alt`}
            />
            <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">{item.title}</p>
          </div>
        ))}
      </VideoCarouselComponent>

      <VideoCarouselComponent title="Top 10 Drama" slideToShow={5}>
        {landscapePoster.concat(landscapePoster.slice()).map((item, index) => (
          <div key={`latest-${index}_${getImgTitleKey(item.title)}`}>
            <Image
              preview={false}
              className="rounded-xl overflow-hidden scale-[98%] shadow-custom"
              src={item.src}
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
