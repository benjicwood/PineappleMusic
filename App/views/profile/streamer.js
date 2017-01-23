
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AlertIOS,
  WebView
} from 'react-native';

export default class VideoPlayer extends Component {
  render() {
    return (
      <WebView
        style={{flex:1}}
        javaScriptEnabled={true}
        source={{uri: 'https://www.youtube.com/playlist?list=PL1F461DA85438E137'}}
      />
    );
  }
}
