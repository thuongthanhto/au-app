import { SCHEDULE } from './types';

export const getAllTaskRequest = (params = {}, cb) => ({ type: SCHEDULE.GET_ALL_TASK_REQUEST, params, cb });
export const getAllTaskSuccess = (payload, cb) => ({ type: SCHEDULE.GET_ALL_TASK_SUCCESS, payload, cb });
export const getAllTaskFailure = (error, cb) => ({ type: SCHEDULE.GET_ALL_TASK_FAILURE, payload: {error}, cb });

export const bookMarkTaskRequest = (params = {}, cb) => ({ type: SCHEDULE.BOOK_MARK_TASK_REQUEST, params, cb });
export const bookMarkTaskSuccess = (payload, cb) => ({ type: SCHEDULE.BOOK_MARK_TASK_SUCCESS, payload, cb });
export const bookMarkTaskFailure = (error, cb) => ({ type: SCHEDULE.BOOK_MARK_TASK_FAILURE, payload: {error}, cb });

export const removeTaskRequest = (params = {}, cb) => ({ type: SCHEDULE.REMOVE_TASK_REQUEST, params, cb });
export const removeTaskSuccess = (payload, cb) => ({ type: SCHEDULE.REMOVE_TASK_SUCCESS, payload, cb });
export const removeTaskFailure = (error, cb) => ({ type: SCHEDULE.REMOVE_TASK_FAILURE, payload: {error}, cb });

export const updateTaskStatusRequest = (params = {}, cb) => ({ type: SCHEDULE.UPDATE_TASK_STATUS_REQUEST, params, cb });
export const updateTaskStatusSuccess = (payload, cb) => ({ type: SCHEDULE.UPDATE_TASK_STATUS_SUCCESS, payload, cb });
export const updateTaskStatusFailure = (error, cb) => ({ type: SCHEDULE.UPDATE_TASK_STATUS_FAILURE, payload: {error}, cb });

export const searchTaskRequest = (payload, cb) => ({ type: SCHEDULE.SEARCH_TASK_REQUEST, payload, cb });

export const editTaskRequest = (params = {}, cb) => ({ type: SCHEDULE.EDIT_TASK_REQUEST, params, cb });
export const editTaskSuccess = (payload, cb) => ({ type: SCHEDULE.EDIT_TASK_SUCCESS, payload, cb });
export const editTaskFailure = (error, cb) => ({ type: SCHEDULE.EDIT_TASK_FAILURE, payload: {error}, cb });

export const addTaskRequest = (params = {}, cb) => ({ type: SCHEDULE.ADD_TASK_REQUEST, params, cb });
export const addTaskSuccess = (payload, cb) => ({ type: SCHEDULE.ADD_TASK_SUCCESS, payload, cb });
export const addTaskFailure = (error, cb) => ({ type: SCHEDULE.ADD_TASK_FAILURE, payload: {error}, cb });
