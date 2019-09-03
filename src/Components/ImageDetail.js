import React, { Component } from 'react';
import { Image, ScrollView, Dimensions } from 'react-native'

import config from '../config';

const { width } = Dimensions.get('window');

export default class ImageDetail extends Component {
  render() {
    
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true} // animates ScrollView to nearest multiple of it's own width
        showsHorizontalScrollIndicator={false}
      >
        {/* <Image style={{ width, height: 240 }} source={{uri: cover}} /> */}
        {this.props.imageUri.map((source, i) => { // for every object in the photos array...
          return ( // ... we will return a square Image with the corresponding object as the source
            <Image
              key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
              style={{ width, height: 240 }}
              source={{uri: `${config.IMAGE_URL}/kost/${source}`}}
            />
          );
        })}
      </ScrollView>
    );
  }
}