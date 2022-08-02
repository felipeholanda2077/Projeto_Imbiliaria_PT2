import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';

export class ListaCasa extends Component {
  render() {
    return (
      <View>
        <Text> ID: {this.props.id}, </Text>
        <Text> Nome: {this.props.imobiliaria}, </Text>
        <Text> Endereço: {this.props.casa}, </Text>
        <Text> Cidade: {this.props.preco}, </Text>

        <Image style={estilo.casa} source={{uri: this.props.casa}} />

        {this.props.preco > 60000 ? (
          <Text style={estilo.vendido}>VENDIDO</Text>
        ) : (
          <Text style={estilo.disponivel}>DISPONIVEL</Text>
        )}
        <View style={estilo.botao}>
          <Button
            title="Comprar"
            onPress={() => {
              this.props.deletar(this.props.id);
            }}
          />
        </View>
      </View>
    );
  }
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
  },
  casa: {
    width: 50,
    height: 50,
  },
});

export default ListaCasa;
