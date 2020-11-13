import React, { useState } from "react";
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign as Left, FontAwesome5 } from '@expo/vector-icons'; 
import Constants from 'expo-constants';

const EditPerfil = () => {
    const [newName, setNewName] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigation = useNavigation();

    function handleNavigateToBack(){
        navigation.goBack();
    }

    function handleSave(){
        // há implementar
    }

    return( 
        
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateToBack}>
                    <Left name="left" size={40} color="#000000"
                    style={{marginLeft: '5%'}}/>
                </TouchableOpacity>
                <View style={styles.main}>
                    <TouchableOpacity style={styles.imagesInput} onPress={() => {}}>
                        <FontAwesome5 name="camera" size={45} color="#ffffff" />
                    </TouchableOpacity>

                    <View style={styles.inputs}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor =  "#8DA1B9"
                            placeholder="Fulano da silva"
                            value={newName}
                            onChangeText={setNewName}
                        />
                        <Text style={styles.label}>Alterar senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor =  "#8DA1B9"
                            placeholder="************"
                            value={newPassword}
                            onChangeText={setNewPassword}
                            secureTextEntry
                        />
                    </View>
                    
                    <TouchableOpacity style={styles.button} onPress={handleSave}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        
    );
};

export default EditPerfil;

const styles = StyleSheet.create({
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

    imagesInput: {
        resizeMode: "contain",
        flex: 1,
        backgroundColor: '#0B6E4F',
        borderColor: '#CAF0C1',
        borderWidth: 1.4,
        borderRadius: 70,
        maxHeight: 140,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: "-30%"
    },

    inputs: {
        marginTop: '10%'
    },

    label:{
        marginHorizontal: '-45%',
        paddingLeft: 6,
        fontSize: 14,
        color: '#0B6E4F',
        fontFamily: 'Roboto_500Medium',
        marginBottom: -15,

    },

    input: {
        height: 50,
        borderBottomWidth: 1,
        marginHorizontal: '-45%',
        margin: 14,
        borderBottomColor: '#0B6E4F',
        fontFamily: 'Roboto_400Regular',
        paddingLeft: 6,
        fontSize: 18,
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

});
