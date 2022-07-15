import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../screens/HomeScreen';
import {
  fireEvent,
  screen,
  render,
  waitFor,
  cleanup,
} from '@testing-library/react-native';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
  setOptions: jest.fn(),
};

describe('Home', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders correctly', () => {
    const tree = renderer
      .create(<HomeScreen navigation={navigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('validate call to action text', () => {
    const { getByTestId } = render(<HomeScreen navigation={navigation} />);
    const cta = getByTestId('cta');
    expect(cta.props.children).toEqual(
      'DAFORST is a decentralised platform which helps provide data sovereignty to communities.',
    );
  });

  test('validate upload button fires', async () => {
    const { getByTestId } = render(<HomeScreen navigation={navigation} />);
    const pressable = getByTestId('uploadButton');
    expect(pressable).toBeTruthy(); // exists?
    fireEvent.press(pressable);
    await waitFor(() => {
      expect(navigation.navigate).toHaveBeenCalled();
    });
  });

  test('validate assets button fires', async () => {
    const { getByTestId } = render(<HomeScreen navigation={navigation} />);
    const pressable = getByTestId('assetsButton');
    expect(pressable).toBeTruthy(); // exists?
    fireEvent.press(pressable);
    await waitFor(() => {
      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
