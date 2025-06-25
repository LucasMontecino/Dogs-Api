/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import API_URL from '../constants';

const getAll = async () => {
  const res = await axios.get(`${API_URL}/temperaments`);
  return res.data;
};

export default {
  getAll,
};
