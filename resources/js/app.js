import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Provider } from 'react-redux';
import App from './App/Components/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { all } from 'redux-saga/effects'
import { loginReducer } from './App/Components/store/login/loginReducer.js';
import createSagaMiddleware from 'redux-saga';
import userSagas from './App/Components/sagas/userSagas.js';
import { itemReducer } from './App/Components/store/item/itemReducer.js';
import { checkoutReducer } from './App/Components/store/checkout/checkoutReducer.js';
// combining two reducers into a single reducer
const rootReducer = combineReducers({
  loginReducer: loginReducer,
  itemReducer: itemReducer,
  checkoutReducer: checkoutReducer
})
// Store
function* rootSaga() {
  yield all([userSagas])
}
const sagaMiddleware = createSagaMiddleware([rootSaga]);
const makeStore = (initialState) => {
  const initState = {
    ...initialState,
    // How I acccess APP_token? 
   //  APP_token: window.localStorage.getItem('_token'),
  }
  console.log(["[APP], initState", initState]);
  const store = createStore(
    rootReducer,
    initState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
 
  sagaMiddleware.run(rootSaga);
  return store;
}

export const store = makeStore({});

ReactDOM.render(
  <Provider store={store}><App /> </Provider>, document.getElementById('app')
);
