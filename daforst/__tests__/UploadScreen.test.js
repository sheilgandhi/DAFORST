import React from 'react';
import renderer from 'react-test-renderer';
import UploadScreen from '../screens/UploadScreen';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
  setOptions: jest.fn(),
};

describe('UploadScreen', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<UploadScreen navigation={navigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
