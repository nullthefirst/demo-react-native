import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  onPressButton = () => {Alert.alert('You tapped the button!')};

  render() {
    return(
      <View style={ styles.container }>
        <View style={ styles.buttonContainer }></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20
  }
})
