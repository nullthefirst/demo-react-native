import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return(
      <View>
        <Text style={styles.greeting}>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  greeting: {
    margin: 5,
    color: "#212121"
  }
})
