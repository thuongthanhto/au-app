import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

export const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
  sync: {}
});

export const saveData = (data = [], value, cb) => {
  let newData = data;
  if (data.length === 0) {
    newData = [{...value}];
    onSave(newData);
    cb && cb(null);
  } else {
    const isDuplicate = data.filter(e => e.email === value.email);
    if (isDuplicate > 0) {
      cb && cb('The user is already available in the favourites list');
    } else {
      newData.push(value);
      onSave(newData);
      cb && cb(null);
    }
  }
};

export const getData = (cb) => {
  storage.load({
    key: 'favoriteFriend',
    autoSync: true,
    syncInBackground: true,
    syncParams: {
      extraFetchOptions: {},
      someFlag: true
    }
  }).then(res => {
    cb && cb(res.length ? res : []);
  })
  .catch(() => {
    cb && cb([]);
  });
};

export const onSave = (data) => {
  storage.save({
    key: 'favoriteFriend',
    data,
    expires: null
  });
};