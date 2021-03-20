import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import polls from './polls';
import users from './users';
import authUser from './authUser';

export default combineReducers({
    polls,
    users,
    authUser,
    loadingBar: loadingBarReducer
});