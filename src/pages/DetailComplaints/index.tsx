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
                        source={{ uri: 'data:image/jpeg;base64,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' }} />
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