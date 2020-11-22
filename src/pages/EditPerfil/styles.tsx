import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
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

    imagesInput: {
        resizeMode: 'contain',
        flex: 1,
        backgroundColor: '#0B6E4F',
        borderColor: '#CAF0C1',
        borderWidth: 1.4,
        borderRadius: 70,
        maxHeight: 140,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: '-30%',
    },

    inputs: {
        marginTop: '10%',
        width: '48%',
    },

    label: {
        marginHorizontal: '-45%',
        paddingLeft: 6,
        fontSize: 14,
        color: '#0B6E4F',
        fontFamily: 'Roboto_500Medium',
        marginBottom: -15,
    },

    input: {
        height: 50,
        borderBottomWidth: 1,
        marginHorizontal: '-45%',
        margin: 14,
        borderBottomColor: '#0B6E4F',
        fontFamily: 'Roboto_400Regular',
        paddingLeft: 6,
        fontSize: 18,
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
});
