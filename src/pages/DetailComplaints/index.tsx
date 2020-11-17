import React from 'react';
import { Image, View, ScrollView, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome, AntDesign, Entypo, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

const DetailComplaints = () => {
    const navigation = useNavigation();

    function handleNavigateToBack(){
        navigation.goBack();
    };
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: 24, paddingBottom: 24 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleNavigateToBack}>
                        <AntDesign name="left" size={40} color="#000000"
                        style={{marginLeft: -10, marginRight: '5%'}}/>
                </TouchableOpacity>
                <Text style={styles.title}>Buracão perto do partage shopping </Text>
            </View>
            <View style={styles.imagesContainer}>
                <ScrollView horizontal pagingEnabled>
                    <Image style={styles.image} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRJOuxqRtTw-P-FdBfVDP4ffW2asTNTMeHkA&usqp=CAU' }} />
                    <Image style={styles.image} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJSzA0wYyytQQeBHehcQzX7Q28raw07Za-g&usqp=CAU' }} />
                    <Image style={styles.image} source={{ uri: 'https://amazoniasemfronteiras.com/wp-content/uploads/2017/12/Cratera-na-rua-Par%C3%A1.jpg' }} />
                </ScrollView>
            </View>
    
            <View style={styles.detailsContainer}>
                <Text style={styles.description}>O problema deve ter uma descrição concisa dos fatos que precisam ser abordados. Além disso, deve responder aos cinco Ws da metodologia 5W2H: Quem, Onde, O quê, Quando e Por quê. </Text>
                
                <View style={styles.locationContainer}>
                    <Entypo name="location" size={24} color="#0B6E4F" />
                    <Text style={styles.locationText}>Localização</Text>
                </View>
                <Text style={styles.adressText}>Av. Pref. Severino Bezerra Cabral, 1050 - Catolé, Campina Grande - PB, 58408-000</Text>
            </View>
          
            <View style={styles.separator} />
    
            <Text style={styles.titleImage}>Imagens adicionadas pelo responsável:</Text>

            <View style={styles.imagesContainerRes}>
                <ScrollView horizontal pagingEnabled>
                    <Image style={styles.imageRes} source={{ uri: 'https://lh3.googleusercontent.com/proxy/KYtLH3Ad8kTdZ705xA4TareQZsods72lHdzGhF6SREuj_no8DwnmXSqh8eTXFOC9qoj8D0wvVYTgV38rguwyQPiCk8elhYi3TH8zrcbTAA3xyhW3eTNeO3egIcq0u6QLKm9aqKdCJ0JJtkrvzY58toRwAGeNall1pOO1oBGlYTdRThk1OwPqLFePZA' }} />
                    <Image style={styles.imageRes} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDp6Ngz9FoKOI0gZmIYvFM9tF4SDwXnMs8YA&usqp=CAU' }} />

                </ScrollView>
            </View>
            
    
            <View style={styles.classificationContainer}>
                <View style={styles.button}>
                    <FontAwesome name="check" size={45} color="#ffffff" />
                </View>
                <View style={styles.button}>
                    <Octicons name="plus" size={45} color="#ffffff" />
                </View>
                <View style={styles.button}>
                    <AntDesign name="close" size={50} color="#ffffff" />
                </View>
                
            </View>
    
          
        </ScrollView>
      )
    }
  
export default DetailComplaints;
//		Roboto_400Regular,
// Roboto_500Medium,
// Ubuntu_700Bold

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
    
        paddingLeft: 24, 
        paddingRight: 24

        
    },
    title: {
        marginLeft: 10,
        color: '#000000',
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
    },






    imagesContainer: {
        marginTop: 15,
        height: 240,
    },
  
    image: {
        width: Dimensions.get('window').width,
        height: 240,
        resizeMode: 'cover',
    },
    
    detailsContainer: {
      paddingRight: 15,
      paddingLeft: 18,
    },
 
    description: {
      fontFamily: 'Roboto_400Regular',
      color: '#000000',
      lineHeight: 20,
      marginTop: 10
      
    },

    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
  
    locationText: {
        marginLeft: 10,
        color: '#0B6E4F',
        fontFamily: 'Roboto_500Medium',
    },

    adressText: {
        fontFamily: 'Roboto_400Regular',
        color: '#000000',
        lineHeight: 20,
        marginTop: 5,
    },
    








    separator: {
        height: 0.8,
        width: '100%',
        backgroundColor: '#D3E2E6',
        marginVertical: 40,
    },









    titleImage: {
        marginTop: -20,
        color: '#000000',
        fontSize: 18,
        fontFamily: 'Roboto_500Medium',
        paddingRight: 15,
        paddingLeft: 15,
    },

    imagesContainerRes: {
        marginTop: 15,
        height: 190,
    },
  
    imageRes: {
        width: Dimensions.get('window').width,
        height: 190,
        resizeMode: 'cover',
    },

    



    classificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    
        paddingLeft: 24, 
        paddingRight: 24

    },

    button: {
        marginTop: 20,
        marginBottom: 20,

        width: 56,
        height: 57,
        backgroundColor: 'black',
        marginLeft: 20,
        marginRight: 20,
        
       
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

  })