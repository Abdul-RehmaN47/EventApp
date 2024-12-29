import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEvent, deleteEvent } from '../../redux/eventSlice';
import { Grid, Card, CardContent, Typography, Button, TextField, Box } from '@mui/material';

const CrudPage = () => {
  const events = useSelector((state) => state.events.events);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [newEvent, setNewEvent] = useState({ title: '', description: '' });

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.description) {
      dispatch(addEvent(newEvent));
      setNewEvent({ title: '', description: '' });
    }
  };

  const handleDeleteEvent = (id) => {
    dispatch(deleteEvent(id));
  };

  return (
    <Box padding={2}>
      <center>
      <Typography variant="h4" gutterBottom>
        Adding New Event {user ? `- Welcome, ${user.name}` : ''}
      </Typography>
      </center>
      

      {/* Add Event Form */}
      <Box display="flex" gap={2} marginBottom={4}>
        <TextField
          label="Event Title"
          variant="outlined"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          fullWidth
        />
        <TextField
          label="Event Description"
          variant="outlined"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleAddEvent}>
          Add Event
        </Button>
      </Box>

      {/* Display Events */}
      <Grid container spacing={4}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{event.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {event.description}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteEvent(event.id)}
                sx={{ margin: 1 }}
              >
                Delete
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CrudPage;
