import { USER } from './types';

export const loginRequest = (params = {}, cb) => ({ type: USER.LOGIN_REQUEST, payload: {params}, cb });

export const loginSuccess = (payload, cb) => ({ type: USER.LOGIN_SUCCESS, payload, cb });

export const loginFailure = (error, cb) => ({ type: USER.LOGIN_FAILURE, payload: {error}, cb });

export const getAllUserRequest = (params = {}, cb) => ({ type: USER.GET_ALL_USER_REQUEST, payload: {params}, cb });

export const getAllUserSuccess = (payload, cb) => ({ type: USER.GET_ALL_USER_SUCCESS, payload, cb });

export const getAllUserFailure = (error, cb) => ({ type: USER.GET_ALL_USER_FAILURE, payload: {error}, cb });
