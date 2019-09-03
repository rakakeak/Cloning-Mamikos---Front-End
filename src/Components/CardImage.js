import React, { Component } from "react";
import { Image } from "react-native";
import { Text, Card } from "native-base";

export default class CardImage extends Component {
  
  render() {
    return(
      <Card style={{width: this.props.width, maxWidth: this.props.width, height: this.props.height, elevation: 0, borderRadius: 4}}>
        <Text style={{position: "absolute", zIndex: 2, color: "white", bottom: 8, left: 10,textShadowOffset: {
          width: 0, height: 0
        }, textShadowColor: "black", textShadowRadius: 12, shadowColor: "green", fontSize: 14}}>{this.props.city}</Text>
        <Image style={{maxWidth: "100%", height: "100%", borderRadius: 4, resizeMode: this.props.resizeMode }} source={this.props.imageUri}/>
      </Card>
    );
  }
}