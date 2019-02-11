import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, Text } from 'react-native';

export default class ScrollingThings extends Component {
  render() {
    return(
      <ScrollView>
        <Text style={ styles.words }>What do you think when you look at me?</Text>
        <Image style={ styles.pics }
          source={{ uri: "https://res.cloudinary.com/poetrique/image/upload/v1549321249/nullthefirst/ninte-matrix.png" }} />
        <Image style={ styles.pics }
            source={{ uri: "https://res.cloudinary.com/poetrique/image/upload/v1549321249/nullthefirst/ninte-matrix.png" }} />
        <Image style={ styles.pics }
            source={{ uri: "https://res.cloudinary.com/poetrique/image/upload/v1549321249/nullthefirst/ninte-matrix.png" }} />
        <Image style={ styles.pics }
            source={{ uri: "https://res.cloudinary.com/poetrique/image/upload/v1549321249/nullthefirst/ninte-matrix.png" }} />
        <Image style={ styles.pics }
            source={{ uri: "https://res.cloudinary.com/poetrique/image/upload/v1549321249/nullthefirst/ninte-matrix.png" }} />
        <Text style={ styles.words } >I see a mixture of Majesty, and Destiny</Text>
        <Image style={ styles.pics }
          source={{ uri: "https://res.cloudinary.com/poetrique/image/upload/v1549321249/nullthefirst/ninte-matrix.png" }} />
        <Image style={ styles.pics }
            source={{ uri: "https://res.cloudinary.com/poetrique/image/upload/v1549321249/nullthefirst/ninte-matrix.png" }} />
        <Image style={ styles.pics }
            source={{ uri: "https://res.cloudinary.com/poetrique/image/upload/v1549321249/nullthefirst/ninte-matrix.png" }} />
        <Image style={ styles.pics }
            source={{ uri: "https://res.cloudinary.com/poetrique/image/upload/v1549321249/nullthefirst/ninte-matrix.png" }} />
        <Image style={ styles.pics }
            source={{ uri: "https://res.cloudinary.com/poetrique/image/upload/v1549321249/nullthefirst/ninte-matrix.png" }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  words: {
    fontSize: 96
  },
  pics: {
    width: 128,
    height: 128
  }
});
