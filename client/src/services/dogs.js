/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import API_URL from '../constants';

const getAll = async () => {
  const res = await axios.get(`${API_URL}/dogs`);
  return res.data;
};

const getResourceByQuery = async (query) => {
  const res = await axios.get(`${API_URL}/dogs?name=${query}`);
  return res.data;
};

const getResourceByParams = async (params) => {
  const res = await axios.get(`${API_URL}/dogs/${params}`);
  return res.data;
};

const create = async (object) => {
  const res = await axios.post(`${API_URL}/dog`, object);
  return res.data;
};

export default {
  getAll,
  getResourceByQuery,
  getResourceByParams,
  create,
};
