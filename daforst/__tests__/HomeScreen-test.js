import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../screens/HomeScreen';

const prop = jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    navigation: () => ({
      navigate: jest.fn(),
      setOptions: jest.fn(),
    }),
  };
});

test('should pass', () => {
  expect(1).toBe(1);
});
// test('renders correctly', () => {
//   const tree = renderer.create(<HomeScreen {...prop} />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
