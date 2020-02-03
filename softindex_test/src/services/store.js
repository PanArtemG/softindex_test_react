import {createStore, compose, combineReducers} from 'redux';
import {listReducer} from './list/reduser';


const rootReducer = combineReducers({
    list: listReducer
});

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// eslint-disable-next-line
const composeEnhancers = devtools ? devtools : compose;

export const store = createStore(
    rootReducer,
    composeEnhancers()
);
