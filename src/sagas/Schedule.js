import { call, put, fork, takeEvery, all } from 'redux-saga/effects';

import {
  getAllTask as getAllTaskService,
} from '../services/Schedule';
import { SCHEDULE } from '../actions/types';
import {
  addTaskFailure, addTaskSuccess,
  editTaskFailure, editTaskSuccess,
  getAllTaskFailure, getAllTaskSuccess,
  removeTaskFailure, removeTaskSuccess,
  bookMarkTaskFailure, bookMarkTaskSuccess,
  updateTaskStatusFailure, updateTaskStatusSuccess
} from '../actions/Schedule';

function* handleGetAllTask({params, cb}) {
  try {
    const res = yield call(getAllTaskService, params);
    yield put(getAllTaskSuccess(res));
    cb && cb(res);
  } catch (error) {
    yield put(getAllTaskFailure(error));
    cb && cb(error);
  }
}

function* handleBookMarkTask({params, cb}) {
  try {
    yield put(bookMarkTaskSuccess(params));
    cb && cb(params);
  } catch (error) {
    yield put(bookMarkTaskFailure(error));
    cb && cb(error);
  }
}

function* handleRemoveTask({params, cb}) {
  try {
    yield put(removeTaskSuccess(params));
    cb && cb(params);
  } catch (error) {
    yield put(removeTaskFailure(error));
    cb && cb(error);
  }
}

function* handleUpdateTaskStatus({params, cb}) {
  try {
    yield put(updateTaskStatusSuccess(params));
    cb && cb(params.taskId);
  } catch (error) {
    yield put(updateTaskStatusFailure(error));
    cb && cb(error);
  }
}

function* handleEditTask({params, cb}) {
  try {
    yield put(editTaskSuccess(params));
    cb && cb(params.taskId);
  } catch (error) {
    yield put(editTaskFailure(error));
    cb && cb(error);
  }
}

function* handleAddTask({params, cb}) {
  try {
    yield put(addTaskSuccess(params));
    cb && cb(null);
  } catch (error) {
    yield put(addTaskFailure(error));
    cb && cb(error);
  }
}

function* watchGetAllTask() {
  yield takeEvery(SCHEDULE.GET_ALL_TASK_REQUEST, handleGetAllTask);
}

function* watchBookMarkTask() {
  yield takeEvery(SCHEDULE.BOOK_MARK_TASK_REQUEST, handleBookMarkTask);
}

function* watchRemoveTask() {
  yield takeEvery(SCHEDULE.REMOVE_TASK_REQUEST, handleRemoveTask);
}

function* watchUpdateTaskStatus() {
  yield takeEvery(SCHEDULE.UPDATE_TASK_STATUS_REQUEST, handleUpdateTaskStatus);
}

function* watchEditTask() {
  yield takeEvery(SCHEDULE.EDIT_TASK_REQUEST, handleEditTask);
}

function* watchAddTask() {
  yield takeEvery(SCHEDULE.ADD_TASK_REQUEST, handleAddTask);
}

export default function* rootSaga() {
  yield all([
    fork(watchAddTask),
    fork(watchEditTask),
    fork(watchGetAllTask),
    fork(watchRemoveTask),
    fork(watchBookMarkTask),
    fork(watchUpdateTaskStatus)
  ]);
}