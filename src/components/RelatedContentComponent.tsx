import LinkWrapper from '@/components/LinkWrapper';
import VideoCarouselComponent from '@/components/VideoCarouselComponent';
import { VideoInfo } from '@/models/Video';
import { getImgTitleKey } from '@/utils';
import { Image } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingComponent from './LoadingComponent';

interface RelatedContentProps {
  id: string;
}

const RelatedContentComponent: React.FC<RelatedContentProps> = () => {
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
    <VideoCarouselComponent title="Related content" slideToShow={5}>
      {videos.concat(videos.slice()).map((item, index) => (
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
  );
};

export default RelatedContentComponent;
