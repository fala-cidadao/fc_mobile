import React from "react";
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign as Left } from '@expo/vector-icons'; 
import Constants from 'expo-constants';

const Register = () => {
    const navigation = useNavigation();

    function handleNavigateToInitiation(){
        navigation.navigate('Initiation');
    }

    function handleNavigateToLogon(){
        navigation.navigate('Logon');
    }

    return( 
        <ImageBackground 
            source={require('../../asserts/PNG/Background.png')} 
            style={styles.background}
        >
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateToInitiation}>
                    <Left name="left" size={40} color="#000000"
                    style={{marginLeft: '5%'}}/>
                </TouchableOpacity>
                <View style={styles.main}>
                    <Text style={styles.title}>Crie sua conta</Text>

                    <View style={styles.inputs}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor =  "#8DA1B9"
                            placeholder="Digite seu nome"
                        />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor =  "#8DA1B9"
                            placeholder="Digite seu e-mail"
                        />
                         <TextInput
                            style={styles.input}
                            placeholderTextColor =  "#8DA1B9"
                            placeholder="Digite sua senha"
                        />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor =  "#8DA1B9"
                            placeholder="Confirme sua senha"
                        />
                    </View>
                    
                    <TouchableOpacity style={styles.button} onPress={()=>{}}>
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

    main:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },
    title: {
        color: '#000000',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
    },

    inputs: {
        marginTop: '10%'
    },

    input: {
        height: 50,
        borderBottomWidth: 1,
        paddingHorizontal: '36%',
        margin: 10,
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

