import React from 'react';
import Button from './Button';
export default ()=>{
    const onClick = ()=>{
        debugger;
    }

    return <>
    Hello from Tagger <Button label="Add new Tag" 
		id="newTag"
		labelStyle="red"
		backgroundColor="white"
		hoverColor="grey"
		onClick={onClick} 
		fullWidth={false}/>
    </>
}