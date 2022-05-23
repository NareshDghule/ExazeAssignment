import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import Root from './Root';

const AppNavigator = () => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, []);

  /**
   * Method calls on android hardware back press.
   * Dispatched to previous screen if available.
   */
  const onBackPress = () => {
    return false;
  };

  return <Root />;
};

export default AppNavigator;
