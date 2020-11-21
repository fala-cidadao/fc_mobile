import React, { useState } from "react";
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign as Left } from '@expo/vector-icons';
import Constants from 'expo-constants';

import { LoginDto } from "../../interfaces/LoginDto.interface";
import { useAuth } from '../../contexts/authContext';
import ValidateEmailRegex from '../../utils/utils';

import BackgroundImg from '../../asserts/PNG/Background.png';
import Logo from '../../asserts/PNG/Fala.png';

const Logon = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const { user, signIn } = useAuth();

  function handleNavigateToInitiation() {
    navigation.navigate('Initiation');
  }

  function handleNavigateToRecovery() {
    navigation.navigate('Recovery');
  }

  function handleNavigateToMapMenu() {
    navigation.navigate('Drawer');
  }

  const onSubmit = async () => {
    if (!ValidateEmailRegex(email)) {
      Alert.alert('Invalid Email', '', [{ text: 'Ok' }]);
      return;
    };

    const signInRequest: LoginDto = {
      email,
      password
    };

    await signIn(signInRequest);
  };

  return (
    <ImageBackground
      source={BackgroundImg}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateToInitiation}>
          <Left name="left" size={40} color="#000000"
            style={{ marginLeft: '5%' }} />
        </TouchableOpacity>
        <View style={styles.main}>
          <Image
            source={Logo}
            style={styles.image}
          />


          <View style={styles.inputs}>
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
          </View>

          <TouchableOpacity style={styles.button} onPress={handleNavigateToMapMenu}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNavigateToRecovery}>
            <Text style={styles.linkText} >Esqueci minha senha!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground >
  );
};

export default Logon;

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
    maxHeight: "25%",
    maxWidth: "94%"
  },

  inputs: {
    marginTop: '10%',
    width: '48%'
  },

  input: {
    height: 50,
    borderBottomWidth: 1,
    marginHorizontal: '-45%',
    margin: 14,
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
  }
});