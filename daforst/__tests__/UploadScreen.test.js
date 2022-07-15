import React from 'react';
import renderer from 'react-test-renderer';
import UploadScreen from '../screens/UploadScreen';
import {
  fireEvent,
  render,
  waitFor,
  cleanup,
  screen,
} from '@testing-library/react-native';
import { faker } from '@faker-js/faker';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
  setOptions: jest.fn(),
};

describe('UploadScreen', () => {
  beforeEach(() => {
    render(<UploadScreen navigation={navigation} />);
  });

  afterEach(() => {
    cleanup();
  });

  test('renders correctly', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('validate name input fills', async () => {
    const name = faker.name.findName();
    const input = screen.getByTestId('name');
    expect(input).toBeTruthy(); // exists?
    fireEvent.changeText(input, name);
    expect(input.props.value).toBe(name);
  });

  test('validate owner input fills', async () => {
    const owner = faker.name.findName();
    const input = screen.getByTestId('owner');
    expect(input).toBeTruthy(); // exists?
    fireEvent.changeText(input, owner);
    expect(input.props.value).toBe(owner);
  });

  test('validate description multiline input fills', async () => {
    const description = faker.lorem.lines();
    const input = screen.getByTestId('description');
    expect(input).toBeTruthy(); // exists?
    fireEvent.changeText(input, description);
    expect(input.props.value).toBe(description);
  });

  test('validate id gets returned from arcore', async () => {
    const id = screen.getByTestId('id');
    expect(id).toBeTruthy(); // exists?
    expect(id.props.children.toString()).toBe('ID: ,...'); // change ... to expected id variable
  });

  test('validate location gets returned from arcore', async () => {
    const id = screen.getByTestId('location');
    expect(id).toBeTruthy(); // exists?
    expect(id.props.children.toString()).toBe('Location: ,...'); // change ... to expected location variable
  });

  test('validate upload', () => {
    fireEvent.changeText(screen.getByTestId('name'), faker.name.findName());
    fireEvent.changeText(screen.getByTestId('owner'), faker.name.findName());
    fireEvent.changeText(screen.getByTestId('description'), faker.lorem.lines());
  });

  test('validate text gets cleared', () => {
    const name = screen.getByTestId('name');
    const owner = screen.getByTestId('owner');
    const description = screen.getByTestId('description');
    fireEvent.changeText(name, faker.name.findName());
    fireEvent.changeText(owner, faker.name.findName());
    fireEvent.changeText(description, faker.lorem.lines());
    expect(name).toBeTruthy();
    expect(owner).toBeTruthy();
    expect(description).toBeTruthy();
    fireEvent.press(screen.getByTestId('clearButton'));
    expect(name.props.value).toBe('');
    expect(owner.props.value).toBe('');
    expect(description.props.value).toBe('');
  });
});
