import React from 'react';
import {View, Text} from 'react-native';
import {Background, ShowUserName} from '../../components';
import Styles from './style';
import constant from '../../utility/constant';
const FinalScreenView = (props: {userName: string}) => {
  const {userName} = props;
  const {FINAL_SCREEN} = constant;
  return (
    <Background>
      <ShowUserName userName={userName} />
      <View style={Styles.container}>
        <Text style={Styles.success}>{FINAL_SCREEN.SWIPE_SUCCESS}</Text>
      </View>
    </Background>
  );
};
export default FinalScreenView;
