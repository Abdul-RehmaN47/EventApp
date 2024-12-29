import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import img1 from "../../../src/assets/1st.jpeg";
import img2 from "../../../src/assets/2nd.jpeg";
import img3 from "../../../src/assets/3rd.jpeg";
const EventCardsPage = () => {
  const events = [
    {
      id: 1,
      title: 'Our First Event',
      description: 'Birthday event',
      image: img1,
    },
    {
      id: 2,
      title: 'Our First Event',
      description: 'Farewell Party',
      image: img2,
    },
    {
      id: 3,
      title: 'Our Third Event',
      description: 'Wedding Event',
      image: img3 ,
    },
    {
      id: 4,
      title: 'Our Fourth Event',
      description: 'Birthday Party',
      image: img2,
    },
    {
      id: 5,
      title: 'Our Fifth Event',
      description: 'lorem ipsum dolor',
      image: img3,
    },
    {
      id: 6,
      title: 'Our SixthEvent',
      description: 'Marriage Arrangement',
      image: img1,
    },
  ];

  return (
    <>
    <center>
        <h1>
            Our Dashboard
        </h1>
    </center>
    <Grid container spacing={4} padding={2}>
      {events.map((event) => (
        <Grid item xs={12} sm={6} md={4} key={event.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={event.image}
              alt={event.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {event.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {event.description}
              </Typography>
            </CardContent>
            <Button size="small" sx={{ margin: 1 }}>Learn More</Button>
          </Card>
        </Grid>
      ))}
    </Grid>
    <hr />
    </>
  );
};

export default EventCardsPage;
