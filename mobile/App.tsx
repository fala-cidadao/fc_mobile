import React from 'react';
import { StatusBar} from 'react-native';

import Initiaton from './src/pages/Initiation';


export default function App() {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
            <Initiaton />
        </>
    );
}

