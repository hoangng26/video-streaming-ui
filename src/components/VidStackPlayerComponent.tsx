import {
  isYouTubeProvider,
  MediaPlayer,
  MediaProvider,
  MediaProviderAdapter,
  Poster,
  Track,
  TrackProps,
} from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import '@vidstack/react/player/styles/default/layouts/video.css';
import '@vidstack/react/player/styles/default/theme.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface PlayerProps {
  videoId: string;
}

const VidStackPlayerComponent: React.FC<PlayerProps> = ({ videoId }) => {
  const [subtitleTracks, setSubtitleTracks] = useState<TrackProps[]>([]);

  function onProviderChange(provider: MediaProviderAdapter | null) {
    if (isYouTubeProvider(provider)) {
      provider.cookies = true;
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/video/${videoId}/subtitle/`).then((response) => {
      const subtitles: string[] = response.data;
      const tracks = subtitles.map(
        (item): TrackProps => ({
          src: `http://localhost:8000/api/video/${videoId}/subtitle/${item.toLowerCase()}`,
          label: item,
          kind: 'subtitles',
          type: 'srt',
        }),
      );

      setSubtitleTracks(tracks);
    });
  }, [videoId]);

  return (
    <MediaPlayer
      src={{
        src: `http://localhost:8000/api/watch/${videoId}/`,
        type: 'video/mp4',
      }}
      viewType="video"
      streamType="on-demand"
      logLevel="warn"
      crossOrigin
      playsInline
      autoPlay
      onProviderChange={onProviderChange}
    >
      <MediaProvider>
        <Poster className="vds-poster" />
        {subtitleTracks.map((track) => (
          <Track {...track} key={track.src} />
        ))}
      </MediaProvider>
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  );
};

export default VidStackPlayerComponent;
