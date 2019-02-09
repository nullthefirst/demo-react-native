import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red'
  }
});

export default class LotsOfStyles extends Component {
  render() {
    return(
      <View>
        <Text styles={{  }}>just Red</Text>
        <Text styles={{  }}>just bigBlue</Text>
        <Text styles={[  ]}>bigBlue, then red</Text>
        <Text styles={[  ]}>red, then bigBlue</Text>
      </View>
    );
  }
}
