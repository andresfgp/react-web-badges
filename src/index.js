import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import BadgeNew from './containers/BadgeNew'

import 'bootstrap/dist/css/bootstrap.css'; //estilos
import './assets/styles/global.css' //estilos globales

const initialState = {
    'user': {},
    'users': [{
        firstName:"Andrés",
        lastName:"García",
        avatarUrl:"https://s.gravatar.com/avatar/f5e615490b0f1825ee0157aed73da46a?s=80",
        jobTitle:"Frontend Engineer",
        twitter:"andfgp"
    }],
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, initialState, composeEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <BadgeNew />
  </Provider>,
  document.getElementById('app'),
);