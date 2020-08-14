import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import style from './Navigation.module.css';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navigation:{
    background: 'linear-gradient(57deg,#00c6a7,#1e8292)',
    padding: '7px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    
    fontWeight: '900',
  },
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navigation}>
        <Toolbar>
          <Typography edge="start"  variant="h6" className={classes.title}>
          <Link to="/" className={style.logo}>PORTFOLIO</Link>
          </Typography>
        <div className={style.nav}>
        <Link to='/'><Button color="inherit">Home</Button></Link>
        <Link to='/About'><Button color="inherit">About</Button></Link>
        <Link to='/Projects'><Button color="inherit">Projects</Button></Link>
        <Link to='/Contact'><Button color="inherit">Contact</Button></Link>
        </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
