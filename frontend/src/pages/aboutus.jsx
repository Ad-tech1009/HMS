import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        paddingY: 4,
        backgroundImage: 'url(https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-gown_23-2149611193.jpg?w=1380&t=st=1715945720~exp=1715946320~hmac=2f7b9d1c6c7c1b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5)', // Add your background image URL here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Ensure the container covers the full height of the viewport
      }}
    >
      {/* About Us Title */}
      <Typography variant="h3" component="h1" color="primary" sx={{ textAlign: 'center', marginBottom: 4, color: 'white' }}>
        About Our Hospital
      </Typography>

      {/* Photos Section */}
      <Grid container spacing={4} sx={{ marginBottom: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://img.freepik.com/premium-photo/equipment-medical-devices-modern-operating-room-operating-theatre-selective-focus_116317-7449.jpg?semt=ais_hybrid"
              alt="Healthcare Image 1"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Advanced Machinery
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://img.freepik.com/free-photo/ordinary-busy-day-surgeon_329181-19717.jpg?semt=ais_hybrid"
              alt="Healthcare Image 2"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Treatment with Advanced Technology
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://img.freepik.com/free-photo/portrait-smiling-young-doctors-standing-together-portrait-medical-staff-inside-modern-hospital-smiling-camera_657921-885.jpg?semt=ais_hybrid"
              alt="Healthcare Image 3"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Experienced Doctors
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://img.freepik.com/free-photo/interior-view-operating-room_1170-2255.jpg?semt=ais_hybrid"
              alt="Healthcare Image 4"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Technology
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Information Section */}
      <Box sx={{ textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 4, borderRadius: 2 }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Our Mission and History
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph sx={{ maxWidth: '800px', margin: '0 auto' }}>
          Our hospital has a rich history of providing exceptional care to the community. Established in the early
          1900s, we have continuously evolved with medical advancements to become a leading healthcare provider.
          Our team of dedicated doctors, nurses, and medical staff work tirelessly to ensure the well-being of
          every patient we care for.
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph sx={{ maxWidth: '800px', margin: '0 auto' }}>
          We believe in providing not only top-notch medical treatments but also a caring and compassionate
          environment for our patients. Our hospital has been a symbol of hope and healing, and we continue to
          strive for excellence in all aspects of healthcare.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;