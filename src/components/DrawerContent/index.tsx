import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import styles from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DrawerContent: React.FC = (props: any) => (
    <DrawerContentScrollView {...props}>
        <SafeAreaView>
            <View style={styles.profile}>
                <FontAwesome name="user-circle" size={80} color="green" />
            </View>
            <DrawerItemList {...props} />
        </SafeAreaView>
    </DrawerContentScrollView>
);

export default DrawerContent;
