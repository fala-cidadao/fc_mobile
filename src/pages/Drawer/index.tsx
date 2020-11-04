import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import Map from '../Map';
import ComplaintClose from '../ComplaintsClose';
import MyComplaint from '../ComplaintsMy';
import Logon from '../Logon';
import EditPerfil from '../EditPerfil';
import DrawerContent from '../../components/DrawerContent';



const DrawerNavigator = createDrawerNavigator();

const Drawer: React.FC = () => {
  return (
    <DrawerNavigator.Navigator initialRouteName="Map" drawerContent={(props) => <DrawerContent {...props} />}>
        
        <DrawerNavigator.Screen 
            name="Map" 
            component={Map}
            options={{
                drawerLabel: "Olá Cidadão!",
                drawerIcon: ({color, size}) => <FontAwesome name="map-marker" size={size} color={color} />,
            }} 
        />
        <DrawerNavigator.Screen
            name="Reclamações próximas"
            component={ComplaintClose} 
        />
        <DrawerNavigator.Screen 
            name="Minhas reclamações"
            component={MyComplaint} 
        />
        <DrawerNavigator.Screen
            
             
            name="Editar Perfil"
            component={EditPerfil} 
        />
        <DrawerNavigator.Screen
        
            name="Sair"
            component={Logon}
            options={{

                
                
                drawerLabel: "Sair",
                drawerIcon: ({}) => <MaterialCommunityIcons name="logout" size={24} color="black" />,
            }}
           
        />
    </DrawerNavigator.Navigator>
  );
}

export default Drawer;

const styles = StyleSheet.create({
    description:{
        marginBottom: 10

    }
   
  

   
});

