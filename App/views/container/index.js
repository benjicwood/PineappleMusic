import React, { Component } from 'react';
import {
   StyleSheet,
   Navigator
 } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

import mainReducer from '../../reducers/mainReducer';

import SignupMusician from '../signupMusician/index';
import SignupBand from '../signupBand/index';
import InitialScreen from '../splash/index';
import Matches from '../matches/index';
import Profile from '../profile/index';
import ILike from '../iLike/index';
import LikesMe from '../likesMe/index';

const logger = createLogger();
const store = createStore(mainReducer, applyMiddleware(logger, thunk));

class PineappleFront extends Component {

  componentWillMount(){
    this.props.fetchGenres();
  }

  render () {
    console.warn(this.props.genres);

    return (
      <Provider store={store}>
        <Navigator
          style={styles.container}
          initialRoute={{
            id: 'InitialScreen'
          }}
          renderScene={this.navigatorRenderScene}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}
          />
      </Provider>
    );
  }
  navigatorRenderScene (route, navigator) {
    switch (route.id) {
      case 'InitialScreen':
        return (<InitialScreen navigator={navigator} title='InitialScreen' />);
      case 'SignupBand':
        return (<SignupBand navigator={navigator} title='SignupBand' />);
      case 'SignupMusician':
        return (<SignupMusician navigator={navigator} title='SignupMusician' />);
      case 'Matches':
        return (<Matches navigator={navigator} title='Matches' />);
      case 'Profile':
        return (<Profile navigator={navigator} title='Profile' />);
      case 'ILike':
        return (<ILike navigator={navigator} title='ILike' />);
      case 'LikesMe':
        return (<LikesMe navigator={navigator} title='LikesMe' />);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

function mapStateToProps (state) {
  return {
    genres: state.genre.genres
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchGenres: function () {
      dispatch (actions.fetchGenres());
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PineappleFront)