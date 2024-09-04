// src/components/BackButton.js
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <Button variant="outlined" onClick={handleBack}>
      Back
    </Button>
  );
};

export default BackButton;
