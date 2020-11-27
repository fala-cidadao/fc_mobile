import React, { useEffect, useState } from 'react';
import { Image, View, ScrollView, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { FontAwesome, AntDesign, Entypo, Octicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

import styles from './styles';
import { useAuth } from '../../contexts/authContext';
import api from '../../services/api';

interface ILocation {
    latitude: number;
    longitude: number;
};
interface IProblem {
    _id: string;
    adminImages: [];
    category: string;
    comments: [{
        owner: string | undefined;
        text: string;
        role: string | undefined;
        image: string;
    }];
    createdAt: string;
    description: [];
    location: ILocation;
    owner: string;
    status: string;
    title: string;
    updateAt: string;
    userImages: string[];
};

interface Route {
    problem: IProblem;
}

const DetailComplaints: React.FC = () => {
    const [comment, setComment] = useState('');
    const navigation = useNavigation();
    const route = useRoute();
    const { user } = useAuth();
    const { problem } = route.params as Route;

    function handleNavigateToBack() {
        navigation.goBack();
    }

    async function handleAddComment(problem: IProblem) {
        const data = {
            owner: user?.user.userId,
            text: comment,
            role: user?.user.role,
            image: ''
        };

        problem.comments.push(data);

        await api.post(`/problem/${problem._id}/comment`, data);

        Alert.alert('Comentário adicionado', '', [{ text: 'Ok' }]);
    }    

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingTop: 24, paddingBottom: 24 }}
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={handleNavigateToBack}>
                    <AntDesign
                        name="left"
                        size={40}
                        color="#000000"
                        style={{ marginLeft: -10, marginRight: '5%' }}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>{problem.title}</Text>
            </View>
            <View style={styles.imagesContainer}>
                <ScrollView horizontal pagingEnabled>
                    {
                        problem.userImages.map((image, index) => {
                            return (
                                <Image
                                    key={index + image}
                                    style={styles.image}
                                    source={{
                                        uri: image,
                                    }}
                                />
                            );
                        })
                    }
                </ScrollView>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.description}>
                    {problem.description}
                </Text>

                <View style={styles.locationContainer}>
                    <Entypo name="location" size={24} color="#0B6E4F" />
                    <Text style={styles.locationText}>Localização</Text>
                </View>
                <View style={styles.mapContainer}>
                    <MapView
                        initialRegion={{
                            latitude: Number(problem.location.latitude),
                            longitude: Number(problem.location.longitude),
                            latitudeDelta: 0.008,
                            longitudeDelta: 0.008,
                        }}
                        zoomEnabled={false}
                        pitchEnabled={false}
                        scrollEnabled={false}
                        rotateEnabled={false}
                        style={styles.mapStyle}
                    >
                        <Marker
                            coordinate={{
                                latitude: Number(problem.location.latitude),
                                longitude: Number(problem.location.longitude),
                            }}
                        />
                    </MapView>

                    <View style={styles.routesContainer}>
                        <Text style={styles.routesText}>Ver rotas no Google Maps</Text>
                    </View>
                </View>
            </View>

            <View style={styles.separator} />

            <Text style={styles.titleImageRes}>Imagens adicionadas pelo responsável:</Text>

            <View style={styles.imagesContainerRes}>
                <ScrollView horizontal pagingEnabled>
                    {
                        problem.adminImages.map((image, index) => {
                            return (
                                <Image
                                    key={index + image}
                                    style={styles.imageRes}
                                    source={{
                                        uri: image
                                    }}
                                />
                            );
                        })
                    }
                </ScrollView>
            </View>

            <View style={styles.classificationContainer}>
                <TouchableOpacity
                    onPress={() => {}}
                    style={[styles.button, { backgroundColor: '#0B6E4F' }]}
                >
                    <FontAwesome name="check" size={50} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {}}
                    style={[styles.button, { backgroundColor: '#FFC600' }]}
                >
                    <Octicons name="plus" size={50} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {}}
                    style={[styles.button, { backgroundColor: '#DE5F61' }]}
                >
                    <AntDesign name="close" size={50} color="#ffffff" />
                </TouchableOpacity>
            </View>

            <View style={styles.commentContainer}>
                <TextInput
                    value={comment}
                    onChangeText={setComment}
                    placeholder="Insira um novo comentário             "
                    placeholderTextColor="#8DA1B9"
                    style={styles.input}
                />
                <TouchableOpacity onPress={() => handleAddComment(problem)} style={styles.iconPlane}>
                    <FontAwesome name="paper-plane" size={24} color="#0B6E4F" />
                </TouchableOpacity>
            </View>

            {
                problem.comments.map((comment: { owner: string | undefined, text: string, role: string | undefined, image: string }, index) => {
                    return (
                        <View key={index + String(comment.owner)} style={styles.headerComments}>
                            <View style={styles.photoContaner}>
                                {
                                    comment.image !== '' && 
                                    <Image
                                        style={styles.photo}
                                        source={{
                                            uri: comment.image
                                    }}
                                />
                                }
                            </View>
                            <View>
                                <Text style={styles.perfilText}>{comment.role}</Text>
                                <Text style={styles.perfilDescription}>
                                    {comment.text}
                                </Text>
                            </View>
                        </View>
                    );
                })
            }
        </ScrollView>
    );
};

export default DetailComplaints;
