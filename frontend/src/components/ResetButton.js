import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(2),
      color: theme.palette.primary.text
    },
  },
}));

export default function ResetButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={props.onReset}>Reset</Button>
    </div>
  );
}
