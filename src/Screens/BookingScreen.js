import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Left, Icon, Body, Title, Button, List, ListItem, Thumbnail, Right } from 'native-base';

import DateComponent from '../Components/Date'

export default class BookingScreen extends Component {
  static navigationOptions = {
    title: 'Booking'
  }

  render() {
    const kost = this.props.navigation.getParam('kost')
    return (
      <Container>
        {/* <Header style={{ backgroundColor: 'green', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => alert('asd')}>
            <Icon name='arrow-back' />
          </TouchableOpacity>
          <Body style={{ alignItems: 'center' }}>

            <Title>Header</Title>
          </Body>
        </Header> */}
        <Content style={{ padding: 12 }}>
          <View style={{flexDirection: 'row'}}>
            <DateComponent title='Tanggak Masuk'/>
            <DateComponent title='Tanggal Keluar' />
          </View>

          <View style={{ borderTopWidth: 0.5, borderBottomWidth: 0.5 }}>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{uri: `${config.IMAGE_URL}/kost/${kost.image1}`}} />
                </Left>
                <Body>
                  <Text style={{ fontWeight: 'bold' }}>{kost.title}</Text>
                  <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                  <Text style={{ fontWeight: 'bold' }}>Rp. {kost.price}</Text>
                </Body>
              </ListItem>
            </List>
          </View>

          <View style={{ borderBottomWidth: 0.5 }}>
            <View style={{ marginVertical: 12, flexDirection: 'row' }}>
              <View >
                <Text style={{ fontWeight: 'bold' }}>Data Penghuni </Text>
              </View>
              <Right>
                <Text style={{ fontWeight: 'bold', color: 'red' }}>Ubah</Text>
              </Right>
            </View>

            <View style={{ marginVertical: 12, flexDirection: 'row' }}>
              <View >
                <Text >Nama Lengkap </Text>
              </View>
              <Right>
                <Text style={{ fontWeight: 'bold' }}>{kost.created_by.name}</Text>
              </Right>
            </View>

            <View style={{ marginVertical: 12, flexDirection: 'row' }}>
              <View >
                <Text >Jenis Kelamin </Text>
              </View>
              <Right>
              <Text style={{ fontWeight: 'bold' }}>{kost.created_by.gender}</Text>
              </Right>
            </View>

            <View style={{ marginVertical: 12, flexDirection: 'row' }}>
              <View >
                <Text >No Handphone </Text>
              </View>
              <Right>
                <Text style={{ fontWeight: 'bold' }}>{kost.created_by.phone}</Text>
              </Right>
            </View>

            <View style={{ marginVertical: 12, flexDirection: 'row' }}>
              <View>
                <Text>Pekerjaan</Text>
              </View>
              <Right>
                <Text style={{ fontWeight: 'bold' }}>Mahasiswa</Text>
              </Right>
            </View>

            <Button style={{justifyContent: 'center', backgroundColor: '#0baa56'}} onPress={() => this.props.navigation.navigate('ListBooking')}>
              <Text style={{color: 'white', textAlign: 'center'}}>Book</Text>
            </Button>
          </View>

        </Content>

      </Container>
    );
  }
}