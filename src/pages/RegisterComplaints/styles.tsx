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
    marginBottom: 30,
  },

  title: {
    marginLeft: 10,
    color: '#000000',
    fontSize: 24,
    fontFamily: 'Ubuntu_700Bold',
  },

  label: {
    color: '#0B6E4F',
    fontFamily: 'Roboto_500Medium',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#CAF0C1',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },

  select: {
    backgroundColor: '#CAF0C1',
    borderColor: '#0B6E4F',
    borderWidth: 1.4,
    borderRadius: 20,
    marginBottom: 16,
  },

  imagesInput: {
    backgroundColor: '#CAF0C1',
    borderStyle: 'dashed',
    borderColor: '#0B6E4F',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },

  uploadedImagesContainer: {
    flexDirection: 'row',
  },

  uploadedImage: {
    marginTop: -20,
    width: 98,
    height: 75,
    borderRadius: 15,
    marginBottom: 15,
    marginRight: 8,
  },

  textUpload: {
    marginTop: 8,
    fontFamily: 'Roboto_500Medium',
    color: '#0B6E4F',
  },

  nextButton: {
    backgroundColor: '#0B6E4F',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 25,
    marginBottom: 20,
  },

  nextButtonText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 20,
    color: '#FFF',
  },
});
