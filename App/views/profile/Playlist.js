
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AlertIOS,
  WebView,
  Navigator
} from 'react-native';

export default class PlayList extends Component {

  render() {
    return (
      <WebView
                  style={{flex:1}}
                  style={{flex:1}}
                  javaScriptEnabled={true}
                  source={{uri:'https://www.youtube.com/playlist?list=PL1F461DA85438E137'}}
          />
    );
  }
}
