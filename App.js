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
      <View>
        <Text></Text>
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
    width: 260
  }
});
