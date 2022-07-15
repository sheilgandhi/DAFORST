import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../screens/HomeScreen';
import {
  fireEvent,
  render,
  waitFor,
  cleanup,
  screen,
} from '@testing-library/react-native';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
  setOptions: jest.fn(),
};

describe('HomeScreen', () => {
  beforeEach(() => {
    render(<HomeScreen navigation={navigation} />);
  });

  afterEach(() => {
    cleanup();
  });

  test('renders correctly', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('validate call to action text', () => {
    const cta = screen.getByTestId('cta');
    expect(cta.props.children).toEqual(
      'DAFORST is a decentralised platform which helps provide data sovereignty to communities.',
    );
  });

  test('validate upload button fires', async () => {
    const pressable = screen.getByTestId('uploadButton');
    expect(pressable).toBeTruthy(); // exists?
    fireEvent.press(pressable);
    await waitFor(() => {
      expect(navigation.navigate).toHaveBeenCalled();
    });
  });

  test('validate assets button fires', async () => {
    const pressable = screen.getByTestId('assetsButton');
    expect(pressable).toBeTruthy(); // exists?
    fireEvent.press(pressable);
    await waitFor(() => {
      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
