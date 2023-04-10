import { Label } from '@mui/icons-material';
import { Container, Typography, ImageList, ImageListItem, Button, List, ListItem, ListItemText} from '@mui/material';
import { Link} from 'react-router-dom';

var itemData = ['https://www.propertymanagementselect.com/wp-content/uploads/2015/04/sacramento-property-management-apartments.jpg','https://www.souciehorner.com/wp-content/uploads/2017/04/Kitchen2-1536.jpg','http://thedestinyformula.com/wp-content/uploads/2018/12/Boutique-hotel-Room-Studio-Apartment-Ideas-587c08153df78c17b6ab82ca.jpg'];

function Home() {

  const zipCodes = [
    { code: '90210', city: 'Beverly Hills', state: 'CA' },
    { code: '10001', city: 'New York', state: 'NY' },
    { code: '60611', city: 'Chicago', state: 'IL' },
    { code: '33139', city: 'Miami Beach', state: 'FL' },
    { code: '98101', city: 'Seattle', state: 'WA' },
  ];

    return (
      <main>
        <div>
          <Container maxWidth='large'>
        <Typography id ="welcome" variant='h5' align='left' marginTop={10}>Welcome to our beautiful apartment complex. 
        We have a lot of great amenities to offer you.
          </Typography>

          <ImageList sx={{ width: 650, height: 500 }} variant="standard" cols={3} gap={8}>
  {itemData.map((item) => (
    <ImageListItem key={item}>
      <img
        src={`${item}?w=161&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>

<Label align='right'>Choose your zip code : </Label>
<List >
  {zipCodes.map((zipCode) => (
    <ListItem button key={zipCode.code}>
      <ListItemText primary={`${zipCode.city}, ${zipCode.state} ${zipCode.code}`} />
    </ListItem>
  ))}
</List>
        <Link to="/page-three"><Button size="large" variant = 'contained' align = 'right'>Next Page</Button></Link>
        </Container>
        </div>
      </main>
    );
  }

  export default Home;