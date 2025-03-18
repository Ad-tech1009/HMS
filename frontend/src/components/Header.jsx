import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation(); // Use location hook to track the current route

  // Check if the current route is one where you want to hide the header
  const hideHeaderPages = [
    '/login',
    '/about',
    '/contact',
    '/' // Home page (root route)
  ];

  // If the current route is in the `hideHeaderPages` array, don't render the header
  if (hideHeaderPages.includes(location.pathname)) {
    return null;
  }

  const headerBackgroundImage = "https://img.freepik.com/free-photo/empty-intensive-recovery-room-as-hospital-ward_16454044.htm#fromView=search&page=1&position=1&uuid=d9229cf2-0999-4185-ba84-80706a6c4855&query=Hospital+Background+dark"; // Header background image
  const pageBackgroundImage = "https://img.freepik.com/free-photo/empty-hospital-corridor-futuristic-design-dim-perspective-generated-by-ai_188544-29051.jpg?ga=GA1.1.11298892.1739889038&semt=ais_hybrid"; // Page background image

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensure that the page takes up at least the full height of the screen
        backgroundImage: `url(${pageBackgroundImage})`, // Set the page background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Ensure the page background stays fixed when scrolling
      }}
    >
      {/* Header Section */}
      <AppBar
        sx={{
          backdropFilter: 'blur(10px)', // Apply blur effect to header
          backgroundImage: 'none', // Remove background image from AppBar
          padding: 0,
          boxShadow: 'none',
          position: 'absolute', // Position header at the top
          width: '100%',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ color: 'white' }}>
            My Healthcare App
          </Typography>
          <div>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About Us</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <Button color="inherit" component={Link} to="/login">Login</Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* Main Content Section (Inside the header image area) */}
      <Box
        sx={{
          backgroundImage: `url(${headerBackgroundImage})`, // Header-specific background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: 4,
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '350px', // Adjust height of header content area (taller space)
          zIndex: 1,
          marginTop: '100px', // Move text further down on the page
        }}
      >
        <Box sx={{ maxWidth: '600px' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Providing Exceptional Healthcare Services
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Our hospital is dedicated to offering comprehensive medical care for all your healthcare needs. With over 20 years of experience, we are committed to ensuring your health and well-being.
          </Typography>
          <Button
            component={Link}
            to="/about"
            variant="contained"
            color="primary"
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              padding: '12px 30px',
              borderRadius: '30px',
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: 2,
          position: 'relative',
          bottom: 0,
          width: '100%',
          textAlign: 'center',
          color: 'white',
          marginTop: 'auto', // Ensure the footer stays at the bottom
        }}
      >
        <Typography variant="body2">© 2025 My Healthcare Center. All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Header;
