import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CustomButton from './CustomButton'
import { useRouteMatch } from 'react-router-dom';
import TextArea from './TextArea'

  export default function Paste() {
    const [pasteData, setPasteData] = useState("");
    const match = useRouteMatch('/:paste_id');

    const padding = { paddingRight: "15px"}

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/api/get/' + match.params.paste_id;
        fetch(url)
        .then(response => response.json())
        .then(data => setPasteData(data)
        ).catch(function(error) {
            window.alert("Incorrect URL. Page doesn't exists.")
        })
    }, []);

    return (
        <div>            
            <Grid container justify="flex-end" alignItems="center" style={padding}>
            <Typography variant="overline">Language: {pasteData.lang}</Typography>
            <CustomButton text="Copy" onClick={() => {navigator.clipboard.writeText(pasteData.code)}}/>
            <CustomButton text="New Paste" href="/"/>
        </Grid>
            <TextArea name="code" value={pasteData.code}/>
        </div>
    )
}
