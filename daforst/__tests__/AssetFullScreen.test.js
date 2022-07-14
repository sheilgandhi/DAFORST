import React from 'react';
import renderer from 'react-test-renderer';
import AssetFullScreen from '../screens/AssetFullScreen';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
  setOptions: jest.fn(),
};
const route = {
  params: {
    asset: {
      imgUrl: jest.fn(),
    },
  },
};

describe('AssetFullScreen', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<AssetFullScreen navigation={navigation} route={route} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
