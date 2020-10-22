import React from "react";
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign as Left } from '@expo/vector-icons'; 
import Constants from 'expo-constants';

const Recovery = () => {
    const navigation = useNavigation();

    function handleNavigateToBack(){
        navigation.goBack();
    }

    return( 
        <ImageBackground 
            source={require('../../asserts/PNG/Background.png')} 
            style={styles.background}
        >
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateToBack}>
                    <Left name="left" size={40} color="#000000"
                    style={{marginLeft: '5%'}}/>
                </TouchableOpacity>
                <View style={styles.main}>
                    <Image 
                        source={require('../../asserts/PNG/Fala.png')}
                        style={styles.image}
                    />
                    <Text style={styles.description}>
                        Será enviado um email com o link para que seja possível alterar a senha! 
                    </Text>

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor =  "#8DA1B9"
                            placeholder="Digite seu e-mail"
                        />
                    </View>
                    
                    <TouchableOpacity style={styles.button} onPress={()=>{}}>
                        <Text style={styles.buttonText}>Recuperar Senha</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </ImageBackground >
    );
};

export default Recovery;

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

    image: {
        resizeMode: "contain",
        flex: 1,  
        maxHeight: "25%",
        maxWidth: "94%"
    },
    
    description: {
        marginTop: '20%',
        maxWidth: '85%',
        lineHeight: 20,
        color: '#000000',
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
    },
    input: {
        marginTop: '15%',
        height: 50,
        borderBottomWidth: 1,
        marginHorizontal: '-45%',
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
        marginBottom: '15%'
    },
  
    buttonText: {
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 21,
    }
});

