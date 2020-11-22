import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Picker, Image } from 'react-native';
import { Feather, AntDesign as Left } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import styles from './styles';

const RegisterComplaints: React.FC = () => {
    const navigation = useNavigation();
    const [tag, setTag] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [whatsApp, setWhastApp] = useState('');
    const [mail, setMail] = useState('');
    const [images, setImages] = useState<string[]>([]);

    function handleNavigateToMap() {
        navigation.navigate('Map');
    }

    const handleSelectImage = async () => {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

        if (status !== 'granted') {
            // eslint-disable-next-line no-alert
            alert('Precisamos de acesso às suas fotos...');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });

        if (result.cancelled) return;

        const { uri } = result;

        setImages([...images, uri]);
    };

    const onSubmit = async () => {
        // implemantar
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleNavigateToMap}>
                    <Left
                        name="left"
                        size={30}
                        color="#000000"
                        style={{ marginLeft: -10, marginRight: '5%' }}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Registre uma nova reclamação</Text>
            </View>

            <Text style={styles.label}>Fotos</Text>
            <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImage}>
                <Feather name="upload" size={50} color="#0B6E4F" />
                <Text style={styles.textUpload}>Adicione imagens do problema aqui</Text>
            </TouchableOpacity>
            <View style={styles.uploadedImagesContainer}>
                {images.map((image) => (
                    <Image key={image} source={{ uri: image }} style={styles.uploadedImage} />
                ))}
            </View>

            <Text style={styles.label}>Selecione a área que melhor se encaixa com o problema</Text>
            <View style={styles.select}>
                <Picker
                    selectedValue={tag}
                    onValueChange={(itemValue) => setTag(itemValue)}
                    style={{ marginLeft: 12, color: '#0B6E4F' }}
                >
                    <Picker.Item label="Escolha uma opção" />
                    <Picker.Item label="Segurança" value="Segurança" />
                    <Picker.Item label="Energia e Iluminação" value="Eletrodomésticos" />
                    <Picker.Item label="Coleta de Lixo" value="Coleta de Lixoa" />
                    <Picker.Item label="Saúde" value="Saúde" />
                    <Picker.Item
                        label="Infraestrutura e Mobilidade"
                        value="Infraestrutura e Mobilidade"
                    />
                    <Picker.Item
                        label="Saneamento Básico e Fornecimento de água"
                        value="Saneamento Básico e Fornecimento de água"
                    />
                    <Picker.Item label="Outro" value="Outro" />
                </Picker>
            </View>

            <Text style={styles.label}>Título</Text>
            <TextInput
                placeholder="Título que resume o problema"
                placeholderTextColor="#8DA1B9"
                style={styles.input}
                value={title}
                onChangeText={setTitle}
            />

            <Text style={styles.label}>Descrição</Text>
            <TextInput
                placeholder="Descreva um pouco do problema que está enfrentando"
                placeholderTextColor="#8DA1B9"
                style={[styles.input, { height: 150 }]}
                multiline
                value={description}
                onChangeText={setDescription}
            />

            <Text style={styles.label}>
                Deixe algum contato, para caso o responsável ache necessário obter mais detalhes
            </Text>
            <TextInput
                placeholder="WhatsApp"
                placeholderTextColor="#8DA1B9"
                style={styles.input}
                value={whatsApp}
                onChangeText={setWhastApp}
            />

            <TextInput
                placeholder="E-mail"
                placeholderTextColor="#8DA1B9"
                style={styles.input}
                value={mail}
                onChangeText={setMail}
            />

            <RectButton style={styles.nextButton} onPress={onSubmit}>
                <Text style={styles.nextButtonText}>Cadastrar</Text>
            </RectButton>
        </ScrollView>
    );
};

export default RegisterComplaints;
