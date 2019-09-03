import axios from 'axios';
import config from '../../config';

export const getListKost = (kost) => {
  return {
    type: 'GET_KOST',
    payload: kost
  }
}

export const geListKostPending = () => {
  return {
    type: 'GET_KOST_PENDING'
  }
}

export const getDetailKost = (kost) => {
  return {
    type: 'GET_DETAIL_KOST',
    payload: kost
  }
}

export const getDetailKostPending = () => {
  return {
    type: 'GET_DETAIL_KOST_PENDING'
  }
}