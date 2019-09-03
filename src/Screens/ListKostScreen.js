import React, { Component } from 'React'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Container, Header, Body, Button, Text, Tabs, Tab, ScrollableTab, Footer, FooterTab } from 'native-base';
import { Searchbar, Card, Title, Badge, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

import { connect } from 'react-redux';
import * as actionKost from '../Redux/actions/kost';

import config from '../config';

import { primaryColor } from '../Assets/Styles/colors';

class ListKost extends Component {
  static navigationOptions = {
    header: null
  }

  constructor() {
    super()

    this.state = {
      kost: [],
    }
  }

  componentDidMount() {
    this.props.getListKostPending()
    axios.get(`${config.API_URL}/kost`).then(res => {
      const kost = res.data
      this.props.getListKost(kost)
    })
  }

  priceFormat = (price) => price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  
  render() {
    return (
      <Container>
        <Header hasTabs rounded style={{ backgroundColor: 'white', elevation: 0 }}>
          <Body style={{ paddingTop: 12 }}>
            <Searchbar style={{ elevation: 0, backgroundColor: 'rgba(0, 0, 0, .05)', borderRadius: 50 }} placeholder='Cari kos...'/>
          </Body>
        </Header>
        <Tabs renderTabBar={() => <ScrollableTab style={{ backgroundColor: 'white', marginTop: 12 }} />} >
          <Tab heading="Lihat Peta" tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'gray' }} activeTabStyle={{ backgroundColor: 'white' }} activeTextStyle={{ color: '#0baa56', fontWeight: 'bold' }}>
            <MapView style={{ flex: 1 }}
              region={{
                latitude: -6.301576,
                longitude: 106.7351054,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              showsUserLocation
            >
              <Marker coordinate={{
                latitude: -6.301576,
                longitude: 106.7351054,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
              }} image={{ uri: 'https://image.flaticon.com/icons/svg/25/25231.svg' }} />
            </MapView>
          </Tab>
          <Tab heading="Lihat Daftar" tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'gray' }} activeTabStyle={{ backgroundColor: 'white' }} activeTextStyle={{ color: '#0baa56', fontWeight: 'bold' }}>
            {/* -----------------------------isi konten----------------------- */}
            <ScrollView>
              <View style={{ paddingHorizontal: 12, paddingVertical: 4 }}>
                {this.props.kost.isLoading === false ? null : <Text>Loading...</Text>}
                {this.props.kost.data.map((item, index) => (
                  <Card style={{ marginVertical: 6, elevation: 2 }} key={index} onPress={() => this.props.navigation.navigate('DetailKost', {id: item.id})}>
                    <Card.Cover source={{uri: `${config.IMAGE_URL}/kost/${item.image1}`}} />
                    <Card.Content style={{paddingTop: 8}}>
                      <Icon name='favorite-border' color='gray' size={28} style={{position: 'absolute', right: 20, top: -18, backgroundColor: 'white', padding: 8, elevation: 4, borderRadius: 50}} />
                      <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                        <Badge style={styles.badge}>{item.type}</Badge>
                        <Badge style={[styles.badge, {backgroundColor: 'tomato', marginHorizontal: 4}]}>{item.emptyRoom} Kamar</Badge>
                        <Badge style={[styles.badge, {backgroundColor: primaryColor}]}>Medan Denai</Badge>
                      </View>
                      <Title>{item.title}</Title>
                      <Paragraph numberOfLines={2}>{item.description}</Paragraph>
                      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Rp {this.priceFormat(item.price)} / bulan</Text>
                    </Card.Content>
                  </Card>
                ))}
              </View>
            </ScrollView>

            <Footer>
              <FooterTab style={{ backgroundColor: 'white', elevation: 4 }}>
                <Button style={{}}>
                  <Icon name='filter-list' size={24} color={'black'} />
                  <Text style={{ color: 'black' }}>Filter</Text>
                </Button>
                <Button style={{}}>
                  <Icon name='sort' size={24} color={'black'} />
                  <Text style={{ color: 'black' }}>Urutkan</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    kost: state.kost
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getListKost: (kost) => dispatch(actionKost.getListKost(kost)),
    getListKostPending: () => dispatch(actionKost.geListKostPending())    
  }
}

const styles = StyleSheet.create({
  badge: {
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: 'white'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListKost)