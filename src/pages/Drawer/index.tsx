import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Map from '../Map';
import DrawerContent from '../../components/DrawerContent';

const DrawerNavigator = createDrawerNavigator();

const Drawer = (): JSX.Element => {
  return (
    <DrawerNavigator.Navigator initialRouteName="Map" drawerContent={(props) => <DrawerContent {...props} />}>
      <DrawerNavigator.Screen 
        name="Map" 
        component={Map}
        options={{
          drawerLabel: "Mapa"
        }} 
      />
    </DrawerNavigator.Navigator>
  );
}

export default Drawer;