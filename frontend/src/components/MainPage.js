import React, { useState, useEffect } from 'react'
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'
import CustomButton from './CustomButton'
import ResetButton from './ResetButton'
import TextArea from './TextArea'
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

export default function MainPage() {
  const history = useHistory();

    const [input, setInput] = useState({
      slug:"",
      code: ""
    });
    const [lang, setLang] = React.useState('');
    const [getLang, setGetLang] = React.useState([]);
    const padding = { paddingRight: "15px"}

    useEffect(() => {
      const url = 'http://127.0.0.1:8000/api/get_lang';
      fetch(url)
      .then(response => response.json())
      .then(data => 
        setGetLang(data)
      ).catch(function(error) {
          window.alert(error)
      })
  }, [])

    function handleOnChange(e) {
        e.preventDefault()
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        })
      }

    function getCookie(name){
      let cookieValue = null;
      if (document.cookie && document.cookie !== '') {
          const cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
              const cookie = cookies[i].trim();
              if (cookie.substring(0, name.length + 1) === (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
    }
    const onSaveHandler = (e) => {
      e.preventDefault();
      const csrftoken = getCookie('csrftoken');
      if(input.code !== "") {
  
        var url = 'http://127.0.0.1:8000/api/create_paste/'
        
        fetch(url,{
          method:'POST',
          headers:{
            'Content-type':'application/json',
            'X-CSRFToken': csrftoken
          },
          body: JSON.stringify({ slug: input.slug, code: input.code, lang:lang })})
        .catch(function(error) { 
          window.alert(error) 
        })
        .then(response => response.json())
        .then(data => {
          if(data.status === 409) {
            window.alert("URL already exists")
          }
          else {
            history.push("/" + input.slug);
          }
        })
      }
    };

      function onResetHandler(e) {
        e.preventDefault()
        setInput({
          slug: "",
          code: ""
        })
      }

      function handleLangChange(event) {
        setLang(event.target.value);
      };
      
    return (
        <div>
            <Grid container justify="flex-end" alignItems="center" style={padding}>
              <CustomInput name="slug" value={input.slug} onChange={handleOnChange}/>
                <CustomSelect values={getLang} onChange={handleLangChange} text="Language" val={lang}/>
                <CustomButton text="Copy" onClick={() => {navigator.clipboard.writeText(input.code)}}/>
                <CustomButton text="Save" onClick={onSaveHandler}/>
                <ResetButton onReset={onResetHandler}/>
            </Grid>
            <TextArea name="code" value={input.code} onChange={handleOnChange}/>
        </div>
    )
}
