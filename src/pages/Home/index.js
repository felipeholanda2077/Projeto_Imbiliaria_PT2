import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

 export function Home({navigation}) {

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <Image source={require('../../assets/Logo.png')} style={estilo.logo} />
      <Text>BEM VINDO A IMOBILIARIA</Text>
      <View style={estilo.botao}>
        <Button
          title="Cadastro"
          onPress={() => {
            navigation.navigate('Cadastro');
          }}
        />
        
      </View>
      <View style={estilo.botao}>
        <Button
          title="Listagem"
          onPress={() => {
            navigation.navigate('Listagem');
          }}
        />
      </View>
    </View>
  );
}


const estilo = StyleSheet.create({
  vendido: {
    color: 'red',
  },
  disponivel: {
    color: 'green',
  },
  botao: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
    
  },
  button: {
    backgroundColor: 'red',
  },
  casa: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 400,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
