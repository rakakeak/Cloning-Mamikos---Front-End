import React, { Component } from 'react';
import { View } from 'react-native';

export default class Circle extends Component {
  render() {
    return(
      <View style={{
        width: this.props.width,
        height: this.props.height,
        backgroundColor: this.props.bgColor,
        position: this.props.position,
        top: this.props.top,
        bottom: this.props.bottom,
        left: this.props.left,
        right: this.props.right,
        borderTopLeftRadius: this.props.topLeftRad,
        borderTopRightRadius: this.props.topRightRad,
        borderBottomLeftRadius: this.props.bottomLeftRad,
        borderBottomRightRadius: this.props.bottomRightRad
      }} />
    )
  }
}
