import React from 'react';
import renderer from 'react-test-renderer';
import AssetsScreen from '../screens/AssetsScreen';

const navigation = {
    goBack: jest.fn(),
    navigate: jest.fn(),
    setOptions: jest.fn(),
  };

describe('AssetsScreen', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<AssetsScreen navigation={navigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
