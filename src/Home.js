import { Container, Typography, ImageList, ImageListItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';

var itemData = ['https://www.propertymanagementselect.com/wp-content/uploads/2015/04/sacramento-property-management-apartments.jpg','https://www.souciehorner.com/wp-content/uploads/2017/04/Kitchen2-1536.jpg','http://thedestinyformula.com/wp-content/uploads/2018/12/Boutique-hotel-Room-Studio-Apartment-Ideas-587c08153df78c17b6ab82ca.jpg'];

function Home() {
    return (
      <main>
        <div>
          <Container maxWidth='sm'>
        <Typography variant='h5' align='center' marginTop={10}>Welcome to our beautiful apartment complex. 
        We have a lot of great amenities to offer you.
          </Typography>

          <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
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
        <Link to="/page-two"><Button variant = 'contained' align = 'center'>Next Page</Button></Link>
        </Container>
        </div>
      </main>
    );
  }

  export default Home;