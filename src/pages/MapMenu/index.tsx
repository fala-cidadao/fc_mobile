import React from 'react';
import { View, StyleSheet, TouchableOpacity} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Foundation, Feather, Entypo } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native"; 
import { DrawerActions } from '@react-navigation/native';


const MapMenu: React.FC = () => {
    const navigation = useNavigation();

    return(
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
                    <Foundation name="marker" size={70} color="#000000"/>

                </Marker>
            </MapView>
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Feather name="menu" size={48} color="black"/>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonFilter} onPress={()=>{}}>
                    <Feather name="filter" size={37} color="#FFFFFF"/>

                </TouchableOpacity>
                    
                <TouchableOpacity style={styles.buttonPlus} onPress={()=>{}}>
                    <Entypo name="plus" size={45} color="#FFFFFF"/>

                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MapMenu; 

const styles = StyleSheet.create({
    topBar:{
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
    container:{
        flex:1,
    
    },
    map:{
        width: '100%',
        height: '100%',
    },
    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 20,
        height: 56,
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    buttonFilter: {
        width: 56,
        height: 57,
        right: '15%',
        
    
        backgroundColor: '#0B6E4F',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonPlus: {
        width: 56,
        height: 57,
        left: '15%',
       
        
        backgroundColor: '#0B6E4F',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
