import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f8f9fa',
        padding: '10px 0',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; 2024 Event Planner. All Rights Reserved By Dev Abdul Rehman.
      </Typography>
    </Box>
  );
};

export default Footer;