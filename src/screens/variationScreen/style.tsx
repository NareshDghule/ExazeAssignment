import {StyleSheet} from 'react-native';
import Colors from '../../utility/colorConstant';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: Colors.YELLOW,
    marginBottom: 10,
  },
  firstButtonStyle: {backgroundColor: Colors.TRANSPARENT},
  firstButtonLabel: {color: Colors.LIGHT_BLUE_BUTTON_LABEL},
  secondButtonStyle: {backgroundColor: Colors.GREY},
  secondButtonLabel: {color: Colors.LIGHT_BLUE_BUTTON_LABEL},
  thirdButtonStyle: {backgroundColor: Colors.LIGHT_BLUE_BUTTON_LABEL},
  thirdButtonLabel: {color: Colors.WHITE},
});

export default Styles;
