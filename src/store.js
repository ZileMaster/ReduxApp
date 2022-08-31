import { createStore, combineReducers  } from 'redux';
import homePage from "./containers/Homepage/reducers";
import userPage from './containers/Homepage/UserPage/reducer'

const reducers = combineReducers({ homePage, userPage });

export default createStore(reducers);