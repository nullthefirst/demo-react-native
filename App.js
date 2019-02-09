import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return(
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'powderblue' }} />
        <View style={{ backgroundColor: 'skyblue' }} />
        <View style={{ backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}
