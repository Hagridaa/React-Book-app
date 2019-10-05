import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
        width: 250,
      }
  }));

  

  export default function ButtonAppBar() {

    const classes = useStyles();

    const [state, setState] = React.useState({
    
        left: false

      });

      const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
      };
    
      const sideList = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <List>
            {['Kirjalomake', 'Kirjalista', 'Henkilökunta', 'Tiedonhakulomake'].map((text, index) => (
              <ListItem button key={text}>
                {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
         
        </div>
      );
    
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
              
              <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
            <Typography variant="h6" className={classes.title}>
              KirjaApp
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }