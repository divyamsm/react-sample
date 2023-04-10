import { Button, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function PageTwo() {
  return (
    <div align = 'center'>
      <h1>Apply</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <p/>
        <label>
          Gender:
          <input type="radio" name="gender" value="male" /> Male
          <input type="radio" name="gender" value="female" /> Female
        </label>
        <p/>
        <label>
          About me:
          <textarea />
        </label>
        <p/>
        <img src="https://cdn3.iconfinder.com/data/icons/real-estate-27/65/_Apartment_Building-512.png" alt="placeholder" />
        <p/>
        <div style={{ height: '200px', overflow: 'scroll' }}>
          <p>
          Our website provides a detailed description of each apartment, including the number of bedrooms and bathrooms, square footage, and any special features or amenities. We also provide information about the lease terms, such as the length of the lease and the monthly rent payment. In order to apply for an apartment, you'll need to submit an application, which includes personal information, proof of income, and a credit check. We may also ask for references, such as previous landlords or employers. Additionally, our website provides information about the community or neighborhood surrounding the apartment, including nearby schools, shopping centers, and public transportation options. We want to ensure that you have all the information you need to make the best decision for your housing needs.
          </p>
        </div>
      </form>
      <div>
        <Grid container alignContent={'center'} spacing={2}>
          <Grid item xs={6} sm = {2}><Link to="/"><Button variant='contained'> Previous Page</Button></Link></Grid>
          <Grid item xs={6} sm = {2}><Link to="/page-three"><Button variant='contained'> Next Page</Button></Link></Grid>
        </Grid>
      </div>
      
    </div>
  );
}

export default PageTwo;
