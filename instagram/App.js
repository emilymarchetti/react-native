import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons, Foundation, AntDesign } from '@expo/vector-icons';

var arrFotos = [0, 1, 2, 3, 4, 5, 6]

export default class App extends React.Component {
  render() {
    return (
      <View style={{
          backgroundColor: 'gray',
          flex: 1,
        }}>

        <View key="topo" style={{
            backgroundColor: 'white',
            height: 70,
        }}>
        <Image resizeMode="contain" 
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png'
        }}
        style={{
          height: 50,
          marginTop: 22,
        }}/>
        </View>

        <ScrollView key="conteudo" style={{
              backgroundColor: '#e4e4e4',
              flex: 1,
        }}>

        {arrFotos.map(item => (<Image
        style={{
            marginVertical: 20,
            width: 370,
            height: 200
          }}
        source={{
          uri: 'https://static.rentcars.com/imagens/modules/localidade/about/983-desktop-location-description.png'
        }} />))}

        </ScrollView>

        <View key="menu" style={{
              backgroundColor: 'white',
              height: 45,
              alignItems: "center",
              justifyContent: 'space-around',
              flexDirection: 'row'
        }}>
        <Foundation name="home" size={25} color="black"/>
        <AntDesign name="search1" size={25} color="black"/>
        <AntDesign name="plussquareo" size={25} color="black"/>
        <AntDesign name="hearto" size={25} color="black"/>
        <AntDesign name="user" size={25} color="black"/>
        
        </View>
      </View>
    );
  }
}
