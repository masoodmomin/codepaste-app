import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

export default function CustomButton(props) {
  const classes = useStyles();

  return (
    <div>
      <Button onClick={props.onClick} href={props.href} color="secondary" variant="contained" className={classes.margin}>
        {props.text}
      </Button>
    </div>
  );
}
