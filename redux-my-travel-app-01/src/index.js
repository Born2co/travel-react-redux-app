import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import order from './store/reducer/order';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(order, composeEnhancers(applyMiddleware(thunk)));


const app = (
    <Provider store={store}>
                <BrowserRouter>
            <App />
        </BrowserRouter>

    </Provider>

   

);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
