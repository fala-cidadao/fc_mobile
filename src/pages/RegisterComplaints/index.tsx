import React, {useState} from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput, TouchableOpacity, Picker, Image } from 'react-native';
import { Feather, AntDesign as Left  } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';

const RegisterComplaints = () => {
    const navigation = useNavigation();
    
    const [street, setStreet] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [tag, setTag] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [whatsApp, setWhastApp] = useState('');
    const [mail, setMail] = useState('');
    const [images, setImages] = useState<string[]>([]);


    function handleNavigateToBack(){
        navigation.goBack();
    };

    const handleSelectImage = async () => {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

        if (status !== 'granted') {
            alert('Precisamos acessar suas fotos');
            return;
        };

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (result.cancelled) return;

        const { uri } = result;

        setImages([...images, uri]);
    };

    const onSubmit = async () => {
        //implemantar
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
            <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImage}>
                <Feather name="upload" size={50} color="#0B6E4F" />
                <Text style={styles.textUpload}>Adicione imagens do problema aqui</Text>
            </TouchableOpacity>
            <View style={styles.uploadedImagesContainer}>
                {
                    images.map(image => {
                        return (
                            <Image
                                key={image}
                                source={{ uri: image }}
                                style={styles.uploadedImage}
                            />
                        );
                    })
                }
            </View>

            <Text style={styles.label}>Insira a localização detalhada onde está acontecendo o problema</Text>
            <TextInput
                placeholder="Informe a rua"
                placeholderTextColor='#8DA1B9'
                style={styles.input}
                value={street}
                onChangeText={setStreet}
            />
            <TextInput
                placeholder="Informe o bairro"
                placeholderTextColor='#8DA1B9'
                style={styles.input}
                value={district}
                onChangeText={setDistrict}
            />
            <TextInput
                placeholder="Informe a cidade"
                placeholderTextColor='#8DA1B9'
                style={styles.input}
                value={city}
                onChangeText={setCity}
            />
            <TextInput
                placeholder="Informe a estado"
                placeholderTextColor='#8DA1B9'
                style={styles.input}
                value={state}
                onChangeText={setState}
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
                value={title}
                onChangeText={setTitle}
            />

            <Text style={styles.label}>Descrição</Text>
            <TextInput
                placeholder="Descreva um pouco do problema que está enfrentando"
                placeholderTextColor='#8DA1B9'
                style={[styles.input, { height: 150 }]}
                multiline
                value={description}
                onChangeText={setDescription}
            />

            <Text style={styles.label}>Deixe algum contato, para caso o responsável ache necessário obter mais detalhes</Text>
            <TextInput
                placeholder="WhatsApp"
                placeholderTextColor='#8DA1B9'
                style={styles.input}
                value={whatsApp}
                onChangeText={setWhastApp}
            />

            <TextInput
                placeholder="E-mail"
                placeholderTextColor='#8DA1B9'
                style={styles.input}
                value={mail}
                onChangeText={setMail}
            />

            <RectButton style={styles.nextButton} onPress={onSubmit}>
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

    uploadedImagesContainer: {
        flexDirection: 'row'
    },

    uploadedImage: {
        marginTop: -20,
        width: 98,
        height: 75,
        borderRadius: 15,
        marginBottom: 15,
        marginRight: 8
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