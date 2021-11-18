import React from 'react';
import YouTubePlayer from 'react-native-youtube-sdk';

const YouTubePlayer_ = () => {
  return (
    <YouTubePlayer
      videoId="t_aIEOqB8VM"
      autoPlay={true}
      fullscreen={true}
      showFullScreenButton={true}
      showSeekBar={true}
      showPlayPauseButton={true}
      startTime={5}
      style={{width: '100%', height: 200}}
      onError={e => console.log(e)}
      onChangeState={e => console.log(e)}
      onChangeFullscreen={e => console.log(e)}
    />
  );
};
export default YouTubePlayer_;
