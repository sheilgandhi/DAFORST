import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../components/Loading';

describe('Loading', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
