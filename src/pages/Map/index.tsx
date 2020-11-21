import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Foundation, Feather } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { FAB, Portal, Provider } from 'react-native-paper';

import styles from './styles';

const Map: React.FC = () => {
  const navigation = useNavigation();
  const [openFilter, setOpenFilter] = useState(false);

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

  function handleNavigateToRegisterComplaints() {
    navigation.navigate('RegisterComplaints');
  }

  function handleStateChange(state: { open: boolean }) {
    setOpenFilter(state.open);
  }

  function search(area: string) {
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
