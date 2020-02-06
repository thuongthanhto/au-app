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

export const getAll = async params => {
  console.log(defaultOptions(params));
  const result = await axios(defaultOptions(params));
  return get(result, 'data.d.Results', []);
};
