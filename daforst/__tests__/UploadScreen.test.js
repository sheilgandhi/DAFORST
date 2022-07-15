import React from 'react';
import renderer from 'react-test-renderer';
import UploadScreen from '../screens/UploadScreen';
import {
  fireEvent,
  render,
  waitFor,
  cleanup,
} from '@testing-library/react-native';
import { faker } from '@faker-js/faker';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
  setOptions: jest.fn(),
};

describe('UploadScreen', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders correctly', () => {
    const tree = renderer
      .create(<UploadScreen navigation={navigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('validate name input fills', async () => {
    const name = faker.name.findName();
    const { getByTestId } = render(<UploadScreen navigation={navigation} />);
    const input = getByTestId('name');
    expect(input).toBeTruthy(); // exists?
    fireEvent.changeText(input, name);
    expect(input.props.value).toBe(name);
  });

  test('validate owner input fills', async () => {
    const owner = faker.name.findName();
    const { getByTestId } = render(<UploadScreen navigation={navigation} />);
    const input = getByTestId('owner');
    expect(input).toBeTruthy(); // exists?
    fireEvent.changeText(input, owner);
    expect(input.props.value).toBe(owner);
  });

  test('validate description multiline input fills', async () => {
    const description = faker.lorem.lines();
    const { getByTestId } = render(<UploadScreen navigation={navigation} />);
    const input = getByTestId('description');
    expect(input).toBeTruthy(); // exists?
    fireEvent.changeText(input, description);
    expect(input.props.value).toBe(description);
  });
});
