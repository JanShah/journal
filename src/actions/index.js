export const selectJournal = journal => {
	// console.info('clicked journal: '+ journal.name+' '+journal.key)
	return {
		type: 'JOURNAL_SELECTED',
		payload: journal
	}
}

export const addJournal = journal => {
	console.info('clicked to add journal: ',journal)
	return {
		type: 'ADD_JOURNAL_SELECTED',
		payload: journal
	}
}

export const editJournal = journal => {
	  // console.info('clicked to edit journal: '+journal.key)
	return {
		type: 'EDIT_JOURNAL_SELECTED',
		payload: journal
	}
}


export const deleteJournal = journal => {
	// console.info('clicked to delete journal: '+journal.key)
	return {
		type: 'DELETE_JOURNAL_SELECTED',
		payload: journal
	}
}

export const selectEntry = journal => {
	// console.info('clicked journal: '+ journal.name+' '+journal.key)
	return {
		type: 'ENTRY_SELECTED',
		payload: journal
	}
}

export const editEntryName = journal => {
	// console.info('clicked to edit entry name: '+ journal)
	return {
		type: 'EDIT_ENTRY_NAME_SELECTED',
		payload: journal
	}
}

export const editEntryNotes = journal => {
	// console.info('clicked to edit entry notes: '+ journal)
	return {
		type: 'EDIT_ENTRY_NOTES_SELECTED',
		payload: journal
	}
}
