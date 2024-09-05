import React from 'react';
import { Box, Typography, IconButton, Grid, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat'; // KakaoTalk (You can replace with actual icon if available)
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        color: 'white',
        py: 4,
        px: { xs: 2, sm: 4 },
        textAlign: 'center',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Company Information */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            todoUK
          </Typography>
          <Typography variant="body2">
            © {new Date().getFullYear()} todoUK. All rights reserved.
          </Typography>
        </Grid>

        {/* Social Media Icons */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton
              component={Link}
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              sx={{ color: 'white' }}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>

            <IconButton
              component={Link}
              href="mailto:contact@todouk.com"
              aria-label="Email"
              sx={{ color: 'white' }}
            >
              <EmailIcon fontSize="large" />
            </IconButton>

            <IconButton
              component={Link}
              href="https://kakaotalk.com"
              target="_blank"
              aria-label="KakaoTalk"
              sx={{ color: 'white' }}
            >
              <ChatIcon fontSize="large" />
            </IconButton>

            {/* You can add more icons here if needed */}
            <IconButton
              component={Link}
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              sx={{ color: 'white' }}
            >
              <FacebookIcon fontSize="large" />
            </IconButton>

            <IconButton
              component={Link}
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              sx={{ color: 'white' }}
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">
            Email: contact@todouk.com
          </Typography>
          <Typography variant="body2">
            Phone: +44 1234 567 890
          </Typography>
          <Typography variant="body2">
            Address: 123 London Road, UK
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
