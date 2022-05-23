import React from 'react';
import {View, Text} from 'react-native';
import {
  Button,
  Background,
  SwipableButton,
  ShowUserName,
} from '../../components';
import Styles from './style';
import constant from '../../utility/constant';
import icons from '../../utility/icons';
const VariationScreenView = (props: {
  userName: string;
  onSwipeSuccess: Function;
}) => {
  const {userName, onSwipeSuccess} = props;
  const {VARIATION_SCREEN} = constant;
  return (
    <Background>
      <ShowUserName userName={userName} />
      <View style={Styles.container}>
        <Text style={Styles.text}>{VARIATION_SCREEN.TEXT_HEADING}</Text>
        <Button
          style={Styles.firstButtonStyle}
          labelStyle={Styles.firstButtonLabel}>
          {VARIATION_SCREEN.PRESS_ME}
        </Button>
        <Button
          style={Styles.secondButtonStyle}
          labelStyle={Styles.secondButtonLabel}>
          {VARIATION_SCREEN.PRESS_ME}
        </Button>
        <Button
          style={Styles.thirdButtonStyle}
          labelStyle={Styles.thirdButtonLabel}>
          {VARIATION_SCREEN.PRESS_ME}
        </Button>
        <SwipableButton
          title={VARIATION_SCREEN.SWIPE_BUTTON_LABEL}
          thumbIcon={icons.DIAMOND}
          handleOnSwipeSuccess={onSwipeSuccess}
          props={undefined}
        />
      </View>
    </Background>
  );
};

export default VariationScreenView;
