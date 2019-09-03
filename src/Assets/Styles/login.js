import { StyleSheet } from 'react-native';
import { primaryColor } from './colors';

const styles = StyleSheet.create({
  logo: {
    width: 180,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -16,
    left: 28
  },
  itemInput: {
    paddingTop: 10,
    borderBottomColor: primaryColor,
    marginLeft: 0
  },
  btnLogin: {
    marginTop: 24,
    borderRadius: 50,
    backgroundColor: primaryColor
  },
  registerNow: {
    color: primaryColor,
    fontSize: 14,
    textDecorationLine: 'underline',
    marginLeft: 4
  }
})

export { styles }