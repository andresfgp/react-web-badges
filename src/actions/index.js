export const formRequest = (payload) => ({ //payload= informacion que vamos a transmitir
  type: 'FORM_REQUEST',
  payload,
});

export const addUsers = (payload) => ({ //payload= informacion que vamos a transmitir
  type: 'ADD_USERS',
  payload,
});

export const requestData = (payload) => ({ //payload= informacion que vamos a transmitir
  type: 'REQUEST_DATA',
  payload,
});

export const getDataId = (payload) => ({ //payload= informacion que vamos a transmitir
  type: 'GET_DATA_ID',
  payload,
});

export const editDataId = (payload) => ({ //payload= informacion que vamos a transmitir
  type: 'EDIT_DATA_ID',
  payload,
});

export const eraseDataId = (payload) => ({ //payload= informacion que vamos a transmitir
  type: 'ERASE_DATA_ID',
  payload,
});

export const getSearchVideoBadges = (payload) => ({
  type: 'GET_SEARCH_VIDEO_BADGES',
  payload,
});

export const getSearchVideoRAndM = (payload) => ({
  type: 'GET_SEARCH_VIDEO_RANDM',
  payload,
});
