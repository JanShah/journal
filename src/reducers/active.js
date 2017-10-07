const initialState = {
	activeJournal:0,
	activeEntry:0
}


const editEntry = (key, state) => {
 	var newState = {
		activeJournal:key.journal.value	,
		activeEntry:state.activeEntry
	}
 return newState;
}


const ActiveEntry = (state = initialState, action) => {
 	switch(action.type) {
	 	case 'JOURNAL_SELECTED' :
	 		return editEntry(action.payload,state);
	 	default: 
		 	return state;
 	}
 	return state;
}

export default ActiveEntry;