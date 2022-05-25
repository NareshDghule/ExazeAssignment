import React, {useEffect, useState} from 'react';
import WelcomeScreenView from './view';
import {useDispatch} from 'react-redux';
import {storeUserName} from '../../modules';
import constant from '../../utility/constant';
import DeviceInfoModule from '../../utility/react-native-module';
import {navigateToScreen} from '../../utility/helper';
import {Platform} from 'react-native';
const WelcomeScreen = (props: {navigation: object}) => {
  const {navigation} = props;
  const {WELCOME_SCREEN} = constant;
  const dispatch = useDispatch();
  const [states, setStates] = useState({
    userName: '',
  });
  const [isValidationFailed, setIsValidationFailed] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [isEmulator, setIsEmulator] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      DeviceInfoModule.getModel().then((result: any) => {
        if (result === true) {
          setIsEmulator(true);
        }
      });
    }
  });
  const handleTextChange = (field: string, text: any) => {
    setStates(prev => ({
      ...prev,
      [field]: text,
    }));
  };
  useEffect(() => {
    if (states.userName !== '') {
      setIsValidationFailed(false);
      setValidationMessage('');
    }
  }, [states.userName]);

  const validateUserName = () => {
    const {userName} = states;
    if (userName !== '') {
      setIsValidationFailed(false);
      dispatch(storeUserName(userName))
      navigation.navigate('VariationScreen');
    } else {
      setIsValidationFailed(true);
      setValidationMessage(WELCOME_SCREEN.VALIDATION_ERROR);
    }
  };
  return (
    <WelcomeScreenView
      handleTextChange={handleTextChange}
      states={states}
      validateUserName={validateUserName}
      isValidationFailed={isValidationFailed}
      validationMessage={validationMessage}
      isEmulator={isEmulator}
    />
  );
};

export default WelcomeScreen;
