
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

import React, { useState } from 'react';

import Slider from '@mui/material/Slider';
import { Typography, TextField, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const marks = [
  {
    value: 0,
    label: 'Not Urgent',
  },
  {
    value: 100,
    label: 'Urgent',
  },
];
  

function PageThree() {
  const [urgency, setUrgency] = useState(50);

  const handleSliderChange = (event, newValue) => {
    setUrgency(newValue);
  };

  const thumbStyle = {
    zIndex: 1,
  };

  return (
    <div display='flex' flexDirection='column' alignItems='center' justifyContent='center'marginBottom={theme.spacing(100)} marginTop={theme.spacing(100)} marginLeft='300' >
      <Typography variant="h2" align="right">
        Contact Us
      </Typography>
      <Grid container spacing={2} justifyContent='left' alignItems='center' marginTop={theme.spacing(3)}>
        <Grid item width='80%'>
          <div width='50%' marginBottom={theme.spacing(3)} marginTop={theme.spacing(3)}>
            <Typography id="urgency-slider" align='center' gutterBottom>
              Urgency
            </Typography>
            <Slider
              value={urgency}
              onChange={handleSliderChange}
              aria-labelledby="urgency-slider"
              marks={marks}
              min={20}
              max={150}
              thumbProps={{ style: thumbStyle }}
            />
          </div>
      </Grid>
        </Grid>
      <div display='flex' justifyContent='space-between' width='50%' marginBottom={theme.spacing(3)}>
        <img src="http://www.easterngraphics.com/pcon/en/wp-content/uploads/2015/03/Musterwohnung-2.png" alt="apartment" width='45%' />
        <img src="https://youngandtheinvested.com/wp-content/uploads/invest-in-apartment-buildings.jpg" alt="building" width='20%' />
      </div>
      <div display='flex' flexDirection='column' alignItems='center' width='80%'>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          fullWidth
          marginBottom= {theme.spacing(2)}
        />
        <TextField marginBottom= {theme.spacing(2)}
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="message"
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={2}
          marginBottom= {theme.spacing(2)}
        />
        <Link to='/page-two'><Button marginTop={theme.spacing(2)}
          width= '50%'
          variant="outlined"
          color="primary"
          size="large"
          type='cancel'
        >
          Send
        </Button></Link>
      </div>
      <p/>
      <div>
        <Grid container alignContent={'center'} spacing={2}>
          <Grid item xs={6} sm = {2}><Link to="/"><Button variant='contained'> Previous Page</Button></Link></Grid>
        </Grid>
      </div>
    </div>

  );

}

export default PageThree;