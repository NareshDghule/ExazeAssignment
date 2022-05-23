import {StyleSheet} from 'react-native';
import Colors from '../utility/colorConstant';
const Styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: Colors.BLUE,
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonLabel: {
    fontSize: 18,
    color: Colors.WHITE,
  },
  inputStyle: {
    flex: 1,
    width: '100%',
    height: 45,
    textAlign: 'left',
    color: Colors.BLACK,
    fontSize: 16,
    marginVertical: 0,
    marginHorizontal: 10,
  },
  inputContainer: {
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
  },
  swipableButtonContainer: {
    borderRadius: 5,
  },
  thumbIconStyle: {
    borderRadius: 5,
  },
  railStyle: {
    borderRadius: 5,
  },
  userNameContainer: {
    width: '90%',
    marginTop: 20,
  },
  userName: {
    fontSize: 20,
    color: Colors.WHITE,
    textAlign: 'right',
  },
});

export default Styles;
