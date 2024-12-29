import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent(state, action) {
      state.events.push({ ...action.payload, id: Date.now() }); // Add event with unique ID
    },
    deleteEvent(state, action) {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
  },
});

export const { addEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
