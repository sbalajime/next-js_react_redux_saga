import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducers from './reducers';
import sagas from "./sagas";
import {createWrapper} from 'next-redux-wrapper';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export function configureStore(initialState, options) {


    const store = createStore(
        reducers,
        initialState,
        compose(applyMiddleware(...middlewares))
    );

    // sagaMiddleware.run(sagas);
    store.sagaTask = sagaMiddleware.run(sagas)

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}


export const wrapper = createWrapper(configureStore, {debug: true});