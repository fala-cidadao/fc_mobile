import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign as Left, FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import styles from './styles';

const EditPerfil: React.FC = () => {
  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [imagePerfil, setImagePerfil] = useState('');  

  const navigation = useNavigation();

  

  function handleNavigateToBack() {
    navigation.goBack();
  }

  function handleSave() {
    // há implementar
  }

  const handleSelectImage = async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      alert('Precisamos de acesso ás suas fotos...');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) return;

    const { uri } = result;

    setImagePerfil(uri);
  };



  return (
      <View style={styles.container}>
          <TouchableOpacity onPress={handleNavigateToBack}>
              <Left name="left" size={40} color="#000000" style={{ marginLeft: '5%' }} />
            </TouchableOpacity>
            <View style={styles.main}>
                <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImage}>
                <FontAwesome5 name="camera" size={45} color="#ffffff" />
              </TouchableOpacity>

          <View style={styles.inputs}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#8DA1B9"
              placeholder="Fulano da Silva"
              value={newName}
              onChangeText={setNewName}
            />
                    <Text style={styles.label}>Alterar senha</Text>
                  <TextInput
                      style={styles.input}
                      placeholderTextColor="#8DA1B9"
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
