import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return(
      <View style={{alignItems: 'center'}}>
        <Text>Hello from { this.props.name }!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return(
      <View style={{alignItems: 'center'}}>
        <Greeting name='Usheninte' />
        <Greeting name='Joshua' />
        <Greeting name='Dangana' />
      </View>
    );
  }
}
