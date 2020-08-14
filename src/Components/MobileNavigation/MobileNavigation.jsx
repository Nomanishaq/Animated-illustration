import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import Style from './MobileNavigation.module.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(57deg,#00c6a7,#1e8292)',
    width: '500 !important',
  },
  mobileNav: {
    color: '#fff'
  }
});

const MobileNavigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return ( 
    <div className={Style.navContainer}>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <Link to='/'><BottomNavigationAction className={classes.mobileNav} value="recents" showlabel="home" icon={<HomeIcon />} /></Link>
        <Link to='/About'><BottomNavigationAction className={classes.mobileNav} value="favorites" icon={<FolderIcon />} /></Link>
        <Link to='/Projects'><BottomNavigationAction className={classes.mobileNav} value="folder" icon={<FavoriteIcon />} /></Link>
        <Link to='/Contact'><BottomNavigationAction className={classes.mobileNav} value="nearby" icon={<PermContactCalendarIcon />}/></Link>
      </BottomNavigation>
    </div>
  );
}

export default MobileNavigation;