export const formRequest = (payload) => ({ //payload= informacion que vamos a transmitir
    type: 'FORM_REQUEST',
    payload,
  }); //guardar elementos en favoritos

  export const addUsers = (payload) => ({ //payload= informacion que vamos a transmitir
    type: 'ADD_USERS',
    payload,
  }); //guardar elementos en favoritos