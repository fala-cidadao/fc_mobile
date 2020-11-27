/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Fontisto, AntDesign as Left } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper';

import styles from './styles';
import { useAuth } from '../../contexts/authContext';
import api from '../../services/api';

const textColors: { [label: string]: string } = {
    'Em analise': '#FF0303',
    'Em espera': '#FFC600',
    'Em andamento': '#0047FF',
    'Concluido': '#0B6E4F'
};

interface Problem {
    _id: string;
    category: string;
    comments: [
        {
            image: string;
            owner: string;
            role: string;
            text: string;
        }
    ];
    description: string;
    location: {
        latitude: string;
        longitude: string;
    };
    owner: string;
    status: string;
    title: string;
    userImages: [];
};

const MyComplaints: React.FC = () => {
  const [problems, setProblems] = useState([]);
  const navigation = useNavigation();

  const { user } = useAuth();

  useEffect(() => {
    api.get('/problem').then(data => {
        const myProblems = data.data.filter((problem: Problem) => problem.owner === user?.user.userId);
        setProblems(myProblems);
    });
  }, []);

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
        {
            problems.map((itemProblem: Problem) => {
                return (
                    <List.Accordion
                        key={itemProblem._id}
                        title={itemProblem.title}
                        titleStyle={styles.titleComplaints}
                        description={itemProblem.status}
                        descriptionStyle={{ color: textColors[itemProblem.status] }}
                        style={styles.complaints}
                        >
                        <TouchableOpacity onPress={handleNavigateToDetailComplaints}>
                            <List.Item
                            style={styles.subComplaints}
                            title={''}
                            titleStyle={styles.titlesubComplaints}
                            description={(
                                <View style={styles.headerDescription}>
                                <Fontisto name="ellipse" size={18} color={textColors[itemProblem.status]} />
                                <Text style={styles.textDescription}>{itemProblem.description}</Text>
                                </View>
                            )}
                            />
                        </TouchableOpacity>
                    </List.Accordion>
                );
            })
        }
        
      </List.Section>
    </ScrollView>
  );
};

export default MyComplaints;
