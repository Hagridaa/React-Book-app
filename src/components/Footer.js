
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={ {marginTop:20, padding: 20}}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Kirjavinkki1"  {...a11yProps(0)} />
          <Tab label="Kirjavinkki2" {...a11yProps(1)} />
          <Tab label="Kirjavinkki3" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Oletko jo lukenut Harry Pottereita?
        Sujahda mukaan taikamaailmaan!
      </TabPanel>
      <TabPanel value={value} index={1}>
      Kaipaatko jännitystä ja rikoksia? Aarnio kirja tempaa mukaansa!
      </TabPanel>
      <TabPanel value={value} index={2}>
      Kaipaatko uusia reseptejä keittiöön? Katso Vegaanikeittokirjasta!
      </TabPanel>
    </div>
  );
}