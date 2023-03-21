import React from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
  return <input {...props} ref={ref} className={classes.myInput} type="text" />;
});

export default MyInput;
