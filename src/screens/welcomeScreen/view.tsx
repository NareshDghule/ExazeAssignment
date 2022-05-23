import React from 'react';
import {View, Text} from 'react-native';
import {Button, Background, Input} from '../../components';
import Styles from './style';
import constant from '../../utility/constant';
const WelcomeScreenView = (props: {
  handleTextChange: Function;
  states: object;
  validateUserName: Function;
  isValidationFailed: boolean;
  validationMessage: string;
  isEmulator: boolean;
}) => {
  const {
    handleTextChange,
    states: {userName},
    validateUserName,
    isValidationFailed,
    validationMessage,
    isEmulator,
  } = props;
  const {WELCOME_SCREEN} = constant;
  return (
    <Background>
      {isEmulator && (
        <View style={Styles.applicationRunningOnTextContainer}>
          <Text style={Styles.applicationRunninOnText}>
            {WELCOME_SCREEN.APPLICATION_RUNNING_ON}
          </Text>
        </View>
      )}
      <View style={Styles.secondContainer}>
        <Input
          testID="input"
          placeHolder={WELCOME_SCREEN.USER_NAME_PLACEHOLDER}
          inputValue={userName}
          onChangeText={(text: any) => handleTextChange('userName', text)}
          maxLength={10}
        />
        {isValidationFailed && (
          <Text style={Styles.validationError}>{validationMessage}</Text>
        )}
        <View style={Styles.buttonContainer}>
          <Button
            testID="saveButton"
            style={Styles.saveButtonStyle}
            onPress={() => validateUserName()}>
            {WELCOME_SCREEN.SAVE_BUTTON}
          </Button>
        </View>
      </View>
    </Background>
  );
};

export default WelcomeScreenView;
