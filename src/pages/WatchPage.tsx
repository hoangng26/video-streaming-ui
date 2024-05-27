import LinkWrapper from '@/components/LinkWrapper';
import VideoCarouselComponent from '@/components/VideoCarouselComponent';
import VideoWatchDetailInfoComponent from '@/components/VideoWatchDetailInfoComponent';
import VidStackPlayerComponent from '@/components/VidStackPlayerComponent';
import { landscapePoster } from '@/constants/TestVideoInfo';
import { getImgTitleKey } from '@/utils';
import { Image } from 'antd';
import React from 'react';

const WatchPage: React.FC = () => {
  return (
    <>
      {/* Video player */}
      <div>
        <VidStackPlayerComponent />
      </div>

      <VideoWatchDetailInfoComponent />

      <VideoCarouselComponent title="Related content" slideToShow={5}>
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

export default WatchPage;
