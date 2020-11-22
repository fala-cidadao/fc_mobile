import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';

import styles from './styles';

const SelectMap: React.FC = () => {
    const navigation = useNavigation();

    function handleNextStep() {
        navigation.navigate('RegisterComplaints');
    }

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: -27.2092052,
                    longitude: -49.6401092,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
                style={styles.mapStyle}
            >
                <Marker coordinate={{ latitude: -27.2092052, longitude: -49.6401092 }} />
            </MapView>

            <View style={styles.header}>
                <Text style={styles.headerText}>Marque a localização do problema!</Text>
            </View>

            <RectButton style={styles.nextButton} onPress={handleNextStep}>
                <Text style={styles.nextButtonText}>Próximo</Text>
            </RectButton>
        </View>
    );
};

export default SelectMap;
