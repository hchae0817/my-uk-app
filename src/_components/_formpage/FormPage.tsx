import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import BackButton from '../BackButton';
import CategoryForm from './CategoryForm';

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Container>
      {/* <BackButton/> */}
      <Typography variant="h4" gutterBottom>
        Fill in the Form
      </Typography>
      <CategoryForm />
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Box
          sx={{
            display: 'flex', 
            justifyContent: 'flex-end',
            marginTop: 2,
          }}
        >
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default FormPage;
