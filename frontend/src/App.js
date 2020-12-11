import React, { useState, useEffect, useMemo } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Paste from './components/Paste'
import MainPage from './components/MainPage'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

function App() {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem('theme')))
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(dark));
  });

  const theme = useMemo(
    () =>
    createMuiTheme({
      palette: {
        primary: {
          main: dark ? purple[900] : '#000000',
          text: dark ? "black" : "white",
        },
        secondary: {
          main: dark ? purple[900] : '#212121',
        },
        background: {
          default: dark ? "white" : "#000000",
        },
      },
        typography: {
          overline: {
            color: dark ? "black" : "white",
            paddingTop: 20,
            marginRight: 10,
          },
        }
    }),
    [dark],
  );
  
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Navbar dark={dark} setDark={setDark}/>
    <Switch>
    <Route exact path="/" component={MainPage}/>
    <Route path="/:paste_id" component={Paste}/>
    </Switch>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;