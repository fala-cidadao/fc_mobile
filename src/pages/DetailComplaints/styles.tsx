import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 24,
        paddingRight: 24,
    },

    title: {
        marginLeft: 10,
        color: '#000000',
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
    },

    imagesContainer: {
        marginTop: 15,
        height: 240,
    },

    image: {
        width: Dimensions.get('window').width,
        height: 240,
        resizeMode: 'cover',
    },

    detailsContainer: {
        paddingRight: 15,
        paddingLeft: 18,
    },

    description: {
        fontFamily: 'Roboto_400Regular',
        color: '#000000',
        lineHeight: 20,
        marginTop: 10,
    },

    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },

    locationText: {
        marginLeft: 10,
        color: '#0B6E4F',
        fontFamily: 'Roboto_500Medium',
    },

    mapContainer: {
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1.2,
        borderColor: '#0B6E4F',
        marginTop: 15,
        backgroundColor: '#CAF0C1',
    },

    mapStyle: {
        width: '100%',
        height: 150,
    },

    routesContainer: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },

    routesText: {
        fontFamily: 'Roboto_500Medium',
        color: '#0B6E4F',
    },

    separator: {
        height: 0.8,
        width: '100%',
        backgroundColor: '#D3E2E6',
        marginVertical: 40,
    },

    titleImageRes: {
        marginTop: -20,
        color: '#000000',
        fontSize: 18,
        fontFamily: 'Roboto_500Medium',
        paddingRight: 15,
        paddingLeft: 15,
    },

    imagesContainerRes: {
        marginTop: 15,
        height: 190,
    },

    imageRes: {
        width: Dimensions.get('window').width,
        height: 190,
        resizeMode: 'cover',
    },

    classificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        paddingLeft: 24,
        paddingRight: 24,
    },

    button: {
        marginTop: 30,
        marginBottom: 30,
        width: 56,
        height: 57,
        marginLeft: 27,
        marginRight: 27,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },

    input: {
        backgroundColor: '#E9EFF5',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
        fontFamily: 'Roboto_400Regular',
    },

    iconPlane: {
        backgroundColor: '#E9EFF5',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
    },

    headerComments: {
        flexDirection: 'row',
        paddingLeft: 24,
        paddingRight: 24,
        marginBottom: 24,
    },

    photoContaner: {
        borderRadius: 70,
        height: 40,
        width: 40,
        right: 1,
    },

    photo: {
        height: 40,
        borderRadius: 70,
        resizeMode: 'cover',
    },

    perfilText: {
        marginTop: 2,
        marginLeft: 10,
        fontSize: 15,
        marginBottom: 5,
        paddingRight: 24,
        color: '#0B6E4F',
        fontFamily: 'Roboto_500Medium',
    },

    perfilDescription: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 15,
        paddingRight: 24,
        marginLeft: 10,
    },
});
