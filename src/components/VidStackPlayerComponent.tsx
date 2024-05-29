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

const VidStackPlayerComponent: React.FC = () => {
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
      src="https://youtu.be/R6MlUcmOul8"
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
