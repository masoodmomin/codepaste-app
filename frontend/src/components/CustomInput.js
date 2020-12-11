import React from 'react';
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const CustomizedInput = withStyles((theme) => ({
  input: {
    color: theme.palette.primary.text,
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    '&:focus': {
      borderColor: theme.palette.secondary.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));


export default function CustomInput(props) {
  const classes = useStyles();
  return (
    <>
    <CustomizedInput
          name={props.name} 
          onChange={props.onChange} 
          className={classes.margin} 
          value={props.value}
          placeholder="Enter paste url"
        />
    </>
  );
}