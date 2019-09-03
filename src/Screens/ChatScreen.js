import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Chat',
    tabBarIcon: ({tintColor}) => (
      <View>
        <Icon name={tintColor == '#0baa56' ? 'chat-bubble' : 'chat-bubble-outline'} size={18} style={{color: tintColor}} />
      </View>
    )
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <Image style={{flex: 1, resizeMode: 'stretch'}} source={{uri: 'https://storage.googleapis.com/helpdocs-assets/9QvYLMyX1C/articles/pp1dbfyjlj/1519224172266/chat-fragment.png'}} />
      </View>
    );
  }
}