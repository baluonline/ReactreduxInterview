import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import {Provider} from 'react-redux'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

export const {
    REACT_APP_ABC = "ABC",
    REACT_APP_XYZ = "XYZ",
  } = process.env;
