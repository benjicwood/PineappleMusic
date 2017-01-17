/* global it, expect */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import PineappleFront from '../views/container/index';

it('renders correctly', () => {
  const tree = renderer.create(
    <PineappleFront />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
