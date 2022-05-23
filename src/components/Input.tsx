import React from 'react';
import {TextInput, View} from 'react-native';
import Styles from './Styles';
import Colors from '../utility/colorConstant';

interface Props {
  placeHolder: string;
  inputValue: any;
  props: any;
}

const Input: React.FC<Props> = ({placeHolder, inputValue, ...props}) => {
  return (
    <View style={Styles.inputContainer}>
      <TextInput
        style={Styles.inputStyle}
        underlineColorAndroid="transparent"
        spellCheck={false}
        autoCorrect={false}
        autoCapitalize="none"
        placeholderTextColor={Colors.PLACE_HOLDER_COLOR}
        blurOnSubmit={true}
        value={inputValue}
        placeholder={placeHolder}
        {...props}
      />
    </View>
  );
};

Input.defaultProps = {
  placeHolder: '',
  inputValue: '',
};

export default Input;
