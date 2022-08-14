import React, { Component } from 'react';
import { DevSettings } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Database from '../../Database/Database';
import Lista from '../../Model/Lista';

import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imobiliaria: 'Em Branco',
      imagem: '',
      preco: '0',
    };
  }


  CadastrarBanco = (imobiliaria, imagem, preco) => {
    const banco = new Database();
    const imovel = new Lista(null, imobiliaria, imagem, preco)
    banco.Inserir(imovel);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cadastre seu Imovel</Text>

        <TextInput
          style={styles.input}
          onChangeText={(valor) => { this.setState({ imobiliaria: valor }) }}
          placeholder="Nome da Imobiliária"
        />

        <Button
          title="Tirar Foto"
          onPress={() => {
            navigation.navigate('Camera');
          }}
          onChangeText={(valor) => { this.setState({ imagem: valor }) }}
        />

        <TextInput
          style={styles.input}
          onChangeText={(valor) => { this.setState({ preco: valor }) }}
          placeholder="Preço do Imovel"
        />

        <TouchableOpacity style={styles.button} onPress={() => this.CadastrarBanco(this.state.imobiliaria, this.state.imagem, this.state.preco)}>
          <Text style={styles.buttonText}>Cadastrar Casa</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4FF',
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 30,
    marginBottom: 34,
    color: '#121212',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    marginBottom: 8,
    borderRadius: 4,
    margin: 8,
    color: '#121212',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#45D800',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

