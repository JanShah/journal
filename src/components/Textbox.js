import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

const Textbox = (props) => {
  console.log('textbox',props.value)
  return <div>
  <TextField
    fullWidth={true}
    required={props.required}
    id={props.id}
    floatingLabelText={props.label}
    floatingLabelStyle={styles.floatingLabelStyle}
    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    onChange={props.onChange}
    value={props.value}
  />  
  </div>
};
export default Textbox;