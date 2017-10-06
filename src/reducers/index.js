
import {combineReducers} from 'redux';
import JournalsReducer from './journals';
import EntriesReducer from './entries';

const allReducers = combineReducers({
	journals: JournalsReducer,
	entries: EntriesReducer
})
export default allReducers;