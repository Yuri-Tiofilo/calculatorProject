import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

// import { Container } from './styles';

export default function Main() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>App Carlão</Text>

      <TextInput placeholder="Digite a quantidade de tabelas" style={styles.textInput}/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>PROXIMO</Text>
      </TouchableOpacity>
    </View>
  );

}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor:'#4169e1',
    padding: 20,
  },
  text:{
    fontSize: 19,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#eee',
  },
  textInput: {
    fontSize: 18,
    height: 48,
    padding: 12,
    borderWidth: 1,
    borderColor: '#fffc00',
  },
  button: {
    backgroundColor: '#fffc00',
    height: 48,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: '#000',
  }
});
