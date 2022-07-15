import { cleanup } from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
