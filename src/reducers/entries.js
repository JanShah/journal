const initialState = (localStorage.journalEntry) ?
JSON.parse(localStorage.journalEntry)
: [{
	key:0,
	parent:0,
	name:'journal entry title',
	notes:'Journal notes',
	date:'todays date',
	edited:null
},{
	key:1,
	parent:0,
	name:'journal entry title',
	notes:'Journal notes',
	date:'todays date',
	edited:null
}]
	 
const addEntry = (key, state) => {
 const now = new Date()
 return Object.assign([], [...state,
	 {
		 key: key.index,
		 parent:key.parent,
		 notes: "a New journal",
		 name: "Sample data",
		 date:now
	 }
 ]) 
}

const addLocal=(state) => {
 localStorage.setItem('journalEntry', JSON.stringify(state))
 }

const editEntry = (key, state) => {
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

const deleteEntry = (key, state) => {
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

const Entry = (state = initialState, action) => {
	// console.log('entries:')
 switch(action.type) {
	 case 'ADD_ENTRY_SELECTED' : 
	 return addEntry(action.payload.key,state);
	 case 'EDIT_ENTRY_SELECTED' :
	 return editEntry(action.payload,state);
	 case 'DELETE_ENTRY_SELECTED' :
	 return deleteEntry(action.payload,state);
	 default: 
		 return state;
 }
	 addLocal(state)
 return state;
}


export default Entry;