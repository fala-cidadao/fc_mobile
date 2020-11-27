import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { MapEvent, Marker } from 'react-native-maps';

import styles from './styles';

import mapMarkerImg from '../../assets/PNG/map_marker.png';

const SelectMap: React.FC = () => {
    const [location, setLocation] = useState<[number, number]>([0, 0]);
    const navigation = useNavigation();

    function handleNextStep() {
        navigation.navigate('RegisterComplaints', { location });
    };

    function handleSelectMapPosition(event: MapEvent) {
        const loc = event.nativeEvent.coordinate;
        setLocation([loc.latitude, loc.longitude]);
    }

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: -7.2399455,
                    longitude: -35.9130652,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
                style={styles.mapStyle}
                onPress={handleSelectMapPosition}
            >
                {
                   location[0] !== 0 &&
                   <Marker
                        icon={mapMarkerImg}
                        coordinate={{ latitude: location[0], longitude: location[1] }}
                    />
                }
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
