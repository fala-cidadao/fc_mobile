import React from 'react';
import { Image, View, ScrollView, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome, AntDesign, Entypo, Octicons, Fontisto } from '@expo/vector-icons';
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
                    <Image style={styles.image} source={{ uri: 'https://amazoniasemfronteiras.com/wp-content/uploads/2017/12/Cratera-na-rua-Par%C3%A1.jpg' }} />
                    <Image style={styles.image} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRJOuxqRtTw-P-FdBfVDP4ffW2asTNTMeHkA&usqp=CAU' }} />
                    <Image style={styles.image} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJSzA0wYyytQQeBHehcQzX7Q28raw07Za-g&usqp=CAU' }} />
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
    
            <Text style={styles.titleImageRes}>Imagens adicionadas pelo responsável:</Text>

            <View style={styles.imagesContainerRes}>
                <ScrollView horizontal pagingEnabled>
                    <Image style={styles.imageRes} source={{ uri: 'https://lh3.googleusercontent.com/proxy/KYtLH3Ad8kTdZ705xA4TareQZsods72lHdzGhF6SREuj_no8DwnmXSqh8eTXFOC9qoj8D0wvVYTgV38rguwyQPiCk8elhYi3TH8zrcbTAA3xyhW3eTNeO3egIcq0u6QLKm9aqKdCJ0JJtkrvzY58toRwAGeNall1pOO1oBGlYTdRThk1OwPqLFePZA' }} />
                    <Image style={styles.imageRes} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDp6Ngz9FoKOI0gZmIYvFM9tF4SDwXnMs8YA&usqp=CAU' }} />

                </ScrollView>
            </View>
            
    
            <View style={styles.classificationContainer}>
                <TouchableOpacity onPress={() => {}} style={[styles.button, {backgroundColor: "#0B6E4F"}]}>
                    <FontAwesome name="check" size={50} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={[styles.button, {backgroundColor: "#FFC600"}]}>
                    <Octicons name="plus" size={50} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={[styles.button, {backgroundColor: "#DE5F61"}]}>
                    <AntDesign name="close" size={50} color="#ffffff" />
                </TouchableOpacity>
            </View>

            <View style={styles.commentContainer}>
                <TextInput
                    placeholder="Insira um novo comentário             "
                    placeholderTextColor='#8DA1B9'
                    style={styles.input}
                />
                <TouchableOpacity onPress={() => {}} style={styles.iconPlane}>
                    <FontAwesome name="paper-plane" size={24} color="#0B6E4F"/>
                </TouchableOpacity>
            </View>

            <View style={styles.headerComments}>
                <View style={styles.photoContaner}>
                    <Image style={styles.photo} source={{ uri: 'https://i.pinimg.com/236x/09/cf/17/09cf1760899fc0372c67adfe4e66c446.jpg' }} />
                </View>
                <View>
                    <Text style={styles.perfilText}> 
                        Lukas da Silva
                    </Text>
                    <Text style={styles.perfilDescription}> 
                        Olha, essa rua tá difícil de andar até a pé... 
                        Já vi até acidente de bicicleta e esse senhor 
                        prefeito não cuida em resolver isso... 
                        Já perdi 3 pneus do meu carro nessa danada dessa rua desgraçada. 
                        Espero que venha fazer campanha eleitoral aqui e estoure um pneu 
                        para entender o que sofremos
                    </Text>
                </View>
            </View>
            
            <View style={styles.headerComments}>
                <View style={styles.photoContaner}>
                    <Image 
                        style={styles.photo} 
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGRvGr9Mo5xYIhGy548QvQdhQu6YJNlgjUw&usqp=CAU' }} />
                </View>
                <View>
                    <Text style={styles.perfilText}> 
                        Gokuzinho da Silva
                    </Text>
                    <Text style={styles.perfilDescription}> 
                        Epopeia é uma narrativa 
                        que apresenta com maior qualidade os fatos originalmente 
                        contados em versos. Os elementos dessa narrativa 
                        apresentam estas características: personagens, 
                        tempo, ação, espaço. Também pode conter factos 
                        heroicos muitas vezes transcorridos durante guerras.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )}
  
export default DetailComplaints;

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

    titleImageRes: {
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
        marginTop: 30,
        marginBottom: 30,
        width: 56,
        height: 57,
        marginLeft: 27,
        marginRight: 27,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15, 
        paddingRight: 15
    },

    input: {
        backgroundColor: '#E9EFF5',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
        fontFamily: 'Roboto_400Regular',
    
    },

    iconPlane: { 
        backgroundColor: '#E9EFF5',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
    },

    headerComments: {
        flexDirection: 'row',
        paddingLeft: 24, 
        paddingRight: 24,
        marginBottom: 24,
        
    },

    photoContaner: {
        borderRadius: 70,
        height: 40,
        width: 40,
        right: 1
    },

    photo: {
        height: 40,
        borderRadius: 70,
        resizeMode: 'cover',
    },

    perfilText: {
        marginTop: 2,
        marginLeft: 10,
        fontSize: 15,
        marginBottom: 5,
        paddingRight: 24,
        color: '#0B6E4F',
        fontFamily: 'Roboto_500Medium',
    },

    perfilDescription: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 15,
        paddingRight: 24,
        marginLeft: 10
    }


})