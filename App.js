import React, {PureComponent} from 'react';
import {DevSettings} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
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
import Lista from './src/Models/Lista';

import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';
import Listagem from './src/pages/Listagem';
import Camera from './src/pages/Camera';

import ListaCasa from './src/Components/ListaCasa';
import Lista from './src/Model/Lista';

import {RNCamera} from 'react-native-camera';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaVeiculos: []
    }
    this.ListarBanco();
    //this.CadastrarBanco('Batmóvel', 'HotWheels', 2005, 'https://cf.shopee.com.br/file/dd9bfd306cbaa926a7b23f6d568cd103')
  }
  
 ListarBanco = () => {
    const banco = new Database();
    banco.Listar().then( lista => { this.setState({ listaImoveis: lista }) } )
  }

  CadastrarBanco = (imobiliaria, imagem, preco) => {
    const banco = new Database();
    const veiculo = new Imovel(imobiliaria, imagem, preco)
    banco.Inserir(imovel);
  }

const Stack = createStackNavigator();

function App() {
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

export default App;
