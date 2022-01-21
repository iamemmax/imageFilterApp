import rootReducer from "../RootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)))


export default store