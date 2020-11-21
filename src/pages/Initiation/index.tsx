import React from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BackgroundImg from '../../assets/PNG/Background.png';
import Logo from '../../assets/PNG/Fala.png';

import styles from './styles';

const Initiation = (): JSX.Element => {
  const navigation = useNavigation();

  function handleNavigateToLogon() {
    navigation.navigate('Logon');
  }

  function handleNavigateToRegister() {
    navigation.navigate('Register');
  }

  return (
      <ImageBackground source={BackgroundImg} style={styles.container}>
          <View style={styles.main}>
          <Image source={Logo} style={styles.image} />
          <View>
                  <Text style={styles.title}>Seja bem-vindo! </Text>
                  <Text style={styles.description}>
              Faça sua voz ser ouvida e vamos em busca de uma cidade melhor!
                    </Text>
                </View>
          <TouchableOpacity style={styles.button} onPress={handleNavigateToLogon}>
                    <Text style={styles.buttonText}>Acessar Conta</Text>
                </TouchableOpacity>

          <TouchableOpacity onPress={handleNavigateToRegister}>
                    <Text style={styles.linkText}>Deseja realizar cadastro?</Text>
                </TouchableOpacity>
        </View>
        </ImageBackground>
  );
};

export default Initiation;
