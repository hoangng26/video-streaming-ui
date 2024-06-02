import BannerCarouselComponent from '@/components/BannerCarouselComponent';
import LinkWrapper from '@/components/LinkWrapper';
import LoadingComponent from '@/components/LoadingComponent';
import VideoCarouselComponent from '@/components/VideoCarouselComponent';
import { VideoInfo } from '@/models/Video';
import { getImgTitleKey, shuffleArray } from '@/utils';
import { HeartOutlined, PlayCircleFilled, ShareAltOutlined } from '@ant-design/icons';
import { Button, Card, Image } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [videos, setVideos] = useState<VideoInfo[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/video/all')
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <BannerCarouselComponent>
        {videos.map((item, index) => (
          <LinkWrapper to={`/watch/${item.video_url}`} key={`banner-${index}_${getImgTitleKey(item.title)}`}>
            <Card
              cover={
                <Image
                  preview={false}
                  src={`http://localhost:8000/api/video/${item.video_url}/poster/landscape`}
                  alt={`${getImgTitleKey(item.title)}_alt`}
                  placeholder={<LoadingComponent className="py-96" />}
                />
              }
              className="rounded-xl overflow-hidden relative h-fit [&>.ant-card-body]:p-0"
            >
              <div className="text-white absolute left-0 bottom-0 p-8 pt-96 w-full bg-gradient-to-b from-transparent from-0% to-black to-[120%]">
                <p className="font-bold text-3xl text-white hover:text-blue-custom transition-colors w-fit">
                  {item.title}
                </p>
                <p className="my-4">{item.category_title}</p>
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

      <VideoCarouselComponent title="Latest Released" slideToShow={videos.length}>
        {shuffleArray(videos.concat(videos.slice())).map((item, index) => (
          <LinkWrapper to={`/watch/${item.video_url}`} key={`latest-${index}_${getImgTitleKey(item.title)}`}>
            <Image
              preview={false}
              className="rounded-xl overflow-hidden scale-[98%] shadow-custom"
              src={`http://localhost:8000/api/video/${item.video_url}/poster/landscape`}
              alt={`${getImgTitleKey(item.title)}_alt`}
              placeholder={<LoadingComponent className="h-36" />}
            />
            <span className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">{item.title}</span>
          </LinkWrapper>
        ))}
      </VideoCarouselComponent>

      <VideoCarouselComponent title="Trending">
        {shuffleArray(videos.concat(videos.slice())).map((item, index) => (
          <LinkWrapper to={`/watch/${item.video_url}`} key={`latest-${index}_${getImgTitleKey(item.title)}`}>
            <Image
              preview={false}
              className="object-cover h-[22rem] rounded-xl overflow-hidden scale-[98%] shadow-custom outline-none"
              src={`http://localhost:8000/api/video/${item.video_url}/poster/portrait`}
              alt={`${getImgTitleKey(item.title)}_alt`}
              placeholder={<LoadingComponent className="h-[22rem]" />}
            />
            <p className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">{item.title}</p>
          </LinkWrapper>
        ))}
      </VideoCarouselComponent>

      <VideoCarouselComponent title="Top 10 Movie" slideToShow={5}>
        {shuffleArray(videos.concat(videos.slice())).map((item, index) => (
          <LinkWrapper to={`/watch/${item.video_url}`} key={`latest-${index}_${getImgTitleKey(item.title)}`}>
            <Image
              preview={false}
              className="rounded-xl overflow-hidden scale-[98%] shadow-custom"
              src={`http://localhost:8000/api/video/${item.video_url}/poster/landscape`}
              alt={`${getImgTitleKey(item.title)}_alt`}
              placeholder={<LoadingComponent className="h-36" />}
            />
            <span className="w-11/12 translate-x-[1%] font-semibold text-base mt-4 line-clamp-1">{item.title}</span>
          </LinkWrapper>
        ))}
      </VideoCarouselComponent>
    </>
  );
};

export default HomePage;
