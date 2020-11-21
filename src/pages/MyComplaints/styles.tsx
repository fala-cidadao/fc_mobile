import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  title: {
    marginLeft: 3,
    color: '#000000',
    fontSize: 24,
    fontFamily: 'Ubuntu_700Bold',
  },

  complaints: {
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#FFF',
  },

  subComplaints: {
    backgroundColor: '#FFF',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingTop: 15,
    marginTop: -15,
    marginBottom: 5,
    color: '#737380',
  },

  titleComplaints: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Roboto_400Regular',
  },

  titlesubComplaints: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Roboto_400Regular',
    width: '95%',
    marginBottom: 13,
  },

  headerDescription: {
    flexDirection: 'row',
  },

  textDescription: {
    marginLeft: 5,
    fontFamily: 'Roboto_400Regular',
  },
});
