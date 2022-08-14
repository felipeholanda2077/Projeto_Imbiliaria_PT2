import React, { Component } from 'react';
import { DevSettings } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Button,
  TextInput,
} from 'react-native';

import { NativeBaseProvider, Box } from 'native-base';
import Database from './src/Database/Database';
import Lista from './src/Model/Lista';

import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';
import Listagem from './src/pages/Listagem';
import Camera from './src/pages/Camera';

import ListaCasa from './src/Components/ListaCasa';


import { RNCamera } from 'react-native-camera';

ListarBanco = () => {
  const banco = new Database();
  banco.Listar().then(lista => { this.setState({ listaImoveis: lista }) })
}

CadastrarBanco = (imobiliaria, imagem, preco) => {
  const banco = new Database();
  const Imovel = new Imovel(imobiliaria, imagem, preco)
  banco.Inserir(Imovel);
}

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Listagem" component={Listagem} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Camera" component={Camera} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

