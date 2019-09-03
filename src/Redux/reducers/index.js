import { combineReducers } from 'redux';
// import { createNavigationReducer } from 'react-navigation-redux-helpers';

// import RootNavigation from '../../Navigations/RootNavigation';
import kost from './kost';

// const router = createNavigationReducer(RootNavigation)

const appReducer = combineReducers({
  // router,
  kost
})

export default appReducer