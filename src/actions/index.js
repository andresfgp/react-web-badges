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
