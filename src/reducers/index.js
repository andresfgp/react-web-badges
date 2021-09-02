const reducer = (state, action) => {
  switch (action.type) { // evaluar el type
    case 'FORM_REQUEST':
      return {
        ...state, //traer el estado que ya tengo
        user: action.payload,
      };
    case 'ADD_USERS':
      return {
        ...state, //traer el estado que ya tengo
        users: [...state.users, action.payload],
      };

    case 'REQUEST_DATA':
      return {
        ...state, //traer el estado que ya tengo
        rickAndMortyState: { data: action.payload },
      };

    default:
      return state;

  }
};

export default reducer;
