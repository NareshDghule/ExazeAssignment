import React from 'react';
import FinalScreenView from './view';
import {useSelector} from 'react-redux';
const FinalScreen = () => {
  const userName = useSelector((state: object) => {
    return state.storeUserName.userNamePayload;
  });
  return <FinalScreenView userName={userName} />;
};

export default FinalScreen;
