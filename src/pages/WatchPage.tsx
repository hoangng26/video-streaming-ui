import RelatedContentComponent from '@/components/RelatedContentComponent';
import VideoWatchDetailInfoComponent from '@/components/VideoWatchDetailInfoComponent';
import VidStackPlayerComponent from '@/components/VidStackPlayerComponent';
import { VideoInfo } from '@/models/Video';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WatchPage: React.FC = () => {
  const { id } = useParams();
  const [videoInfo, setVideoInfo] = useState<VideoInfo>();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/video/${id}`)
      .then((response) => {
        setVideoInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <VidStackPlayerComponent videoId={id as string} />

      {videoInfo && <VideoWatchDetailInfoComponent videoInfo={videoInfo} />}

      <RelatedContentComponent id={id as string} />
    </>
  );
};

export default WatchPage;
