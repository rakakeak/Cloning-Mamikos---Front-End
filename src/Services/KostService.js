import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import config from '../config';

function kostApiClient(token) {
  return axios.create({
    baseURL: `${config.API_URL}/kost`,
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

async function fetchKost() {
  let token = await getToken()
  return await kostApiClient(`Bearer ${token}`)
    .get()
    .then((response) => {
      if (response.status === 200) {
        return response.data
      }
      return null
    })
}

const KostService = {
  fetchKost,
}

export default KostService