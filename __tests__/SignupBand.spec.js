/* global expect, it */
import 'react-native';
import React from 'react';
// import PineappleFront from '../index.android.js';
import SignupBand from '../views/signupBand/index.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <SignupBand />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
