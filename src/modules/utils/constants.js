import moment from 'moment';

export const USER_INFO = [
  {key: 'name', icon: 'user', title: 'Hi, My name is'},
  {key: 'dob', icon: 'calendar', title: 'My birthday is'},
  {key: 'location', icon: 'map', title: 'My address is'},
  {key: 'phone', icon: 'phone', title: 'My phone number is'},
  {key: 'password', icon: 'lock', title: 'My password is'},
];

export const FILTER_TAB = {
  TO_DO: 'TO_DO',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export const DEFAULT_TASK_MODEL = {
  title: '',
  description: '',
  updatedAt: moment().valueOf(),
  startDate: moment().valueOf(),
  startTime: moment().valueOf(),
  endTime: moment().valueOf(),
  status: 'TO_DO',
  bookmark: false,
  isComplete: false,
  isPinned: false,
  tags: [],
};
