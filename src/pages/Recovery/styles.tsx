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
        flex: 1,
        maxHeight: '25%',
        maxWidth: '94%',
    },

    description: {
        marginTop: '20%',
        maxWidth: '85%',
        lineHeight: 20,
        color: '#000000',
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
    },
    input: {
        marginTop: '15%',
        height: 50,
        borderBottomWidth: 1,
        marginHorizontal: '-45%',
        borderBottomColor: '#8DA1B9',
        paddingLeft: 6,
        fontSize: 20,
    },

    button: {
        backgroundColor: '#0B6E4F',
        height: 60,
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        marginTop: '16%',
        justifyContent: 'center',
        marginBottom: '15%',
    },

    buttonText: {
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 21,
    },
});
