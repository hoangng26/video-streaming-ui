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
import React, { useEffect } from 'react';

interface PlayerProps {
  videoId: string;
}

const VidStackPlayerComponent: React.FC<PlayerProps> = ({ videoId }) => {
  const textTracks: TrackProps[] = [
    {
      src: '/english.vtt',
      label: 'English',
      language: 'en-US',
      kind: 'subtitles',
      type: 'vtt',
      default: true,
    },
  ];

  function onProviderChange(provider: MediaProviderAdapter | null) {
    if (isYouTubeProvider(provider)) {
      provider.cookies = true;
    }
  }

  useEffect(() => {}, []);

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
        {textTracks.map((track) => (
          <Track {...track} key={track.src} />
        ))}
      </MediaProvider>
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  );
};

export default VidStackPlayerComponent;
