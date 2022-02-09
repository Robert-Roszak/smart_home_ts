import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import productsReducer from './productsRedux';

const initialState = {
  products: {
    data: {},
    loading: {
      active: false,
      error: false
    }
  }
};

const reducers = {
  products: productsReducer
};

Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] === 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

const store = createStore(combinedReducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
