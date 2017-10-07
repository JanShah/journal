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
  return <div>
  <TextField
    fullWidth={true}
    id={props.id}
    floatingLabelText={props.label}
    floatingLabelStyle={styles.floatingLabelStyle}
    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
  />  
  </div>
};
export default Textbox;