import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Content, List, ListItem, Thumbnail, Text } from 'native-base';

export default class MyHeavenMatches extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Content>
          <List style={styles.list}>
            <ListItem>
              <Thumbnail square size={100} source={require('../matches/band.jpg')} style={styles.image} />
              <Text>BANDNAME</Text>
              <Text note>BAND INFO</Text>
              <Text note>MORE BAND INFO</Text>
              <Text note>SOME MORE BAND INFO</Text>
            </ListItem>
          </List>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    bottom: 470
  },
  list: {
    borderColor: '#e9e104',
    borderWidth: 1,
    backgroundColor: null
  },
  image: {
    borderColor: '#e9e104',
    borderWidth: 1
  }
});
