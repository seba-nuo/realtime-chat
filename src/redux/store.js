import {combineReducers, createStore} from 'redux';
import messageReducer from './mensajes/message-reducer';

const reducers = combineReducers({chat: messageReducer })

const store = createStore(reducers, {});

export default store;