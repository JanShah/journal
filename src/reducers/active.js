const initialState = {
	activeJournal:1,
	activeEntry:0
}


const editActiveJournal = (key, state) => {
	// console.log('changing active Journal',key,state)
	var newState = {
		activeJournal:key.journal.value	,
		activeEntry:-1
	}
 return newState;
}

const editActiveJournalEntry = (key, state) => {
	// console.log('changing active entry',key,state)
 	var newState = {
		activeJournal:state.activeJournal	,
		activeEntry:key.value
	}
 return newState;
}

const ActiveEntry = (state = initialState, action) => {
 	switch(action.type) {
		case 'JOURNAL_SELECTED' :
			return editActiveJournal(action.payload,state);
		case 'ENTRY_SELECTED' :
			return editActiveJournalEntry(action.payload,state);
		default: 
		 	return state;
 	}
 	return state;
}

export default ActiveEntry;