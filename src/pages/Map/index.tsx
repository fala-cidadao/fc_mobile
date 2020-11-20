import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Foundation, Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from '@react-navigation/native';
import { FAB, Portal, Provider } from 'react-native-paper';


const Map: React.FC = () => {
    const navigation = useNavigation();
    const [openFilter, setOpenFilter] = useState(false);

    const options = ['Segurança', 'Energia e Iluminação', 'Educação', 'Coleta de Lixo',
        'Saúde', 'Infraestrutura e Mobilidade', 'Saneamento Básico e Fornecimento de água', 'Outro'];

    function handleNavigateToRegisterComplaints() {
        navigation.navigate('RegisterComplaints');
    }

    function handleStateChange(state: { open: boolean }) {
        setOpenFilter(state.open);
    }

    function search(area: String) {
        // TODO REALIZAR A BUSCA
    }

    return (
        <Provider>
            <Portal>
                <View style={styles.container}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{
                            latitude: -7.2539795,
                            longitude: -35.8873468,
                            latitudeDelta: 0.008,
                            longitudeDelta: 0.008,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: -7.2539795,
                                longitude: -35.8873468,
                            }}
                        >
                            <Foundation name="marker" size={70} color="#000000" />

                        </Marker>
                    </MapView>
                    <View style={styles.topBar}>
                        <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Feather name="menu" size={48} color="black" />
                        </TouchableOpacity>
                    </View>
                    <FAB.Group
                        open={openFilter}
                        icon={openFilter ? 'close' : 'filter-outline'}
                        actions={options.map(o => {
                            return {
                                icon: 'star',
                                label: o,
                                onPress: () => search(o)
                            };
                        })}
                        visible
                        fabStyle={styles.buttonFilter}
                        onStateChange={handleStateChange}
                        theme={{ colors: { accent: '#0B6E4F' } }}
                    />

                    <FAB
                        icon="plus"
                        style={styles.buttonPlus}
                        disabled={openFilter}
                        color={openFilter ? '#CCC' : "#FFF"}
                        onPress={handleNavigateToRegisterComplaints}
                    />
                </View>
            </Portal>
        </Provider>
    );
};

export default Map;

const styles = StyleSheet.create({
    topBar: {
        position: 'absolute',
        left: -90,
        bottom: 0,
        top: '5%',

        flexDirection: 'row',
    },
    buttonMenu: {
        width: 56,
        height: 56,
        left: '15%',
    },
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    buttonFilter: {
        width: 56,
        height: 57,
        backgroundColor: '#0B6E4F',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonPlus: {
        width: 56,
        height: 57,
        left: '5%',
        bottom: '9%',
        backgroundColor: '#0B6E4F',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
