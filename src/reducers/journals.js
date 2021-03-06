//todo  getDate function
const starterJournal = localStorage.journal
const initialState = (starterJournal && starterJournal!=="undefined") ?
JSON.parse(localStorage.journal)
: [{		 
	key:1,
	name:'first journal',
	notes:'some notes',
	date:'7/10/2017 15:46',
	edited:null
},{		 
	key:2,
	name:'second journal',
	notes:'some more notes',
	date:'9/10/2017 15:46',
	edited:null
}]
	 
const addaJournal = (action, state) => {
 const now = new Date()
 console.log('journal reducer adding: : ',state,action)
 const newState =  Object.assign([], [...state,
	 {
		 key: action.key,
		 notes: action.data.notes,
		 name: action.data.name,
		 date:now
	 }
 ])
 addLocal(newState)
 return newState;
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
						return item;
				}   
		});
	addLocal(newState)
	return newState;
 }

const Journal = (state = initialState, action) => {
	// console.log('in journal//')
 	switch(action.type) {
	 case 'ADD_JOURNAL_SELECTED' : 
	 return addaJournal(action.payload,state);
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