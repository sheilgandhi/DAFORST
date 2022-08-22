import { cleanup, render, screen } from '@testing-library/react-native';
import React from 'react';
import AssetsScreen from '../screens/AssetsScreen';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
  setOptions: jest.fn(),
};

describe('AssetsScreen', () => {
  beforeEach(() => {
    const useEffectMock = f => f();
    jest.spyOn(React, 'useState').mockImplementation(useEffectMock);
    render(<AssetsScreen navigation={navigation} />);
  });

  afterEach(() => {
    cleanup();
  });

  test('renders correctly', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
