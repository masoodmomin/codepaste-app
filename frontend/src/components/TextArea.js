import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    margin: {
        width: "100%",
        padding: 5,
        borderRadius: 5,
        color: theme.palette.primary.text,
        backgroundColor: "transparent"
    },
  }));

export default function TextArea(props) {
    const classes = useStyles();

    return (
        <Box m={2}>
        <TextareaAutosize
            name={props.name}
            className={classes.margin}
            value={props.value} 
            onChange={props.onChange} 
            aria-label="minimum height" 
            rowsMin={34}
            placeholder="// Type Code here" 
            />
        </Box>
    )
}
