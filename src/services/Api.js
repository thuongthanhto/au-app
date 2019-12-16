import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

import { Storage, StorageKey } from '../modules/utils/storage';

const defaultOptions = {
  baseURL: API_URL,
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(defaultOptions);

instance.interceptors.request.use(async (params) => {
  const config = { ...params };
  const token = await Storage.get(StorageKey.AuthToken);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;