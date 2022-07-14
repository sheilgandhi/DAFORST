import React from 'react';
import renderer from 'react-test-renderer';
import AssetPreview from '../components/AssetPreview';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
  setOptions: jest.fn(),
};

const asset = {
  imgUrl: jest.fn(),
};

describe('AssetPreview', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<AssetPreview navigation={navigation} asset={asset} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
