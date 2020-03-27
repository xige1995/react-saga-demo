import { createStore, applyMiddleware } from "redux";
import incrementReducer from "./reducers";
import createSagaMiddleware from "redux-saga";

import { watchIncrementAsync } from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(incrementReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchIncrementAsync);

export default store;
