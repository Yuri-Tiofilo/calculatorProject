import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

export default function Main() {
  return (
    <View>
      <Text>App Carlão</Text>

      <TextInput placeholder="Digite a quantidade de tabelas"/>
      <TouchableOpacity>
        <Text>PROXIMO</Text>
      </TouchableOpacity>
    </View>
  );

}
