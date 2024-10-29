import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Thankyou: React.FC = () => {
  const navigate = useNavigate(); // Using useNavigate hook from react-router-dom

  const handleNavigateHome = () => {
    navigate('/'); // Navigate to home or any other desired route
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        padding: 4,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Thank You!
      </Typography>
      <Typography variant="h6" gutterBottom>
        Your message has been successfully sent.
      </Typography>
      <Typography variant="body1" paragraph>
        We appreciate your request and will get back to you shortly.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNavigateHome}
        sx={{ marginTop: 2 }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default Thankyou;
