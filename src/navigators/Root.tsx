import * as React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelomeScreen from '../screens/welcomeScreen';
import VariationScreen from '../screens/variationScreen';
import FinalScreen from '../screens/finalScreen';
const Stack = createStackNavigator();

export const navigationRef = createNavigationContainerRef();

const Root = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={'WelcomeScreen'}>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VariationScreen"
          component={VariationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FinalScreen"
          component={FinalScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
