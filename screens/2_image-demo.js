import React, { Component } from 'react';
import { Image } from 'react-native';

export default class ImageDemo extends Component {
  render() {
    let pic = {
      uri: 'https://res.cloudinary.com/poetrique/image/upload/v1549321249/nullthefirst/ninte-matrix.png'
    };
    return(
      <Image source={pic} style={{width: 100, height: 100}}/>
    );
  }
}
