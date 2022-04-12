import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter, Switch } from 'react-router-dom';
//import todoApp from './reducers'
import './style/style.css';
import App from './Components/App'

//let store = createStore(todoApp)

ReactDOM.render(
  <BrowserRouter>
    
      <App />
    
  </BrowserRouter>,
  document.getElementById('root')
);



