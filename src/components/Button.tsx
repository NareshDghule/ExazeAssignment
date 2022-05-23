import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Styles from './Styles';

interface Props {
  style: object;
  labelStyle: object;
  children?: React.ReactNode;
  props?: any;
}
const Button: React.FC<Props> = ({style, labelStyle, children, ...props}) => {
  return (
    <TouchableOpacity style={[Styles.button, style]} {...props}>
      <Text style={[Styles.buttonLabel, labelStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
