import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'


import { reducer as cardsReducer, loadCards } from './modules/cards';

const mainReducer = combineReducers({
	cardsReducer,
})

const middleware = [ thunk ];

const store = createStore(
  mainReducer,
  applyMiddleware(...middleware)
);

store.dispatch(loadCards());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
document.getElementById('root'));

registerServiceWorker();
