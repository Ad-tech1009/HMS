import { Button, Container, Box } from '@mui/material';
import { Link } from 'react-router';

const backgroundImage = "https://cdn.pixabay.com/photo/2022/12/19/06/57/stethoscope-7664837_1280.jpg";

const HomePage = () => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
    }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        {/* Button Box */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,  // Add space between buttons
        }}>
          {/* Remove Healthcare Center text */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: '20px',
              padding: '12px 30px',
              background: 'linear-gradient(to right, #00c6ff, #0072ff)',
              '&:hover': {
                background: 'linear-gradient(to right, #0072ff, #00c6ff)',
              },
            }}
            component={Link} to="/appointment"
          >
            Appointment
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: '20px',
              padding: '12px 30px',
              background: 'linear-gradient(to right, #00c6ff, #0072ff)',
              '&:hover': {
                background: 'linear-gradient(to right, #0072ff, #00c6ff)',
              },
            }}
            component={Link} to="/doctors"
          >
            Our Doctors
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: '20px',
              padding: '12px 30px',
              background: 'linear-gradient(to right, #00c6ff, #0072ff)',
              '&:hover': {
                background: 'linear-gradient(to right, #0072ff, #00c6ff)',
              },
            }}
            component={Link} to="/get-appointment"
          >
            Get Appointment
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
