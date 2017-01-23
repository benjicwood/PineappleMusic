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
 source={{uri: 'https://www.youtube.com/watch?v=5UNDENi3vHM'}}
 style={{marginTop: 20}}
/>
  )
}

}
