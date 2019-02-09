import React, { Component } from 'react';
import { Text, View } from 'react-native';

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
