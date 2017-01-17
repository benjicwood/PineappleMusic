/* global expect, it */
import 'react-native';
import React from 'react';
import PineappleFront from '../views/container/index.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('exists', () => {
  const tree = renderer.create(
    <PineappleFront />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
