
import {combineReducers} from 'redux';
import JournalsReducer from './journals';

const allReducers = combineReducers({
	journals: JournalsReducer,
})
export default allReducers;