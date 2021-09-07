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
    case 'GET_DATA_ID':
      return {
        ...state, //traer el estado que ya tengo
        user: state.users.find((item) => item.id === action.payload) || [],
      };
    case 'EDIT_DATA_ID':
      return {
        ...state, //copying the orignal state
        users: state.users.map((item) => ((item.id === action.payload.id) ?
          { ...item,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            email: action.payload.email,
            avatarUrl: action.payload.avatarUrl,
            jobTitle: action.payload.jobTitle,
            twitter: action.payload.twitter,
            id: action.payload.id,
          } : item)),
      };
    case 'ERASE_DATA_ID':
      return {
        ...state, //traer el estado que ya tengo
        users: state.users.filter((items) => items.id !== action.payload),
      };

    case 'GET_SEARCH_VIDEO':
      if (action.payload === '') return { ...state, searchResult: [] };
      return {
        ...state,
        searchResult: state.users.filter((item) => item.firstName.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.lastName.toLowerCase().includes(action.payload.toLowerCase())),
      };
    default:
      return state;
  }
};

export default reducer;
