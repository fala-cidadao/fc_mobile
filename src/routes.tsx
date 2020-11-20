import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Initiation from './pages/Initiation';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Recovery from './pages/Recovery';
import Drawer from './pages/Drawer';
import MyComplaints from './pages/MyComplaints';
import EditPerfil from './pages/EditPerfil';
import RegisterComplaints from './pages/RegisterComplaints';
import DetailComplaints from './pages/DetailComplaints';

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
                <appStack.Screen name="Recovery" component={Recovery}/> 
                <appStack.Screen name="Drawer" component={Drawer}/> 
                <appStack.Screen name="MyComplaints" component={MyComplaints}/>
                <appStack.Screen name="EditPerfil" component={EditPerfil}/>
                <appStack.Screen name="RegisterComplaints" component={RegisterComplaints}/>
                <appStack.Screen name="DetailComplaints" component={DetailComplaints}/>
            </appStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;