import React, { useState, useEffect, useMemo } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Paste from './components/Paste'
import MainPage from './components/MainPage'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

function App() {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem('dark-theme')))
  useEffect(() => {
    localStorage.setItem('dark-theme', JSON.stringify(dark));
  });

  const theme = useMemo(
    () =>
    createMuiTheme({
      palette: {
        primary: {
          main: dark ? '#000000' : purple[900],
          text: dark ? "white": "black",
        },
        secondary: {
          main: dark ? '#212121' :  purple[900],
        },
        background: {
          default: dark ? "#000000" : "white",
        },
      },
        typography: {
          overline: {
            color: dark ? "white" : "black",
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