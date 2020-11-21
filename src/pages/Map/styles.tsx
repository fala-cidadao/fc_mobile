import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  topBar: {
    position: 'absolute',
    left: -90,
    bottom: 0,
    top: '5%',

    flexDirection: 'row',
  },
  buttonMenu: {
    width: 56,
    height: 56,
    left: '15%',
  },
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  buttonFilter: {
    width: 56,
    height: 57,
    backgroundColor: '#0B6E4F',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonPlus: {
    width: 56,
    height: 57,
    left: '5%',
    bottom: '10%',
    backgroundColor: '#0B6E4F',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
