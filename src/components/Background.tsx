import React from 'react';
import {View} from 'react-native';
import Styles from './Styles';

interface Props {
  children: any;
}
const Background: React.FC<Props> = ({children}) => (
  <View style={Styles.background}>{children}</View>
);

export default Background;
