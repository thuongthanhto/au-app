import moment from 'moment';
import update from 'immutability-helper';

import { SCHEDULE } from '../actions/types';

const INITIAL_STATE = {
  listTask: [],
  listTaskSearch: [],
};

const updateBookMark = (list, taskId) => {
  const indexTaskUpdate = list.findIndex(item => item.taskId === taskId);
  return update(list, {
    [indexTaskUpdate]: {
      bookmark: { $set: !list[indexTaskUpdate].bookmark }
    }
  });
};

const removeTask = (list, taskId) => {
  const indexTaskRemove = list.findIndex(item => item.taskId === taskId);
  return update(list, { $splice: [[indexTaskRemove, 1]] });
};

const updateTaskStatus = (list, payload) => {
  const { taskId, status } = payload;
  const indexTaskUpdate = list.findIndex(item => item.taskId === taskId);
  return update(list, {
    [indexTaskUpdate]: {
      status: { $set: status },
      updatedAt: { $set: moment().valueOf() }
    }
  });
};

const editTask = (list, payload) => {
  const { taskId } = payload;
  const indexTaskUpdate = list.findIndex(item => item.taskId === taskId);
  return update(list, {
    [indexTaskUpdate]: { $set: payload }
  });
};

const addTask = (listTask, payload) => {
  const newList = [...listTask];
  newList.push(payload);
  return newList;
};

const searchTask = (listTask, keyword) => {
  let listTaskSearch = [];
  if (!keyword) {
    listTaskSearch = [];
  } else {
    listTaskSearch = listTask.filter(item => item.title.includes(keyword));
  }
  return listTaskSearch;
};

const Schedule = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SCHEDULE.GET_ALL_TASK_REQUEST: return state;
    case SCHEDULE.GET_ALL_TASK_FAILURE: return state;
    case SCHEDULE.GET_ALL_TASK_SUCCESS: {
      return { 
        ...state, 
        listTask: action.payload.data.todos,
      };
    }
    case SCHEDULE.BOOK_MARK_TASK_REQUEST: return state;
    case SCHEDULE.BOOK_MARK_TASK_FAILURE: return state;
    case SCHEDULE.BOOK_MARK_TASK_SUCCESS: {
      return { 
        ...state, 
        listTask: updateBookMark(state.listTask, action.payload),
      };
    } 
    case SCHEDULE.REMOVE_TASK_REQUEST: return state;
    case SCHEDULE.REMOVE_TASK_FAILURE: return state;
    case SCHEDULE.REMOVE_TASK_SUCCESS: {
      return { 
        ...state, 
        listTask: removeTask(state.listTask, action.payload),
      };
    }
    case SCHEDULE.UPDATE_TASK_STATUS_REQUEST: return state;
    case SCHEDULE.UPDATE_TASK_STATUS_FAILURE: return state;
    case SCHEDULE.UPDATE_TASK_STATUS_SUCCESS: {
      return { 
        ...state, 
        listTask: updateTaskStatus(state.listTask, action.payload),
      };
    }
    case SCHEDULE.SEARCH_TASK_REQUEST: {
      const listTaskSearch = searchTask(state.listTask, action.payload);
      return { 
        ...state, 
        listTaskSearch
      };
    }
    case SCHEDULE.EDIT_TASK_REQUEST: return state;
    case SCHEDULE.EDIT_TASK_FAILURE: return state;
    case SCHEDULE.EDIT_TASK_SUCCESS: {
      return { 
        ...state, 
        listTask: editTask(state.listTask, action.payload),
      };
    }
    case SCHEDULE.ADD_TASK_REQUEST: return state;
    case SCHEDULE.ADD_TASK_FAILURE: return state;
    case SCHEDULE.ADD_TASK_SUCCESS: {
      return { 
        ...state, 
        listTask: addTask(state.listTask, action.payload),
      };
    }
    default: return state;
  }
};

export default Schedule;