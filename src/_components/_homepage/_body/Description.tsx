import React from 'react';
import { Box, Typography } from '@mui/material';

const DescriptionComponent = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background with transparency
        backdropFilter: 'blur(10px)', // Blurring effect behind the component
        borderRadius: '16px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', // Soft shadow for depth
        p: 4, // Padding
        mx: { xs: 2, md: 4 }, // Horizontal margins for responsiveness
        mt: -10, // Negative margin to overlap the globe
        zIndex: 1, // Ensure it's above other elements
        width: { xs: '90%', md: '70%' }, // Responsive width
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        Look at what you have got here 👋
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          color: 'text.secondary', 
          textAlign: 'center', 
          mb: 3 
        }}
      >
       Dive into the vibrant culture, rich history, and breathtaking sights of London. 🏛️ 
        Our curated experiences showcase the best of the city, from iconic landmarks to local favorites. 🌆✨
      </Typography>
    </Box>
  );
};

export default DescriptionComponent;
