import React, {useState} from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import VideoPlayer from '../component/VideoPlayer/VideoPlayer';
import YouTubePlayer_ from '../component/YoutubePlayer_/YoutubePlayer_';

const Home = () => {
  const layout = useWindowDimensions();
  const [mediaPlayerHight, setmediaPlayerHight] = useState(layout.height / 3);

  const onEnterFullScreen = () => {
    setmediaPlayerHight(layout.height);
  };
  const onExitFullScreen = () => {
    setmediaPlayerHight(layout.height / 3);
  };
  return (
    <View style={{backgroundColor: '#FFF', height: '100%'}}>
      <VideoPlayer />
      {/* <YouTubePlayer_ /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainPlayer: {
    backgroundColor: 'red',
  },
});
export default Home;
