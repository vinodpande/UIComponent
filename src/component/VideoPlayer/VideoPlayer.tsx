import React, {MutableRefObject, useRef, useState} from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {Button} from 'react-native-elements';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';
import VideoPlayers from 'react-native-video-controls';

const VideoPlayer = () => {
  const layout = useWindowDimensions();
  const [mediaPlaerHight, setmediaPlaerHight] = useState(layout.height / 3);
  const [orientation, setOrientation] = useState(
    Orientation.getInitialOrientation(),
  );

  let videoPlayerRef = useRef();

  const EnterFullScreen = () => {};

  const onEnterFullScreen = () => {
    setmediaPlaerHight(layout.height / 3);
  };
  const onExitFullScreen = () => {
    setmediaPlaerHight(layout.height);
  };

  const setOrientationToLandscape = () => {
    Orientation.lockToLandscape();
    setOrientation('LANDSCAPE');
    console.log(orientation);
  };
  const setOrientationToPortrait = () => {
    Orientation.lockToPortrait();
    setOrientation('PORTRAIT');
    console.log(orientation);
  };

  const changeOrientation = () => {
    if (orientation === 'PORTRAIT') {
      setOrientationToLandscape();
    } else {
      setOrientationToPortrait();
    }
  };

  return (
    <>
      <View style={[styles.mainPlayer, {height: mediaPlaerHight}]}>
        <Video
          presentFullscreenPlayer={true}
          fullscreenAutorotate={true}
          fullscreen={true}
          fullscreenOrientation="landscape"
          toggleResizeModeOnFullscreen={true}
          resizeMode="contain"
          paused={true}
          controls={true}
          style={{width: '100%', height: '100%'}}
          source={{
            uri: 'https://invesco-robosoft.s3.ap-south-1.amazonaws.com/dit-video_final.mp4',
          }} // Can be a URL or a local file.
          thumbnail={{
            uri: 'https://www.nsbpictures.com/wp-content/uploads/2020/05/arrow-png.png',
          }}
          onEnterFullscreen={() => onEnterFullScreen()}
          onExitFullscreen={() => onExitFullScreen()}></Video>
      </View>
      <Button
        title="Full"
        onPress={() => {
          changeOrientation();
        }}></Button>
    </>
  );
};
const styles = StyleSheet.create({
  mainPlayer: {
    backgroundColor: 'red',
  },
});
export default VideoPlayer;
