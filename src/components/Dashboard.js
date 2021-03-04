import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Payments from './Payments';
import Products from './Products';
import Customers from './Customers';
import Marketing from './Marketing';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appbar: {
      backgroundColor: '#EFEFEF'
  }, 
  customTabRoot: {
    color: "#262626",
    backgroundColor: "#EFEFEF",
    height: "55px", 
    
},
customTabIndicator: {
 
    border: "2px solid #FCB03A",
    
},
tabs: {
  fontSize: "20px",
  fontWeight: 400, 
  textTransform: "capitalize"
}
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static"  elevation={0.5}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        //   indicatorColor="#FCB03A"
        //   textColor="#262626"

        classes={{
            root: classes.customTabRoot,
            indicator: classes.customTabIndicator
        }}
        >
          <LinkTab className={classes.tabs} label="Payments"  href="/drafts" {...a11yProps(0)} />
          <LinkTab className={classes.tabs}  label="Customers" href="/trash" {...a11yProps(1)} />
          <LinkTab className={classes.tabs} label="Products" href="/spam" {...a11yProps(2)} />
          <LinkTab className={classes.tabs} label="Marketing" href="/marketing" {...a11yProps(3)} />

        </Tabs>
      </AppBar>
      <TabPanel  value={value} index={0}>
       <Payments/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Customers/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Products/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Marketing/>
      </TabPanel>
    </div>
  );
}
