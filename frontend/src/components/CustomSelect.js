import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    color: theme.palette.primary.text,
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    '&:focus': {
      color: theme.palette.secondary.main,
      borderRadius: 4,
      borderColor: theme.palette.secondary.main,
    },
    
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(2),
  },
  icon: {
    color: theme.palette.primary.text,
},
}));

export default function CustomSelect(props) {
  const classes = useStyles();
  const Selectvalues = props.values.map((v) => <option key={v.lang} value={v.lang}>{v.lang}</option>)

  return (
    <div>
      <FormControl variant="outlined" size="small" className={classes.margin}>
        <Select
          native
          input={<BootstrapInput />}
          value={props.val}
          onChange={props.onChange}
          displayEmpty
          inputProps={{  classes: {icon: classes.icon} }}
        >
          <option value="" disabled>
            {props.text}
          </option>
          
          {Selectvalues}
        </Select>
      </FormControl>
    </div>
  );
}
