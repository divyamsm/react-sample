
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

import React, { useState } from 'react';

import Slider from '@mui/material/Slider';
import { Typography, TextField, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();



// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: theme.spacing(5),
//     marginBottom: theme.spacing(5),
//   },
//   sliderContainer: {
//     width: '80%',
//     marginTop: theme.spacing(3),
//     marginBottom: theme.spacing(3),
//   },
//   imageContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '80%',
//     marginBottom: theme.spacing(3),
//   },
//   image: {
//     width: '48%',
//   },
//   formContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '80%',
//   },
//   textField: {
//     marginBottom: theme.spacing(2),
//   },
//   button: {
//     marginTop: theme.spacing(2),
//     width: '50%',
//   },
// }));

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

  return (
    <div display='flex' flexDirection='column' alignItems='center' justifyContent='center'marginBottom={theme.spacing(100)} marginTop={theme.spacing(100)} marginLeft='300' >
      <Typography variant="h4" align="center">
        Contact Us
      </Typography>
      <div width='50%' marginBottom={theme.spacing(3)} marginTop={theme.spacing(3)}>
        <Typography id="urgency-slider" gutterBottom>
          Urgency
        </Typography>
        <Slider
          value={urgency}
          onChange={handleSliderChange}
          aria-labelledby="urgency-slider"
          marks={marks}
          min={0}
          max={100}
        />
      </div>
      <div display='flex' justifyContent='space-between' width='50%' marginBottom={theme.spacing(3)}>
        <img src="http://www.easterngraphics.com/pcon/en/wp-content/uploads/2015/03/Musterwohnung-2.png" alt="apartment" width='25%' />
        <img src="https://youngandtheinvested.com/wp-content/uploads/invest-in-apartment-buildings.jpg" alt="building" width='25%' />
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
          rows={4}
          marginBottom= {theme.spacing(2)}
        />
        <Button marginTop={theme.spacing(2)}
          width= '50%'
          variant="contained"
          color="primary"
          size="large"
        >
          Send
        </Button>
      </div>
      <p/>
      <div>
        <Grid container alignContent={'center'} spacing={2}>
          <Grid item xs={6} sm = {2}><Link to="/page-two"><Button variant='contained'> Previous Page</Button></Link></Grid>
        </Grid>
      </div>
    </div>

  );


      


}

export default PageThree;