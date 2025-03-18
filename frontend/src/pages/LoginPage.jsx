import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Card, CardContent, MenuItem, Select, InputLabel, FormControl, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const backgroundImage = "https://img.freepik.com/free-photo/young-doctor-supporting-his-patient_1098-2237.jpg?semt=ais_hybrid";

const LoginPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [dob, setDob] = useState('');
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Role:', role);
    console.log('Date of Birth:', dob);
  };

  const handleSignUpOpen = () => {
    setOpenSignUp(true);
  };

  const handleSignUpClose = () => {
    setOpenSignUp(false);
  };

  const handleSignUpSubmit = () => {
    console.log('Sign Up - First Name:', firstName);
    console.log('Sign Up - Last Name:', lastName);
    console.log('Sign Up - Email:', email);
    console.log('Sign Up - Password:', password);
    console.log('Sign Up - Role:', role);
    console.log('Sign Up - Date of Birth:', dob);

    setOpenSignUp(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', // Ensure the background covers the entire page
      }}
    >
      {/* Overlay to improve readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
          zIndex: 0,
        }}
      ></div>

      <Container maxWidth="xs" sx={{ position: 'relative', zIndex: 1 }}>
        <Card
          sx={{
            borderRadius: '20px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            padding: 4,
            maxWidth: '400px',
            margin: '0 auto',
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h4"
                color="primary"
                sx={{
                  fontWeight: 'bold',
                  letterSpacing: '1.5px',
                  marginBottom: 2,
                }}
              >
                Welcome Back!
              </Typography>

              <Typography
                variant="subtitle1"
                color="textSecondary"
                sx={{
                  fontWeight: 'bold',
                  marginBottom: 3,
                }}
              >
                Please login to continue
              </Typography>

              <form onSubmit={handleLogin} style={{ width: '100%' }}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  margin="normal"
                  sx={{
                    borderRadius: '30px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '30px',
                    },
                    background: '#fff',
                  }}
                />

                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  margin="normal"
                  sx={{
                    borderRadius: '30px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '30px',
                    },
                    background: '#fff',
                  }}
                />

                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  sx={{
                    borderRadius: '30px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '30px',
                    },
                    background: '#fff',
                  }}
                />

                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin="normal"
                  sx={{
                    borderRadius: '30px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '30px',
                    },
                    background: '#fff',
                  }}
                />

                <TextField
                  label="Date of Birth"
                  variant="outlined"
                  type="date"
                  fullWidth
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  margin="normal"
                  sx={{
                    borderRadius: '30px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '30px',
                    },
                    background: '#fff',
                  }}
                />

                <FormControl fullWidth margin="normal" sx={{ borderRadius: '30px' }}>
                  <InputLabel id="role-select-label">Role</InputLabel>
                  <Select
                    labelId="role-select-label"
                    id="role-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    label="Role"
                    sx={{
                      borderRadius: '30px',
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '30px',
                      },
                      background: '#fff',
                    }}
                  >
                    <MenuItem value="Patient">Patient</MenuItem>
                    <MenuItem value="Doctor">Doctor</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    marginTop: 2,
                    padding: '12px',
                    borderRadius: '30px',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                    '&:hover': {
                      background: 'linear-gradient(to right, #0072ff, #00c6ff)',
                    },
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  Login
                </Button>
              </form>

              <Box sx={{ marginTop: 3 }}>
                <Typography variant="body2" color="textSecondary">
                  New user?{' '}
                  <Button
                    onClick={handleSignUpOpen}
                    sx={{
                      color: '#0072ff',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>

      {/* Sign-Up Modal */}
      <Dialog open={openSignUp} onClose={handleSignUpClose}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            margin="normal"
          />

          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            margin="normal"
          />

          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />

          <TextField
            label="Date of Birth"
            variant="outlined"
            type="date"
            fullWidth
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            margin="normal"
          />

          <FormControl fullWidth margin="normal">
            <InputLabel id="role-select-label-signup">Role</InputLabel>
            <Select
              labelId="role-select-label-signup"
              id="role-select-signup"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              label="Role"
            >
              <MenuItem value="Patient">Patient</MenuItem>
              <MenuItem value="Doctor">Doctor</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSignUpClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSignUpSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginPage;