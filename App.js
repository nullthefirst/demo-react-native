import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  onPressButton = () => {Alert.alert('You tapped the button!')};

  render() {
    return(
      <View style={ styles.container }>
        <View style={ styles.buttonContainer }>
          <Button
            onPress={ this.onPressButton }
            title="PRESS ME"
          />
        </View>
        <View style={ styles.buttonContainer }>
          <Button
            onPress={ this.onPressButton }
            title="PRESS ME"
            color="#841584"
          />
        </View>
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
