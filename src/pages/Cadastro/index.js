import React, {useState} from 'react';
import {DevSettings} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function Cadastro({navigation}) {
  const [imobiliaria, setImobiliaria] = useState('');
  const [preco, setPreco] = useState('');

  function handleSignIn() {
    if (imobiliaria === '' || preco === '') {
      alert('Preencha todos os campos');
      return;
    }

    const data = {
      imobiliaria,
      preco,
    };

    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre seu Imovel</Text>

      <TextInput
        style={styles.input}
        onChangeText={setImobiliaria}
        value={imobiliaria}
        placeholder="Nome da Imobiliária"
      />

      <Button
        title="Tirar Foto"
        onPress={() => {
          navigation.navigate('Camera');
        }}
      />

      <TextInput
        style={styles.input}
        onChangeText={setPreco}
        value={preco}
        placeholder="Preço do Imovel"
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Cadastrar Casa</Text>
      </TouchableOpacity>
    </View>
  );
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

export default Cadastro;
