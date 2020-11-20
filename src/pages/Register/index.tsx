import React, { useState } from "react";
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign as Left } from '@expo/vector-icons';
import Constants from 'expo-constants';

import { UserDto } from "../../interfaces/UserDto.interface";
import { useAuth } from '../../contexts/authContext';
import { ValidateEmailRegex } from '../../utils/utils';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    const { signUp } = useAuth();

    function handleNavigateToInitiation() {
        navigation.navigate('Initiation');
    }

    function handleNavigateToLogon() {
        navigation.navigate('Logon');
    }

    const validateSubmit = () => {
        if (!ValidateEmailRegex(email)) {
            Alert.alert('Invalid Email', '', [{ text: 'Ok' }]);
            return false;
        };

        if (password !== confirmPassword) {
            Alert.alert('Passwords do not match', '', [{ text: 'Ok' }]);
            return false;
        };

        return true;
    };

    const onSubmit = async () => {
        const signUpRequest: UserDto = {
            name,
            email,
            password,
            phone: '123123',
            role: 'admin'
        };

        try {
            if (validateSubmit()) {
                await signUp(signUpRequest);
                navigation.navigate('Logon');
            }
            else return;
        } catch (error) {
            console.log(error);
            Alert.alert(error.message, '', [{ text: 'Ok' }]);
        };
    };

    return (
        <ImageBackground
            source={require('../../assets/PNG/Background.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateToInitiation}>
                    <Left name="left" size={40} color="#000000"
                        style={{ marginLeft: '5%' }} />
                </TouchableOpacity>
                <View style={styles.main}>
                    <Image
                        source={require('../../assets/PNG/Fala.png')}
                        style={styles.image}
                    />

                    <View style={styles.inputs}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#8DA1B9"
                            placeholder="Digite seu nome"
                            value={name}
                            onChangeText={setName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#8DA1B9"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TextInput
                            style={[styles.input, { fontFamily: 'Roboto_400Regular' }]}
                            placeholderTextColor="#8DA1B9"
                            placeholder="Digite sua senha"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <TextInput
                            style={[styles.input, { fontFamily: 'Roboto_400Regular' }]}
                            placeholderTextColor="#8DA1B9"
                            placeholder="Confirme sua senha"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={onSubmit}>
                        <Text style={styles.buttonText}>Continuar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNavigateToLogon}>
                        <Text style={styles.linkText} >Acessar sua conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground >
    );
};

export default Register;

const styles = StyleSheet.create({

    background: {
        resizeMode: "contain",
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
        resizeMode: "contain",
        flex: 1,
        maxHeight: "25%",
        maxWidth: "94%"
    },

    inputs: {
        marginTop: '5%'
    },

    input: {
        height: 50,
        borderBottomWidth: 1,
        marginHorizontal: '-45%',
        margin: 7,
        borderBottomColor: '#8DA1B9',
        paddingLeft: 2,
        fontSize: 20,

    },

    button: {
        backgroundColor: '#0B6E4F',
        height: 60,
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        marginTop: '6%',
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
        marginTop: '5%',
        marginBottom: '10%'
    }
});
