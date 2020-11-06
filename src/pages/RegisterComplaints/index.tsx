import React, {useState} from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput, TouchableOpacity, Picker } from 'react-native';
import { Feather, AntDesign as Left  } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { color } from 'react-native-reanimated';

const RegisterComplaints = () => {
    const navigation = useNavigation();

    const [tag, setTag] = useState('');

    function handleNavigateToBack(){
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleNavigateToBack}>
                        <Left name="left" size={40} color="#000000"
                        style={{marginLeft: -10, marginRight: '5%'}}/>
                </TouchableOpacity>
                <Text style={styles.title}>Registre uma nova reclamação</Text>
            </View>
            <Text style={styles.label}>Fotos</Text>
            <TouchableOpacity style={styles.imagesInput} onPress={() => {}}>
                <Feather name="upload" size={50} color="#0B6E4F" />
                <Text style={styles.textUpload}>Adicione imagens do problema aqui</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Insira a localização detalhada onde está acontecendo o problema</Text>
            <TextInput
                placeholder="Informe a rua"
                placeholderTextColor='#8DA1B9'
                style={styles.input}
            />
            <TextInput
                placeholder="Informe o bairro"
                placeholderTextColor='#8DA1B9'
                style={styles.input}
            />
            <TextInput
                placeholder="Informe a cidade"
                placeholderTextColor='#8DA1B9'
                style={styles.input}
            />
            <TextInput
                placeholder="Informe a estado"
                placeholderTextColor='#8DA1B9'
                style={styles.input}
            />

            <Text style={styles.label}>Selecione a área que melhor se encaixa com o problema</Text>
            <View style={styles.select}>
                <Picker
                    selectedValue={tag}
                    onValueChange={(itemValue) => setTag(itemValue)}
                    style={{marginLeft: 12 ,color:'#0B6E4F'}}
                    
                >   
                    <Picker.Item label="Escolha uma opção" />
                    <Picker.Item label="Segurança" value="Segurança" />
                    <Picker.Item label="Energia e Iluminação" value="Eletrodomésticos" />
                    <Picker.Item label="Coleta de Lixo" value="Coleta de Lixoa" />
                    <Picker.Item label="Saúde" value="Saúde" />
                    <Picker.Item label="Infraestrutura e Mobilidade" value="Infraestrutura e Mobilidade" />
                    <Picker.Item label="Saneamento Básico e Fornecimento de água" value="Saneamento Básico e Fornecimento de água" />
                    <Picker.Item label="Outro" value="Outro" /> 
                </Picker>
            </View>

            <Text style={styles.label}>Título</Text>
            <TextInput
                placeholder="Título que resume o problema"
                placeholderTextColor='#8DA1B9'
                style={styles.input}
            />

            <Text style={styles.label}>Descrição</Text>
            <TextInput
                placeholder="Descreva um pouco do problema que está enfrentando"
                placeholderTextColor='#8DA1B9'
                style={[styles.input, { height: 150 }]}
                multiline
            />

            <Text style={styles.label}>Deixe algum contato, para caso o responsável ache necessário obter mais detalhes</Text>
            <TextInput
                placeholder="WhatsApp"
                placeholderTextColor='#8DA1B9'
                style={styles.input}
            />

            <TextInput
                placeholder="E-mail"
                placeholderTextColor='#8DA1B9'
                style={styles.input}
            />

            <RectButton style={styles.nextButton} onPress={() => {}}>
                <Text style={styles.nextButtonText}>Cadastrar</Text>
            </RectButton>
        </ScrollView>
       
    )
}

export default RegisterComplaints;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
        
    },

    title: {
        marginLeft: 10,
        color: '#000000',
        fontSize: 24,
        fontFamily: 'Ubuntu_700Bold',
    },

    label: {
        color: '#0B6E4F',
        fontFamily: 'Roboto_500Medium',
        marginBottom: 8,
    },

    comment: {
        fontSize: 11,
        color: '#8fa7b3',
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#CAF0C1',
        borderRadius: 20,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
    },

    select: {
        backgroundColor: '#CAF0C1',
      
        borderColor: '#0B6E4F',
        borderWidth: 1.4,
        borderRadius: 20,
        
        
        marginBottom: 16,
        
    },

    imagesInput: {
        backgroundColor: '#CAF0C1',
        borderStyle: 'dashed',
        borderColor: '#0B6E4F',
        borderWidth: 1.4,
        borderRadius: 20,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },

    textUpload: {
        marginTop: 8,
        fontFamily: 'Roboto_500Medium',
        color: '#0B6E4F',

    },

    nextButton: {
        backgroundColor: '#0B6E4F',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        marginTop: 25,
        marginBottom: 20
    },

    nextButtonText: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 20,
        color: '#FFF',
    }
})  