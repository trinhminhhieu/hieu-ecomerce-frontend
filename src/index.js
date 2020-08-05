import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {ProductProvider} from './context';
import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import 'semantic-ui-css/semantic.min.css';
import rootReducer from './rootReducer';
import { userLoggedIn } from './components/auth';

const store = createStore(
	rootReducer, 
	composeWithDevTools(applyMiddleware(thunk))
	);
if (localStorage.hieustoresJWT) {
	const user = { token: localStorage.hieustoresJWT };
	store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
	<ProductProvider>
	<Router>
	<Provider store={store}>
	<App />
	</Provider>
	</Router>
	</ProductProvider>,
    document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
