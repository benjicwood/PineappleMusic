// AIzaSyAdF_h85fX8kOCbutn99lfHeUVBHbBa_II

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  WebView
} from 'react-native';
import YouTube from 'react-native-youtube';

export default class RCTYouTubeExample extends Component {

render() {
  return (
<WebView
        style={{flex:1}}
        javaScriptEnabled={true}
        source={{uri: 'https://www.youtube.com/playlist?list=PL1F461DA85438E137'}}
/>

  )
}

}

const styles = StyleSheet.create({
  container: {
  height:240,
  width: 350,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'black'}
});
