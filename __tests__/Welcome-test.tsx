import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import WelcomeScreen from '../src/screens/welcomeScreen';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('rn-swipe-button', () => 'SwipeButton');
const store = mockStore({});
const props = { navigation: { navigate: jest.fn() } };
const component = (
  <Provider store={store}>
    <WelcomeScreen {...props} />
  </Provider>
);
describe('Welcome component test', () => {
  test('should not navigate to variation screen', () => {
    jest.clearAllMocks();
    const { getByTestId } = render(component);
    fireEvent.changeText(getByTestId('userNameInput'), '');
    fireEvent.press(getByTestId('saveButton'));
    expect(props.navigation.navigate).not.toHaveBeenCalled();
  });

  test('navigate to variation screen when the button is pressed', () => {
    const { getByTestId } = render(component);
    fireEvent.changeText(getByTestId('userNameInput'), 'Test');
    fireEvent.press(getByTestId('saveButton'));
    expect(props.navigation.navigate).toHaveBeenCalledWith('VariationScreen');
  });
})