import React from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const DrawerContent: React.FC = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView>
        <View>
          <FontAwesome name="user-circle" size={80} color="green" />
        </View>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

export default DrawerContent;