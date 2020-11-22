import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import Map from '../Map';
import MyComplaints from '../MyComplaints';
import Logon from '../Logon';
import EditPerfil from '../EditPerfil';
import DrawerContent from '../../components/DrawerContent';

const DrawerNavigator = createDrawerNavigator();

const Drawer: React.FC = () => (
    <DrawerNavigator.Navigator
        initialRouteName="Map"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        drawerContent={(props: any) => <DrawerContent {...props} />}
    >
        <DrawerNavigator.Screen
            name="Map"
            component={Map}
            options={{
                drawerLabel: 'Reclamações próximas',
                drawerIcon: ({ color, size }) => (
                    <FontAwesome
                        name="map-marker"
                        size={size}
                        color={color}
                        style={{ marginLeft: 10 }}
                    />
                ),
            }}
        />

        <DrawerNavigator.Screen
            name="MyComplaints"
            component={MyComplaints}
            options={{
                drawerLabel: 'Minhas reclamações',
                drawerIcon: ({ color, size }) => (
                    <FontAwesome
                        name="list-ul"
                        size={size}
                        color={color}
                        style={{ marginLeft: 10 }}
                    />
                ),
            }}
        />
        <DrawerNavigator.Screen
            name="EditPerfil"
            component={EditPerfil}
            options={{
                drawerLabel: 'Editar Perfil',
                drawerIcon: ({ color, size }) => (
                    <Feather name="edit" size={size} color={color} style={{ marginLeft: 10 }} />
                ),
            }}
        />

        <DrawerNavigator.Screen
            name="Sair"
            component={Logon}
            options={{
                drawerLabel: 'Sair',
                drawerIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="logout"
                        size={size}
                        color={color}
                        style={{ marginLeft: 10 }}
                    />
                ),
            }}
        />
    </DrawerNavigator.Navigator>
);

export default Drawer;
