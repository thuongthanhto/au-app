import axios from 'axios';
import get from 'lodash.get';
import {API_URL} from 'react-native-dotenv';

// import Axios from './Api';

const defaultOptions = url => ({
  url: `${API_URL}/${url}`,
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  data: {
    pageSize: 99,
    pageIndex: 1,
    order: 'asc',
  },
});

const searchOptions = data => ({
  url: `${API_URL}/getProducts`,
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  data: {
    pageSize: 10,
    pageIndex: 0,
    order: 'asc',
    ...data,
  },
});

export const getAll = async params => {
  const result = await axios(defaultOptions(params));
  return get(result, 'data.d.Results', []);
};

export const getProducts = async params => {
  const result = await axios(searchOptions(params));
  return get(result, 'data.d', {});;
};
