import React from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';

interface Props {
  userName: string;
}
const ShowUserName: React.FC<Props> = ({userName}) => {
  return (
    <View style={Styles.userNameContainer}>
      <Text style={Styles.userName}>{userName}</Text>
    </View>
  );
};

ShowUserName.defaultProps = {
  userName: '',
};
export default ShowUserName;
