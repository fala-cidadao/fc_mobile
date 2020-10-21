import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Initiation from './pages/Initiation';
import Logon from './pages/Logon';
import Register from './pages/Register';

const appStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <appStack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#ffffff'
                    }   
            }}    
        >
            <appStack.Screen name="Initiation" component={Initiation}/>
            <appStack.Screen name="Logon" component={Logon}/>
            <appStack.Screen name="Register" component={Register}/>
            </appStack.Navigator>

        </NavigationContainer>
    );
}

export default Routes;