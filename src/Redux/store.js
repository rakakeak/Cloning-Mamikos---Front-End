import { createStore, applyMiddleware } from 'redux';

import middlewares from './middleware';
import appReducer from './reducers';

const store = createStore(appReducer)

export default store