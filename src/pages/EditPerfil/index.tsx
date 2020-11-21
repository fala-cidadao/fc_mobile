import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign as Left, FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';

const EditPerfil: React.FC = () => {
  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();

  function handleNavigateToBack() {
    navigation.goBack();
  }

  function handleSave() {
    // há implementar
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateToBack}>
        <Left name="left" size={40} color="#000000" style={{ marginLeft: '5%' }} />
      </TouchableOpacity>
      <View style={styles.main}>
        <TouchableOpacity style={styles.imagesInput} onPress={() => {}}>
          <FontAwesome5 name="camera" size={45} color="#ffffff" />
        </TouchableOpacity>

        <View style={styles.inputs}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#8DA1B9"
            placeholder="Fulano da silva"
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
