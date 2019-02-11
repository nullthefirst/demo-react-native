import React, { Component } from 'react';
import { Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
  onPressButton() {
    Alert.alert('You tapped the button!');
  }

  onLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }

  render() {
    return(
      <View style={ styles.container }>
        <TouchableHighlight
          onPress={ this.onPressButton }
          underlayColor="white">
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity
          onPress={ this.onPressButton }>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <TouchableNativeFeedback
          onPress={ this.onPressButton }
          background={ Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : '' }>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 20,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196f3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
