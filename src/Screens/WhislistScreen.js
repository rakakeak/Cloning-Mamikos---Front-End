import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Header, Body, Title, Content, Card, CardItem } from 'native-base';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

export default class WhislistScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <View>
        <Icon name={tintColor == '#0baa56' ? 'favorite' : 'favorite-border'} size={18} style={{color: tintColor}} />
      </View>
    )
  }

  render() {
    return(
      <Container>
        {/* <Header style={{backgroundColor: '#0baa56'}}>
          <Body>
            <Title style={{marginLeft: 16, color: 'white'}}>Whislist</Title>
          </Body>
        </Header> */}
        <TopTab/>
      </Container>
    );
  }
}

class FavoriteScreen extends Component {
  render() {
    return (
      <Content style={{padding: 12}}>
        <Card>
          <CardItem cardBody>
            <Image source={require('../Assets/Images/medan.jpg')} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <View style={{position: 'relative'}}>
            <Icon name='favorite' style={{position: 'absolute', bottom: -24, right: 16, backgroundColor: 'white', padding: 12, borderRadius: 32, elevation: 4}} size={24} color={'red'} onPress={() => alert('unfavorite')}/>
          </View>
          <CardItem>
            <Text>Kos Bang Haji Rhoma Irama</Text>
          </CardItem>
        </Card>
        <Card style={{marginBottom: 32}}>
          <CardItem cardBody>
            <Image source={require('../Assets/Images/medan.jpg')} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <View style={{position: 'relative'}}>
            <Icon name='favorite-border' style={{position: 'absolute', bottom: -24, right: 16, backgroundColor: 'white', padding: 12, borderRadius: 32, elevation: 4}} size={24} onPress={() => alert('unfavorite')}/>
          </View>
          <CardItem>
            <Text>Kos Bang Haji Rhoma Irama</Text>
          </CardItem>
        </Card>
      </Content>
    )
  }
}

class SeenScreen extends Component {
  render() {
    return (
      <View>
        <Text>SeenScreen</Text>
      </View>
    )
  }
}

const TopTab = createAppContainer(
  createMaterialTopTabNavigator({
    Favorite: { 
      screen: FavoriteScreen,
      navigationOptions: {
        title: 'Favorite'
      }
    },
    Seen: {
      screen: SeenScreen,
      navigationOptions: {
        title: 'Dilihat'
      }
    },
  }, {
    initialRouteName: 'Favorite',
    tabBarOptions: {
      style: {backgroundColor: '#0baa56', color: 'red'},
      labelStyle: {fontWeight: 'bold'},
      inactiveTintColor: 'rgba(255, 255, 255, .5)',
      activeTintColor: 'white',
      indicatorStyle: {
        borderBottomColor: 'white',
        borderBottomWidth: 2
      },
    },
  })
);
