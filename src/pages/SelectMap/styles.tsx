import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative'
    },

    header: {
        
      justifyContent: 'center',
      alignItems: 'center',
      height: 30,
      position: 'absolute',
      left: 25,
      right: 25,
      bottom:'90%',
      
        

    },

    headerText:{
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 18,
        color: '#0B6E4F',

    },
  
    mapStyle: {
        width: '100%',
        height: '100%',
    },
  
    nextButton: {
      backgroundColor: '#0B6E4F',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      height: 56,
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 20,
    },
  
    nextButtonText: {
      fontFamily: 'Ubuntu_700Bold',
      fontSize: 16,
      color: '#FFF',
    }
  })