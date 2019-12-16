import Axios from './Api';

export const login = (params) => Axios.post('/login', params);

export const getAllUser = (params) => Axios.get(`/${params}`);