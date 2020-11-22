import React, { useState } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign as Left } from '@expo/vector-icons';

import BackgroundImg from '../../assets/PNG/Background.png';
import Logo from '../../assets/PNG/Fala.png';

import styles from './styles';

const Recovery: React.FC = () => {
    const navigation = useNavigation();

    const [newEmail, setNewEmail] = useState('');

    function handleNavigateToBack() {
        navigation.goBack();
    }

    return (
        <ImageBackground source={BackgroundImg} style={styles.background}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateToBack}>
                    <Left name="left" size={40} color="#000000" style={{ marginLeft: '5%' }} />
                </TouchableOpacity>
                <View style={styles.main}>
                    <Image source={Logo} style={styles.image} />
                    <Text style={styles.description}>
                        Será enviado um email com o link para que seja possível alterar a senha!
                    </Text>

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#8DA1B9"
                            placeholder="Digite seu e-mail"
                            value={newEmail}
                            onChangeText={setNewEmail}
                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => {}}>
                        <Text style={styles.buttonText}>Recuperar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Recovery;
