import {StyleSheet} from 'react-native';
import Colors from '../../utility/colorConstant';

const Styles = StyleSheet.create({
  applicationRunningOnTextContainer: {
    paddingTop: 50,
    flex: 0.1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  applicationRunninOnText: {
    fontSize: 16,
    color: Colors.WHITE,
  },
  secondContainer: {
    flex: 3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  saveButtonStyle: {
    backgroundColor: Colors.LIGHT_BLUE_BUTTON_LABEL,
  },
  validationError: {
    fontSize: 14,
    color: Colors.VALIDATION_TEXT,
  },
});

export default Styles;
