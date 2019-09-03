import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text, View, Right } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

import axios from 'axios';

import UserService from '../Services/UserService';

import config from '../config';
import AsyncStorage from '@react-native-community/async-storage';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <View>
        <Icon name={tintColor == '#0baa56' ? 'person' : 'person-outline'} size={18} style={{ color: tintColor }} />
      </View>
    )
  }

  constructor() {
    super();

    this.state = {
      token: '',
      user: {},
    }
  }

  async componentDidMount() {
    let user = await UserService.fetchUser()
    this.setState({ user })
  }

  logout = () => {
    AsyncStorage.setItem('token', null)
    this.props.navigation.push('Login')
  }

  render() {
    // const { name } = this.state.user;

    return (
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#0baa56', elevation: 4, paddingHorizontal: 28, height: 100, justifyContent: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            {/* <Icon name='person' size={48} color='black' /> */}
            <Image style={{ width: 50, height: 50, marginRight: 8, borderRadius: 50 / 2 }} source={{ uri: `${config.IMAGE_URL}/avatar/${this.state.user.avatar}` }} />
            <Text style={{ fontWeight: 'bold', marginLeft: 4, color: 'white' }}>{this.state.user.name}</Text>
          </View>
          <Right style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }} onPress={() => alert(this.state.token)}>Edit Profile</Text>
          </Right>
        </View>

        <View style={{ padding: 16 }}>
          <View style={{ marginTop: 16, backgroundColor: 'white', borderRadius: 10, elevation: 4 }}>
            <View style={{ marginTop: 14, marginLeft: 18 }}>
              <Text style={{ fontSize: 12 }}>Kost Saya</Text>
            </View>
            <View style={{ marginTop: 18, flexDirection: 'row', borderRadius: 10, backgroundColor: 'white' }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, width: 40, height: 55, marginBottom: 14 }}>
                <Icon size={26} name='assignment' />
                <Text style={{ fontSize: 10 }}>Kontrak</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, width: 40, height: 55 }}>
                <Icon size={26} name='receipt' />
                <Text style={{ fontSize: 10 }}>Tagihan</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, width: 40, height: 55 }}>
                <Icon size={26} name='build' />
                <View>
                  <Text style={{ fontSize: 10 }}>Komplain</Text>
                </View>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, width: 40, height: 55 }}>
                <Icon size={26} name='store' />
                <Text style={{ fontSize: 10 }}>Kios</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 16, backgroundColor: 'white', elevation: 4, borderRadius: 8, paddingVertical: 4 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
              <Icon style={{ paddingLeft: 12 }} name='history' size={22} />
              <Text style={{ paddingLeft: 20 }}>History Booking</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
              <Icon style={{ paddingLeft: 12 }} name='shopping-cart' size={22} />
              <Text style={{ paddingLeft: 20 }}>Barang dan Jasa</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
              <Icon style={{ paddingLeft: 12 }} name='portrait' size={22} />
              <Text style={{ paddingLeft: 20 }}>Verifikasi Akun</Text>
            </View>
          </View>


          <View style={{ marginTop: 16, paddingHorizontal: 8 }}>
            <View style={{ borderBottomWidth: 0.3, backgroundColor: 'white', flexDirection: 'row', height: 45, alignItems: 'center'}}>
              <Icon style={{ paddingLeft: 12 }} name='settings' size={22} /><Text style={{ paddingLeft: 20 }}>Pengaturan</Text>
            </View>

            <View style={{ borderBottomWidth: 0.3, backgroundColor: 'white', flexDirection: 'row', height: 45, alignItems: 'center' }}>
              <Icon style={{ paddingLeft: 12 }} name='call' size={22} /><Text style={{ paddingLeft: 20 }}>Hubungi CS</Text>
            </View>

            <View style={{ backgroundColor: 'white', flexDirection: 'row', height: 45, alignItems: 'center' }}>
              <Icon style={{ paddingLeft: 12 }} name='exit-to-app' size={22} onPress={() => this.logout()} />
              <Text style={{ paddingLeft: 20 }} onPress={() => this.logout()}>Keluar</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
}