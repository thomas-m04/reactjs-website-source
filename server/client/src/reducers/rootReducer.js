import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const combinedReducer = combineReducers({
    loginReducer,
});

export default combinedReducer;