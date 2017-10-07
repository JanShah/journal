
import {combineReducers} from 'redux';
import JournalsReducer from './journals';
import EntriesReducer from './entries';
import activeReducer from './active'
const allReducers = combineReducers({
	journals: JournalsReducer,
	entries: EntriesReducer,
	active:activeReducer
})
export default allReducers;