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

import { UserDto } from '../../interfaces/UserDto.interface';
import { useAuth } from '../../contexts/authContext';
import ValidateEmailRegex from '../../utils/utils';

import BackgroundImg from '../../assets/PNG/Background.png';
import Logo from '../../assets/PNG/Fala.png';

import styles from './styles';

const Register = (): JSX.Element => {
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
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match', '', [{ text: 'Ok' }]);
      return false;
    }

    return true;
  };

  const onSubmit = async () => {
    const signUpRequest: UserDto = {
      name,
      email,
      password,
      phone: '123123',
      role: 'admin',
    };
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
              style={styles.input}
              placeholderTextColor="#8DA1B9"
              placeholder="Digite sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
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
            <Text style={styles.linkText}>Acessar sua conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Register;
