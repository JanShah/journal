const initialState = (localStorage.journal) ?
JSON.parse(localStorage.journal)
: []
	 
const addaJournal = (key, state) => {
 const now = new Date()
 return Object.assign([], [...state,
	 {
		 key: key,
		 notes: "a New journal",
		 name: "Sample data",
		 date:now
	 }
 ]) 
}

const addLocal=(state) => {
 localStorage.setItem('journal', JSON.stringify(state))
 }

const editaJournal = (key, state) => {
 const now = new Date()	
 var newState = state.map( (item, index) => {
			 if(item.key !== key.key) {
					 // This isn't the item we care about - keep it as-is
					 return item;
			 }
			 // Otherwise, this is the one we want - return an updated value
			 else {
				 return  {
					 key:key.key,
					 name:key.name,
					 notes:key.notes,
					 date:key.date,
					 edited:now
				 }
			 };    
	 });
 addLocal(newState)
 return newState;
}

const deleteJournal = (key, state) => {
	const now = new Date()	
	var newState = state.map( (item, index) => {
				if(item.key !== key.key) {
						// only return items not being deleted
						// if only life were so simple. 
						// some kind of marker needs to be 
						// added elsewhere to delete its children
						return item;
				}   
		});
	addLocal(newState)
	return newState;
 }

const Journal = (state = initialState, action) => {
 switch(action.type) {
	 case 'ADD_JOURNAL_SELECTED' : 
	 return addaJournal(action.payload.key,state);
	 case 'EDIT_JOURNAL_SELECTED' :
	 return editaJournal(action.payload,state);
	 case 'DELETE_JOURNAL_SELECTED' :
	 return deleteJournal(action.payload,state);
	 default: 
		 return state;
 }
	 addLocal(state)
 return state;
}


export default Journal;