import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Row from './Row'
import Header from './Header'
import SectionHeader from './SectionHeader'
import Footer from './Footer'
import dumyData from './data'

export default class iLike extends Component {
  constructor(props) {
    super(props)

    const getSectionData = (dataBlock, sectionId) => dataBlock[sectionId];
    const getRowData = (dataBlock, sectionId, rowId) => dataBlock[`${rowId}`];

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData,
    });

    const { dataBlock, sectionIds, rowIds } = this.formatData(dumyData);

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlock, sectionIds, rowIds)
    }
  }

  formatData(data) {
    // sorting alphabetically
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // storing data
    const dataBlock = {};
    const sectionIds = [];
    const rowIds = [];

    // each section is a letter of slphabet so we loop through it
    for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
      // Getting desired letter
      const currentChar = alphabet[sectionId];

      // Get users wthat names start with current letter
      const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar) === 0);

      // If there are any users who have a first name starting with the current letter then we'll
      // add a new section otherwise we just skip over it
      if (users.length > 0) {
        // Add a section id to our array so the listview knows that we've got a new section
        sectionIds.push(sectionId);

        // Store any data we would want to display in the section header. In our case we want to show
        // the current character
        dataBlock[sectionId] = { character: currentChar };

        // Setup a new array that we can store the row ids for this section
        rowIds.push([]);

        // Go through valid users
        for (let i = 0; i < users.length; i++) {
          // Create a unique row id for the data bloc that the listview can use for reference
          const rowId = `${sectionId}:${i}`;

          // Push the row id to the row ids array. This is what listview will reference to pull
          // data from our data block
          rowIds[rowIds.length - 1].push(rowId);

          // storing data we want to have in this array
          dataBlock[rowId] = users[i];
        }
      }
    }

    return { dataBlock, sectionIds, rowIds };
  }
  onMatchPress () {
      this.props.navigator.push({
        id: 'Matches'
      });
  }
  render() {
    return (
      <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={this.onMatchPress.bind(this)}
          >
          <Text style={styles.toMatches}>Back to Matches</Text>
        </TouchableOpacity>
        <Text>I LIKE PAGE</Text>
        </View>
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data) => <Row {...data} />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderHeader={() => <Header />}
          renderFooter={() => <Footer />}
          renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  toMatches: {
   paddingTop: 20,
   fontSize: 20
}
});
