import React, { useState } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign as Left } from '@expo/vector-icons';

import styles from './styles';

import { LoginDto } from '../../interfaces/LoginDto.interface';
import { useAuth } from '../../contexts/authContext';
import ValidateEmailRegex from '../../utils/utils';

import BackgroundImg from '../../asserts/PNG/Background.png';
import Logo from '../../asserts/PNG/Fala.png';

const Logon = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const { signIn } = useAuth();

  function handleNavigateToInitiation() {
    navigation.navigate('Initiation');
  }

  function handleNavigateToRecovery() {
    navigation.navigate('Recovery');
  }

  const onSubmit = async () => {
    if (!ValidateEmailRegex(email)) {
      Alert.alert('Invalid Email', '', [{ text: 'Ok' }]);
      return;
    }

    const signInRequest: LoginDto = {
      email,
      password,
    };

    await signIn(signInRequest);
  };

  return (
    <ImageBackground source={BackgroundImg} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateToInitiation}>
          <Left name="left" size={40} color="#000000" style={{ marginLeft: '5%' }} />
        </TouchableOpacity>
        <View style={styles.main}>
          <Image source={Logo} style={styles.image} />

          <View style={styles.inputs}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#8DA1B9"
              placeholder="Digite seu e-mail"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="#8DA1B9"
              placeholder="Digite sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNavigateToRecovery}>
            <Text style={styles.linkText}>Esqueci minha senha!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Logon;
