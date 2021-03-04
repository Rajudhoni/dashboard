import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';





const useStyles = makeStyles((theme) => ({
    
    paperStyle:{ padding: 10, height: '100vh', width: "100%", backgroundColor:"#F9F9F9" },
    margin: {
        margin: theme.spacing(1),
      },
      formControl: {margin: theme.spacing(1),minWidth: 120},
      selectEmpty: {marginTop: theme.spacing(2), height: "36px", fontSize:"14px", backgroundColor: "#fff", color:"#000",   },
      label: {color: "black" ,fontSize: "14px", fontWeight: "600", marginBottom: "-10px", marginLeft: "13px", },
      menuItem:{top:'160px'}
 


  }));



const Payments = () => {
    const classes = useStyles();
    const [period, setPeriod] = React.useState('');
    const [currency, setCurrency] = React.useState('')
    const periodChange = (event) => {
      setPeriod(event.target.value);
    };
    const currencyChange = (event) => {
        setCurrency(event.target.value);
    }
    return (
        <Grid className={classes.gridbg}>
            <Paper elevation={1} className={classes.paperStyle}>
                {/* select input */}
              <div>
        <FormControl className={classes.formControl}>
        <label className={classes.label} >Time Period</label>
        <Select
        
        labelId="year"
          value={period}
          onChange={periodChange}
          displayEmpty
          variant="outlined"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
          
        
        >
          <MenuItem value="" disabled >
            Year
          </MenuItem>
          <MenuItem value="Year">Year</MenuItem>
          <MenuItem value="Week">Week</MenuItem>
          <MenuItem value="Month">Month</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
       
      </FormControl>

      <FormControl className={classes.formControl}>
        <label className={classes.label} >Currency</label>
        <Select
        labelId="year"
          value={currency}
          onChange={currencyChange}
          displayEmpty
          variant="outlined"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
           
          <MenuItem value="" disabled>
            INR
          </MenuItem>
          <MenuItem value="inr">INR</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
       
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
       
      </FormControl>

              </div>

               {/* select input */}
            </Paper>
        </Grid>
    )
}

export default Payments
