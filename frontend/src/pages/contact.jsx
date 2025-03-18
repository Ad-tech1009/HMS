import React from 'react';
import { Container, Box, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  const backgroundImage = "https://img.freepik.com/free-photo/secretary-agreeing-appointment_1098-3357.jpg?t=st=1739891454~exp=1739895054~hmac=9a0fd39dda02741dd804f47cf29d437e3bfbbf12149eee35510e2542d3862f40&w=1060"; // Background image URL

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'full',
        width: 'full',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: 4,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', zIndex: 1 }}>
        {/* Header with changed font color */}
        <Typography variant="h3" sx={{ marginBottom: 3, fontWeight: 'bold', color: '#ffffff' }}>
          Get In Touch With Us
        </Typography>

        {/* Body text with changed font color */}
        <Typography variant="body1" sx={{ marginBottom: 4, color: '#e0e0e0' }}>
          Feel free to reach out to us for any questions, concerns, or appointments.
        </Typography>

        {/* Contact Form */}
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // To make form stand out
            padding: 4,
            borderRadius: 3,
            boxShadow: 3,
            width: '100%',
            maxWidth: 500,
          }}
        >
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            InputProps={{
              style: {
                backgroundColor: 'white',
              },
            }}
          />
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            InputProps={{
              style: {
                backgroundColor: 'white',
              },
            }}
          />
          <TextField
            label="Your Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: 2 }}
            InputProps={{
              style: {
                backgroundColor: 'white',
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: 'none',
              padding: '12px 30px',
              fontWeight: 'bold',
            }}
          >
            Send Message
          </Button>
        </Box>

        {/* Additional Contact Info */}
        <Box sx={{ marginTop: 4 }}>
          {/* Section titles with different color */}
          
          <Typography variant="body1" sx={{ color: 'blue' }}>123 Healthcare Ave, Medical City, 12345</Typography>
          <Typography variant="h6" sx={{ color: 'blue', marginTop: 2 }}>Phone:+1 (234) 567-8901</Typography>
        
          <Typography variant="h6" sx={{ color: 'blue', marginTop: 2 }}>Email:contact@healthcare.com</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
