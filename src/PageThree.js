
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

import React, { useState } from 'react';

import Slider from '@mui/material/Slider';
import { Typography, TextField, Button } from '@mui/material';


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
  // const classes = useStyles();
  const [urgency, setUrgency] = useState(50);

  const handleSliderChange = (event, newValue) => {
    setUrgency(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center">
        Contact Us
      </Typography>
      <div className={classes.sliderContainer}>
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
      <div className={classes.imageContainer}>
        <img src="http://www.easterngraphics.com/pcon/en/wp-content/uploads/2015/03/Musterwohnung-2.png" alt="apartment" className={classes.image} />
        <img src="https://youngandtheinvested.com/wp-content/uploads/invest-in-apartment-buildings.jpg" alt="building" className={classes.image} />
      </div>
      <div className={classes.formContainer}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          fullWidth
          className={classes.textField}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          className={classes.textField}
        />
        <TextField
          id="message"
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          className={classes.textField}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          Send
        </Button>
      </div>
    </div>

  );


      


}

export default PageThree;