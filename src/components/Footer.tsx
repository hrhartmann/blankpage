import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

const Footer: React.FC = () => {
  const handleContactUs = () => {
    const recipient = 'example@test.com';
    const subject = 'Contact Us';
    const body = 'Dear Rivendel Team,\n\nI would like to inquire about...';

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Box sx={{ backgroundColor: 'black', padding: '40px 0', marginTop: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" color="white" gutterBottom>
          Subscribe to Our Newsletter
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="secondary" onClick={handleContactUs}>
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;