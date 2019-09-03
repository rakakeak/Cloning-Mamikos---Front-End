import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import config from '../config';

function userApiClient(token) {
  return axios.create({
    baseURL: `${config.API_URL}/user/me`,
    headers: {
      authorization: token,
    },
    timeout: 3000,
  })
}

async function getToken() {
  let token = await AsyncStorage.getItem('token')
  return token
}

async function fetchUser() {
  let token = await getToken()
  return await userApiClient(`Bearer ${token}`)
    .get()
    .then((response) => {
      if (response.status === 200) {
        return response.data
      }
      return null
    })
}

const UserService = {
  fetchUser,
}

export default UserService