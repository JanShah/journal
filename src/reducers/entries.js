//todo  getDate function

const initialState = (localStorage.journalEntry) ?
JSON.parse(localStorage.journalEntry)
: [{
	key:1,
	parent:1,
	name:'<p>journal entry title for journal 1</p>',
	notes:'<p>Journal notes</p>',
	date:'todays date',
	edited:null
},{
	key:2,
	parent:2,
	name:'<p>Another journal entry for journal 2</p>',
	notes:'<p>Journal notes</p>',
	date:'todays date 1',
	edited:null
},{
	key:3,
	parent:1,
	name:'<p>Another journal entry title for journal 1</p>',
	notes:'<p>Journal notes</p>',
	date:'todays date',
	edited:null
},{
	key:4,
	parent:2,
	name:'<p>journal entry for journal 2</p>',
	notes:`<p><span style="color: rgb(0, 0, 255);">const</span> <span style="color: rgb(0, 16, 128);">initialState</span> = {</p><p>&nbsp;&nbsp;<span style="color: rgb(0, 16, 128);">activeJournal:</span><span style="color: rgb(9, 136, 90);">1</span>,</p><p>&nbsp;&nbsp;<span style="color: rgb(0, 16, 128);">activeEntry:</span><span style="color: rgb(9, 136, 90);">0</span></p><p>}</p><p><br></p><p><span style="color: rgb(0, 0, 255);">const</span> <span style="color: rgb(121, 94, 38);">editActiveJournal</span> = (<span style="color: rgb(0, 16, 128);">key</span>, <span style="color: rgb(0, 16, 128);">state</span>) <span style="color: rgb(0, 0, 255);">=&gt;</span> {</p><p>&nbsp;&nbsp;<span style="color: rgb(0, 128, 0);">// console.log('changing active Journal',key,state)</span></p><p>&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">var</span> <span style="color: rgb(0, 16, 128);">newState</span> = {</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 16, 128);">activeJournal:key</span>.<span style="color: rgb(0, 16, 128);">journal</span>.<span style="color: rgb(0, 16, 128);">value</span>&nbsp;,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 16, 128);">activeEntry:</span>-<span style="color: rgb(9, 136, 90);">1</span></p><p>&nbsp;&nbsp;}</p><p> <span style="color: rgb(175, 0, 219);">return</span> <span style="color: rgb(0, 16, 128);">newState</span>;</p><p>}</p><p><br></p><p><span style="color: rgb(0, 0, 255);">const</span> <span style="color: rgb(121, 94, 38);">editActiveJournalEntry</span> = (<span style="color: rgb(0, 16, 128);">key</span>, <span style="color: rgb(0, 16, 128);">state</span>) <span style="color: rgb(0, 0, 255);">=&gt;</span> {</p><p>&nbsp;&nbsp;<span style="color: rgb(0, 128, 0);">// console.log('changing active entry',key,state)</span></p><p> &nbsp;<span style="color: rgb(0, 0, 255);">var</span> <span style="color: rgb(0, 16, 128);">newState</span> = {</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 16, 128);">activeJournal:state</span>.<span style="color: rgb(0, 16, 128);">activeJournal</span>&nbsp;,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 16, 128);">activeEntry:key</span>.<span style="color: rgb(0, 16, 128);">value</span></p><p>&nbsp;&nbsp;}</p><p> <span style="color: rgb(175, 0, 219);">return</span> <span style="color: rgb(0, 16, 128);">newState</span>;</p><p>}</p><p><br></p><p><span style="color: rgb(0, 0, 255);">const</span> <span style="color: rgb(121, 94, 38);">ActiveEntry</span> = (<span style="color: rgb(0, 16, 128);">state</span> = <span style="color: rgb(0, 16, 128);">initialState</span>, <span style="color: rgb(0, 16, 128);">action</span>) <span style="color: rgb(0, 0, 255);">=&gt;</span> {</p><p> &nbsp;<span style="color: rgb(175, 0, 219);">switch</span>(<span style="color: rgb(0, 16, 128);">action</span>.<span style="color: rgb(0, 16, 128);">type</span>) {</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(175, 0, 219);">case</span> <span style="color: rgb(163, 21, 21);">'JOURNAL_SELECTED'</span> :</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(175, 0, 219);">return</span> <span style="color: rgb(121, 94, 38);">editActiveJournal</span>(<span style="color: rgb(0, 16, 128);">action</span>.<span style="color: rgb(0, 16, 128);">payload</span>,<span style="color: rgb(0, 16, 128);">state</span>);</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(175, 0, 219);">case</span> <span style="color: rgb(163, 21, 21);">'ENTRY_SELECTED'</span> :</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(175, 0, 219);">return</span> <span style="color: rgb(121, 94, 38);">editActiveJournalEntry</span>(<span style="color: rgb(0, 16, 128);">action</span>.<span style="color: rgb(0, 16, 128);">payload</span>,<span style="color: rgb(0, 16, 128);">state</span>);</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(175, 0, 219);">default</span>: </p><p>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<span style="color: rgb(175, 0, 219);">return</span> <span style="color: rgb(0, 16, 128);">state</span>;</p><p> &nbsp;}</p><p> &nbsp;<span style="color: rgb(175, 0, 219);">return</span> <span style="color: rgb(0, 16, 128);">state</span>;</p><p>}</p><p><br></p><p><span style="color: rgb(175, 0, 219);">export</span> <span style="color: rgb(175, 0, 219);">default</span> <span style="color: rgb(0, 16, 128);">ActiveEntry</span>;</p><p><br></p>`,
	date:'todays date',
	edited:null
}]
	 
const addEntry = (key, state) => {
	const now = new Date()
	const newState = Object.assign([], [...state, {
		key: key.index,
		parent:key.parent,
		notes: "a New journal",
		name: "Sample data",
		date:now
	}]) 
 	addLocal(newState)
 	return newState 
}

const addLocal=(state) => {
	localStorage.setItem('journalEntry', JSON.stringify(state))
}

const editEntryName = (payload, state) => {
	const now = new Date()	
	var newState = state.map( (item, index) => {
		if(item.key !== payload.key) {
			return item;
		} else {
			return  {
				key:item.key,
				parent:item.parent,
				name:payload.name, //edit name
				notes:item.notes,
				date:item.date,
				edited:now
			}
		};  
	});
	addLocal(newState)
	return newState;
 }

 const editEntryNotes = (payload, state) => {
	const now = new Date()	
	var newState = state.map( (item, index) => {
		if(item.key !== payload.key) {
			return item;
		} else {
			console.log(payload,item)
			return {
				key:item.key,
				parent:item.parent,
				name:item.name, //edit name
				notes:payload.notes,
				date:item.date,
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
		//should only delete if item doesn't have children
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
	 case 'EDIT_ENTRY_NAME_SELECTED' :
	 return editEntryName(action.payload,state);
	 case 'EDIT_ENTRY_NOTES_SELECTED' :
	 return editEntryNotes(action.payload,state);
	 case 'DELETE_ENTRY_SELECTED' :
	 return deleteEntry(action.payload,state);
	 default: 
		 return state;
 }
addLocal(state)
 return state;
}


export default Entry;