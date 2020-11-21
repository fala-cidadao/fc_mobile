import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  background: {
    resizeMode: 'contain',
    flex: 1,
    backgroundColor: '#ffffff',
  },

  container: {
    flex: 1,
    paddingTop: 40 + Constants.statusBarHeight,
  },

  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    resizeMode: 'contain',
    maxHeight: '25%',
    maxWidth: '94%',
  },

  inputs: {
    marginTop: '10%',
    width: '48%',
  },

  input: {
    height: 50,
    borderBottomWidth: 1,
    marginHorizontal: '-45%',
    margin: 14,
    borderBottomColor: '#8DA1B9',
    paddingLeft: 6,
    fontSize: 20,
    fontFamily: 'Roboto_400Regular',
  },

  button: {
    backgroundColor: '#0B6E4F',
    height: 60,
    width: '80%',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: '16%',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 21,
  },

  linkText: {
    color: '#5B7D6C',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    marginTop: '8%',
  },
});
