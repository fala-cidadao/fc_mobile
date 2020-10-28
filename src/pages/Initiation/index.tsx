import React from "react";
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

import BackgroundImg from '../../assets/PNG/Background.png';
import Logo from '../../assets/PNG/Fala.png';

const Initiation = () => {
    const navigation = useNavigation();

    function handleNavigateToLogon(){
        navigation.navigate('Logon');
    }

    function handleNavigateToRegister(){
        navigation.navigate('Register');
    }

    return( 
        <ImageBackground 
            source={BackgroundImg} 
            style={styles.container}
            
        >
            <View style={styles.main}>
                <Image 
                    source={Logo}
                    style={styles.image}
                />
                <View>
                    <Text style={styles.title}>Seja bem-vindo! </Text>
                    <Text style={styles.description}>Faça sua voz ser ouvida e vamos em busca de uma cidade melhor!</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleNavigateToLogon}>
                    <Text style={styles.buttonText}>Acessar Conta</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={handleNavigateToRegister}>
                        <Text style={styles.linkText} >Deseja realizar cadastro?</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground >
    );
};

export default Initiation;

const styles = StyleSheet.create({
   
    container: {
        resizeMode: "contain",
        flex: 1,
        backgroundColor: '#ffffff',
    },

    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginTop: "8%",
        resizeMode: "contain",
        flex: 1,  
        maxHeight: "30%",
        maxWidth: "94%"
    },

    title: {
        color: '#000000',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: '16%',
    },
    
    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
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
