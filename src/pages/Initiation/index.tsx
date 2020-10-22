import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import BackgroundImg from '../../asserts/PNG/Background.png';
import Logo from '../../asserts/PNG/Fala.png';

const Initiation = () => {
    const handleSignUpScreen = () => {

    };

    const handleSignInScreen = () => {

    };

    return(
        <ImageBackground style={styles.backgroundImage} source={BackgroundImg}>
            <View style={styles.container}>
                <Image style={styles.logo} source={Logo} />
                
                <Text style={styles.title}>Seja bem-vindo!</Text>
                
                <Text style={styles.subtitle}>Faça sua voz ser ouvida e vamos em busca de uma cidade melhor!</Text>
                
                <RectButton style={styles.signInButton} onPress={() => {}}>
                    <Text style={styles.textButton}>Acessar Conta</Text>
                </RectButton>
                
                <RectButton style={styles.signUpButton} onPress={() => {}}>
                    <Text>Deseja realizar cadastro?</Text>
                </RectButton>
            </View>
        </ImageBackground>  
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    logo: {
        width: 240,
        height: 120
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginTop: 24,
        marginBottom: 24
    },
    subtitle: {
        fontSize: 18,
        marginTop: 24,
        marginBottom: 24,
        width: 308,
    },
    signInButton: {
        backgroundColor: '#0B6E4F',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 58,
        width: 308,
        marginTop: 120,
        marginBottom: 24,
    },
    signUpButton: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
    },
    textButton: {
        color: '#fff',
        fontSize: 18
    }
});

export default Initiation;