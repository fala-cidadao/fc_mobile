import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';

import Map from '../Map';
import DrawerContent from '../../components/DrawerContent';

const DrawerNavigator = createDrawerNavigator();

const Drawer: React.FC = () => {
  return (
    <DrawerNavigator.Navigator initialRouteName="Map" drawerContent={(props) => <DrawerContent {...props} />}>
      <DrawerNavigator.Screen 
        name="Map" 
        component={Map}
        options={{
          drawerLabel: "Mapa",
          drawerIcon: ({color, size}) => <FontAwesome name="map-marker" size={size} color={color} />
        }} 
      />
    </DrawerNavigator.Navigator>
  );
}

export default Drawer;