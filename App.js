import React, { Component } from 'react';
import { View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return(
      <View>
        <View style={{ backgroundColor: 'powderblue' }} />
        <View style={{ backgroundColor: 'skyblue' }} />
        <View style={{ backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}
