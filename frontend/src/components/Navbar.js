import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import CssBaseline from '@material-ui/core/CssBaseline';
import { GitHub } from '@material-ui/icons';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: 'white',
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: 'white',
    },
  }),
);

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Link to="/">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <AllInclusiveIcon />
          </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            CodePaste
          </Typography>
          <IconButton onClick={() => props.setDark(!props.dark)} edge="start" color="inherit" aria-label="darkmode">
            <Brightness4Icon />
          </IconButton>
          <IconButton href="https://github.com/masoodmomin/" edge="start" color="inherit" aria-label="github">
            <GitHub />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
