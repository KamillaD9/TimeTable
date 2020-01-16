import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import { App } from './App';

import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./_reducers/rootReducer";
//
// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );
//
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>, document.getElementById('root')
//         );
// setup fake backend

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
