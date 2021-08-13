import React from 'react'; // analogo a createElement
import ReactDOM from 'react-dom'; // analogo a appendChild

import 'bootstrap/dist/css/bootstrap.css'; //estilos
import './assets/styles/global.css' //estilos globales

import Home from './containers/Home'

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Home />, container);
