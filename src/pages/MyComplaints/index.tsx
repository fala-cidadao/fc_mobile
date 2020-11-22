/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Fontisto, AntDesign as Left } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper';

import styles from './styles';

const MyComplaints: React.FC = () => {
  const navigation = useNavigation();

  const redText = 'O responsável já está ciente e buscando \n resolver o problema.';
  const yellowText = 'O problema foi dado como resolvido e \n espera a validação.';
  const blueText = 'O problema está sendo resolvido!';
  const greenText = 'O problema já foi resolvido e confirmado \n pelo reclamante.';

  function handleNavigateToBack() {
    navigation.goBack();
  }
  function handleNavigateToDetailComplaints() {
    navigation.navigate('DetailComplaints');
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 24,
        paddingTop: 24,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={handleNavigateToBack}>
          <Left
            name="left"
            size={30}
            color="#000000"
            style={{ marginLeft: -10, marginRight: '5%' }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Suas reclamações registradas</Text>
      </View>

      <List.Section>
        <List.Accordion
          title="Tipo de reclamação"
          titleStyle={styles.titleComplaints}
          description="Em análise"
          descriptionStyle={{ color: '#FF0303' }}
          style={styles.complaints}
        >
          <TouchableOpacity onPress={handleNavigateToDetailComplaints}>
            <List.Item
              style={styles.subComplaints}
              title="Fala, Zezé. Bom dia, cara. Deixa eu te falar uma coisa.
                            Eu estou pensando aqui, sei que está difícil
                            para vocês"
              titleStyle={styles.titlesubComplaints}
              description={(
                <View style={styles.headerDescription}>
                  <Fontisto name="ellipse" size={18} color="#FF0303" />
                  <Text style={styles.textDescription}>{redText}</Text>
                </View>
              )}
            />
          </TouchableOpacity>
        </List.Accordion>

        <List.Accordion
          title="Tipo de reclamação 2"
          titleStyle={styles.titleComplaints}
          description="Em espera"
          descriptionStyle={{ color: '#FFC600' }}
          style={styles.complaints}
        >
          <TouchableOpacity onPress={handleNavigateToDetailComplaints}>
            <List.Item
              style={styles.subComplaints}
              title="Fala, Zezé. Bom dia, cara. Deixa eu te falar uma coisa.
                            Eu estou pensando aqui, sei que está difícil
                            para vocês"
              titleStyle={styles.titlesubComplaints}
              description={(
                <View style={styles.headerDescription}>
                  <Fontisto name="ellipse" size={18} color="#FFC600" />
                  <Text style={styles.textDescription}>{yellowText}</Text>
                </View>
              )}
            />
          </TouchableOpacity>
        </List.Accordion>

        <List.Accordion
          title="Tipo de reclamação 3"
          titleStyle={styles.titleComplaints}
          description="Em andamento"
          descriptionStyle={{ color: '#0047FF' }}
          style={styles.complaints}
        >
          <TouchableOpacity onPress={handleNavigateToDetailComplaints}>
            <List.Item
              style={styles.subComplaints}
              title="Fala, Zezé. Bom dia, cara. Deixa eu te falar uma coisa.
                            Eu estou pensando aqui, sei que está difícil
                            para vocês"
              titleStyle={styles.titlesubComplaints}
              description={(
                <View style={styles.headerDescription}>
                  <Fontisto name="ellipse" size={18} color="#0047FF" />
                  <Text style={styles.textDescription}>{blueText}</Text>
                </View>
              )}
            />
          </TouchableOpacity>
        </List.Accordion>

        <List.Accordion
          title="Tipo de reclamação 4"
          titleStyle={styles.titleComplaints}
          description="Concluído"
          descriptionStyle={{ color: '#0B6E4F' }}
          style={styles.complaints}
        >
          <TouchableOpacity onPress={handleNavigateToDetailComplaints}>
            <List.Item
              style={styles.subComplaints}
              title="Fala, Zezé. Bom dia, cara. Deixa eu te falar uma coisa.
                            Eu estou pensando aqui, sei que está difícil
                            para vocês"
              titleStyle={styles.titlesubComplaints}
              description={(
                <View style={styles.headerDescription}>
                  <Fontisto name="ellipse" size={18} color="#0B6E4F" />
                  <Text style={styles.textDescription}>{greenText}</Text>
                </View>
              )}
            />
          </TouchableOpacity>
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};

export default MyComplaints;
