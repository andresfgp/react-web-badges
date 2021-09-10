import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

import 'bootstrap/dist/css/bootstrap.css'; //estilos
import './assets/styles/global.css'; //estilos globales

// const initialState = {
//   'rickAndMortyState': {
//     data: '',
//   },
//   'user': {},
//   'users': [],
//   'searchResultBadges': [],
//   'searchResultRAndM': [],
// };

const persistedState = localStorage.getItem('reduxState') ?
  JSON.parse(localStorage.getItem('reduxState')) :
  {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore(reducer, initialState, composeEnhancers);
const store = createStore(reducer, persistedState, composeEnhancers);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
