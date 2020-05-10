import { combineReducers, createStore, applyMiddleware } from "redux";
import messageReducer from './mensajes/message-reducer';
import userReducer from "./login/user-reducer";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";

//

const reducers = combineReducers({
  user: userReducer,
  chat: messageReducer
});

const store = createStore(reducers, applyMiddleware(reduxThunk, logger));

export default store;