import React from 'react';
import VariationScreenView from './view';
import {useSelector} from 'react-redux';
import {navigateToScreen} from '../../utility/helper';

const VariationScreen = () => {
  const userName = useSelector((state: object) => {
    return state.storeUserName.userNamePayload;
  });
  const onSwipeSuccess = () => {
    navigateToScreen('FinalScreen', {});
  };
  return (
    <VariationScreenView userName={userName} onSwipeSuccess={onSwipeSuccess} />
  );
};

export default VariationScreen;
