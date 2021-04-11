const saveAppOpens = data => {
  return {
    type: 'SAVE_APP_OPENS',
    payload: data,
  };
};

const homeAction = {
  saveAppOpens,
};

export default homeAction;
