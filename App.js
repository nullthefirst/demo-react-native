import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  render() {
    return(
      <View style={{ padding: 40 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
        />
      </View>
    );
  }
}
