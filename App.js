import React, { Component } from 'react-native';
import { View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return(
      <View>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        {/* <View style={{ width: , height: , backgroundColor:  }} />
        <View style={{ width: , height: , backgroundColor:  }} /> */}
      </View>
    );
  }
}
