import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Alert, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Foundation, Feather } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { FAB, Portal, Provider } from 'react-native-paper';
import * as Location from 'expo-location';

import api from '../../services/api';
import styles from './styles';

interface IProblem {
    title: string;
    createdAt: string;
    _id: string;
    location: ILocation;
    category: string;
    userImages: string[];
}

interface ILocation {
    latitude: number;
    longitude: number;
}

const Map: React.FC = () => {
    const navigation = useNavigation();
    const [openFilter, setOpenFilter] = useState(false);
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
    const [problems, setProblem] = useState<IProblem[]>([]);
    const [filteredProblems, setFilteredProblems] = useState<IProblem[]>([]);

    const filtros: { [label: string]: string } = {
        safety: 'Segurança',
        energy: 'Energia e Iluminação',
        education: 'Educação',
        garbage: 'Coleta de Lixo',
        health: 'Saúde',
        infrastruture: 'Infraestrutura e Mobilidade',
        sewer: 'Saneamento Básico e Fornecimento de água',
        other: 'Outro',
    };

    const options = [
        'Segurança',
        'Energia e Iluminação',
        'Educação',
        'Coleta de Lixo',
        'Saúde',
        'Infraestrutura e Mobilidade',
        'Saneamento Básico e Fornecimento de água',
        'Outro',
    ];

    const markerColors: Record<string, string> = {
        safety: '#DE5F61',
        energy: '#171C21',
        education: '#009FB7',
        garbage: '#648DE5',
        health: '#7E1946',
        infraestruture: '#FCD757',
        sewer: '#0C6291',
        other: '#00A878',
    };

    useEffect(() => {
        async function loadPosition() {
            const { status } = await Location.requestPermissionsAsync();

            if (status !== 'granted') {
                Alert.alert('Oooops....', 'Precisamos de sua permissão para obter a localização');
                return;
            }

            const location = await Location.getCurrentPositionAsync();

            const { latitude, longitude } = location.coords;

            setInitialPosition([latitude, longitude]);
        }

        loadPosition();
    }, []);

    useEffect(() => {
        api.get('problem').then((response) => {
            setProblem(response.data);
            setFilteredProblems(response.data);
        });
    }, []);

    function handleNavigateToRegisterComplaints() {
        navigation.navigate('SelectMap');
    }

    function handleNavigateToDetailComplaints(problem: IProblem) {
        navigation.navigate('DetailComplaints', { problem });
    }

    function handleStateChange(state: { open: boolean }) {
        setOpenFilter(state.open);
    }

    function search(area: string) {
        const newProblems = problems.filter((problem) => {
            console.log(problem.category, filtros[problem.category], area);
            console.log(filtros[problem.category] === area);
            return filtros[problem.category] === area;
        });
        setFilteredProblems(newProblems);
    }

    return (
        <Provider>
            <Portal>
                <View style={styles.container}>
                    {initialPosition[0] !== 0 && (
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={styles.map}
                            initialRegion={{
                                latitude: initialPosition[0],
                                longitude: initialPosition[1],
                                latitudeDelta: 0.008,
                                longitudeDelta: 0.008,
                            }}
                        >
                            {filteredProblems.map((problem) => (
                                <Marker
                                    key={String(problem._id)}
                                    coordinate={{
                                        latitude: Number(problem.location.latitude),
                                        longitude: Number(problem.location.longitude),
                                    }}
                                    onPress={() => handleNavigateToDetailComplaints(problem)}
                                >
                                    <View style={styles.mapMarkerContainer}>
                                        <Text
                                            style={[
                                                styles.mapMarkerTitle,
                                                { color: markerColors[problem.category] },
                                            ]}
                                        >
                                            {problem.title}
                                        </Text>
                                        <Foundation
                                            name="marker"
                                            size={70}
                                            color={markerColors[problem.category]}
                                        />
                                    </View>
                                </Marker>
                            ))}
                        </MapView>
                    )}
                    <View style={styles.topBar}>
                        <TouchableOpacity
                            style={styles.buttonMenu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <Feather name="menu" size={48} color="black" />
                        </TouchableOpacity>
                    </View>
                    <FAB.Group
                        open={openFilter}
                        icon={openFilter ? 'close' : 'filter-outline'}
                        actions={options.map((o) => ({
                            icon: 'star',
                            label: o,
                            onPress: () => search(o),
                        }))}
                        visible
                        fabStyle={styles.buttonFilter}
                        onStateChange={handleStateChange}
                        theme={{ colors: { accent: '#0B6E4F' } }}
                    />

                    <FAB
                        icon="plus"
                        style={styles.buttonPlus}
                        disabled={openFilter}
                        color={openFilter ? '#CCC' : '#FFF'}
                        onPress={handleNavigateToRegisterComplaints}
                    />
                </View>
            </Portal>
        </Provider>
    );
};

export default Map;
