import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import Map from '../Map';
import MyComplaints from '../MyComplaints';
import Logon from '../Logon';
import EditPerfil from '../EditPerfil';
import DrawerContent from '../../components/DrawerContent';
import { color } from 'react-native-reanimated';
import { Roboto_900Black } from '@expo-google-fonts/roboto';


const DrawerNavigator = createDrawerNavigator();

const Drawer: React.FC = () => {
    return (
  
        <DrawerNavigator.Navigator initialRouteName="Map" drawerContent={(props) => <DrawerContent {...props} />}>

                <DrawerNavigator.Screen 
                    name="Map" 
                    component={Map}
                    options={{
                        drawerLabel: "Reclamações próximas",
                        drawerIcon: ({color, size}) => <FontAwesome name="map-marker" size={size} color={color} style={{marginLeft: 10}}/>,
                    }} 
                />
              
                <DrawerNavigator.Screen 
                    name="MyComplaints"
                    component={MyComplaints}
                    options={{
                        drawerLabel: "Minhas reclamações",
                        drawerIcon: ({color, size}) => <FontAwesome name="list-ul" size={size} color={color} style={{marginLeft: 10}}/>,
                    }}
                />
                <DrawerNavigator.Screen
                    name="EditPerfil"
                    component={EditPerfil} 
                    options={{
                        drawerLabel: "Editar Perfil",
                        drawerIcon: ({color, size}) => <Feather name="edit" size={size} color={color} style={{marginLeft: 10}}/>,
                    }}
                />

            <DrawerNavigator.Screen

                name="Sair"
                component={Logon}
                options={{
                    drawerLabel: "Sair",
                    drawerIcon: ({color, size}) => <MaterialCommunityIcons name="logout" size={size} color={color}  style={{marginLeft: 10}}/>,
                }}
            
            />
        </DrawerNavigator.Navigator>
    );
}

export default Drawer;

const styles = StyleSheet.create({
  
});
