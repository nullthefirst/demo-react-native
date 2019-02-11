import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  onPressButton = () => {Alert.alert('You tapped the button!')};

  render() {
    return(
      <View>
        <Text style={{ padding: 20 }}>Hello World</Text>
      </View>
    );
  }
}
